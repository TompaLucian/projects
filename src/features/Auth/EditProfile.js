import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Navigate, useLocation } from "react-router-dom";
import styles from "./Auth.module.css";
import { useAuthContext } from "./AuthContext";

export function EditProfile() {
    const [values, setValues] = useState({
    email: '',
    password: '',
    newpassword: '',
    retype_newpassword: '',
    firstName: '',
    lastName: '',
});
    
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        newpassword: '',
        retype_newpassword: '',
        firstName: '',
        lastName: '',
    });
    
    const { userId } = useParams();
    const {user} = useAuthContext();
    
    useEffect(() => {
        fetch('http://localhost:3005/users/' + userId)
        .then((res) => res.json())
        .then((data) => setValues(data));
    }, [userId])


    const [message, setMessage] = useState('');
    
    const {accessToken} = useAuthContext();

    function handleInputChange(e) {
        setErrors({ errors, [e.target.name]: '' });
        setValues({ values, [e.target.name]: e.target.value }); 
    }



    async function handleSubmit(e) {
        e.preventDefault();
        const data = await fetch('http://localhost:3005/users/' + values.id, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(values),
        }).then((res) => res.json());

        setMessage('Your info was updated successfully');    
    }

    return (
        <>
        { user && (
        <div className={styles['main-container']}>
            <img className={styles['form_pic']} alt="form-pic" src="https://images.squarespace-cdn.com/content/v1/59e50cf8f09ca4dd03953fb6/1569595583027-TICQWXHMUBCT9GO6ULZY/iStock-874700028.jpg?format=2500w" />
            <div>
                <h1 className={styles['register']}>Update your info</h1>
                {message && (<p className={styles['message']}>{message}</p>)}
                {errors.serverError && <p className={styles['server']}>{errors.serverError}</p>}
                <form onSubmit={handleSubmit} className={styles['form']}>
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
                        <label className={styles['label']} htmlFor="newpassword">New password</label>
                        <input className={styles['input']}
                            type="password" 
                            name="newpassword" 
                            id="newpassword"                     
                            value={values.newpassword}    
                            onChange={handleInputChange}>
                            </input>
                    </p>
                    {errors.password && <p className={styles['password-err']}>{errors.password}</p>}
                    <p>
                        <label className={styles['label']} htmlFor="retype_newpassword">Re-type new password</label>
                        <input className={styles['input']}
                        type="password" 
                        name="retype_newpassword" 
                        id="retype_newpassword"
                        value={values.retype_newpassword}
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
                        <button className={styles['button']}>Update</button>
                    </p>
                </form>
            </div>
        </div>
        )}
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

