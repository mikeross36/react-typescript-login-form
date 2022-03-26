import React, { useState } from "react"
import { expandingTransition } from "./formVariants"

interface Ierror {
    username: "",
    email: ""
    password: "",
    password2:""
}

export default function useForm({ validation }: { validation: Function }) {
    const [isActive, setIsActive] = useState("login")
    const [isExpanding, setIsExpanding] = useState(false)
    const [inputValues, setInputValues] = useState({ username: "", email: "", password: "", password2: "" })
    const [errors, setErrors] = useState<Ierror>({} as Ierror)

    function expandingAnimation(): () => void {
        setIsExpanding(true)
        const timer = setTimeout(function () {
            setIsExpanding(false)
        }, expandingTransition.duration * 1000 - 1500)
        return function () {
            clearTimeout(timer)
        }
    };

    function switchToSignup(): () => void {
        expandingAnimation()
        const timer = setTimeout(function () {
            setIsActive("signup")
        }, 400)
        return function () {
            clearTimeout(timer)
        }
    };

    function switchToLogin() {
        expandingAnimation()
        const timer = setTimeout(function () {
            setIsActive("login")
        }, 400)
        return function () {
            clearTimeout(timer)
        }
    };

    function handleInputChange(e:React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target;
        setInputValues({...inputValues, [name]:value})
    };

    function handleFormSubmit(e:React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        setErrors(validation(inputValues))
        setInputValues({username:"",email:"",password:"",password2:""})
    }

    return {
        isActive,
        isExpanding,
        switchToSignup,
        switchToLogin,
        inputValues,
        handleInputChange,
        handleFormSubmit,
        errors
    }

    // return [
    //     isActive,
    //     isExpanding,
    //     switchToSignup,
    //     switchToLogin,
    //     inputValues,
    //     handleInputChange,
    //     handleFormSubmit,
    //     errors
    // ] as const 
}