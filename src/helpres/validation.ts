interface inputVal {
    username: string
    email: string,
    password: string,
    password2: string
}

export default function validation(inputValues: inputVal): {} {
    let errors: inputVal = {
        username: "",
        email: "",
        password: "",
        password2: ""
    }
    const regex = /^\S+@\S+$/i

    if (!inputValues.username) errors.username = "username is mandatory!"
    
    if (!inputValues.email) errors.email = "email is mandatory!"
    
    if (!inputValues.email.match(regex)) errors.email = "email is not valid!"
    
    if (!inputValues.password) errors.password = "password is mandatory!"
    
    if (!inputValues.password2) errors.password2 = "confirmation is mandatory!"
    
    if (inputValues.password !== inputValues.password2) errors.password = "passwords do not match!"
    
    if(inputValues.password.length !== inputValues.password2.length) errors.password2 = "passwords do not match!"

    return errors;
}