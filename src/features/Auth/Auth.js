export function Auth() {
    return (
        <>
        <h1>Register</h1>
        <form>
            <p>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"></input>
            </p>
            <p>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"></input>
            </p>
            <p>
                <label htmlFor="retype_password">Re-type Password</label>
                <input type="password" name="retype_password" id="retype_password"></input>
            </p>
            <p>
                <label htmlFor="fName">First Name</label>
                <input type="text" name="fName" id="fName"></input>
            </p>
            <p>
                <label htmlFor="lName">Last Name</label>
                <input type="text" name="lName" id="lName"></input>
            </p>
            <p>
                <button>Register</button>
            </p>
        </form>
        </>
    )
};