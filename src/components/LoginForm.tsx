import React from "react"
import useForm from "../hooks/useForm"
import validation from "../helpres/validation"
import Error from "./Error"

type dataFormProps = {
    switchToSignup: ()=>void
}

export default function LoginForm({ switchToSignup }: dataFormProps): JSX.Element{
    const {inputValues, handleInputChange, handleFormSubmit, errors} = useForm({ validation })

    return (
        <div className="inner-container">
            <form action="#">
                <div>
                    {errors.email && <Error>{errors.email}</Error>}
                    <input
                        type="email"
                        className="input"
                        placeholder="email..."
                        name="email"
                        value={inputValues.email}
                        onChange={()=> handleInputChange}
                    />
                </div>
                <div>
                    {errors.password && <Error>{errors.password}</Error>}
                    <input
                        type="password"
                        className="input"
                        placeholder="password..."
                        name="password"
                        value={inputValues.password}
                        onChange={()=> handleInputChange}
                    />
                </div>
            </form>
            <a href="https://passwordsgenerator.net/" target="_blank" rel="noreferrer" className="muted-link">
                forgot your password?
            </a>
            <button
                onClick={handleFormSubmit}
                className="submit-btn"
                type="submit">
                Login
            </button>
            <div>
                <a href="none" className="muted-link">
                    don't have an account?
                </a>
                <span onClick={switchToSignup} className="bold-link">signup</span>
            </div>
        </div>
    )
}