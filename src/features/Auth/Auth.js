import { useState } from "react";
import styles from "./Auth.module.css";

export function Auth() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        retype_password: '',
        firstName: '',
        lastName: '',
    }); 

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        retype_password: '',
        firstName: '',
        lastName: '',
        serverError: '',
    });

    function handleInputChange(e) {
        setErrors({...errors, [e.target.name]: ''});
        setValues({...values, [e.target.name]: e.target.value}); 
    }
    
    async function HandleSubmit(e) {
        e.preventDefault();

        const validation = validateForm(values);

        if(!validation.isValid) {
            setErrors(validation.errors)
            return;
        }
    
       const {retype_password, ...dataForServer} = values;

       const data = await fetch('http://localhost:3005/api/register', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(dataForServer),
       }).then((res) => res.json());

       console.log(data);
       if(!data.accesToken) {
        setErrors({...errors, serverError: data});
       }
    }


    return (
        <>
        <div className={styles['main-container']}>
            <h1 className={styles['register']}>Register</h1>
            {errors.serverError && <p className={styles['server']}>{errors.serverError}</p>}
            <form onSubmit={HandleSubmit} className={styles['form']}>
                <p>
                    <label className={styles['label']} htmlFor="email">Email</label>
                    <input className={styles['input']}
                     type="email" 
                     name="email" 
                     id="email"
                     value={values.email}
                     onChange={handleInputChange}>
                     </input>
                </p>
                {errors.email && <p className={styles['email']}>{errors.email}</p>}
                <p>
                    <label className={styles['label']} htmlFor="password">Password</label>
                    <input className={styles['input']}
                     type="password" 
                     name="password" 
                     id="password"                     
                     value={values.password}    
                     onChange={handleInputChange}>
                     </input>
                </p>
                {errors.password && <p className={styles['password-err']}>{errors.password}</p>}
                <p>
                    <label className={styles['label']} htmlFor="retype_password">Re-type Password</label>
                    <input className={styles['input']}
                     type="password" 
                     name="retype_password" 
                     id="retype_password"
                     value={values.retype_password}
                     onChange={handleInputChange}>
                     </input>
                </p>
                {errors.retype_password && <p className={styles['retype_password-err']}>{errors.retype_password}</p>}
                <p>
                    <label className={styles['label']} htmlFor="firstName">First Name</label>
                    <input className={styles['input']}
                     type="text" 
                     name="firstName" 
                     id="firstName"
                     value={values.firstName}
                     onChange={handleInputChange}>
                     </input>
                </p>
                {errors.firstName && <p className={styles['firstName-err']}>{errors.firstName}</p>}
                <p>
                    <label className={styles['label']} htmlFor="lastName">Last Name</label>
                    <input className={styles['input']}
                     type="text" 
                     name="lastName" 
                     id="lastName"                     
                     value={values.lastName}
                     onChange={handleInputChange}>
                     </input>
                </p>
                {errors.lastName && <p className={styles['lastName-err']}>{errors.lastName}</p>}
                <p>
                    <button className={styles['button']}>Register</button>
                </p>
            </form>
        </div>
        </>
    )
};

function validateForm(values) {
    const validation = {
        errors: {
            email: '',
            password: '',
            retype_password: '',
            firstName: '',
            lastName: '',
        },
        isValid: true,
    };

    /* eslint-disable no-control-regex*/
    const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

    if (!values.email || !emailRegex.test(values.email)) {
        validation.isValid = false;
        validation.errors.email = 'Please enter a valid email address';
    }

    if (!values.password || values.password.lenght < 6) {
        validation.isValid = false;
        validation.errors.password = 'Please enter a password that is at least 6 characters long';
    }

    if(values.password !== values.retype_password) {
        validation.isValid = false;
        validation.errors.retype_password = "Please enter the same password as above";
    }

    if (!values.firstName) {
        validation.isValid = false;
        validation.errors.firstName = "Please enter your first name";
   
    }

    if (!values.lastName) {
        validation.isValid = false;
        validation.errors.lastName = "Please enter your last name";
    }

    return validation;
}