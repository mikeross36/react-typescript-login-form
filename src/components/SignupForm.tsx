import React from "react";
import useForm from "../hooks/useForm";
import validation from "../helpres/validation";
import Error from "./Error";

interface dataFormProps {
    switchToLogin: ()=>void
}

export default function SignupForm({ switchToLogin }: dataFormProps): JSX.Element {
    const {inputValues, handleInputChange, handleFormSubmit, errors} = useForm({ validation })
    
    return (
        <div className="inner-container">
            <form action="#">
                <div>
                    {errors.username && <Error>{errors.username}</Error>}
                    <input
                        type="text"
                        className="input"
                        placeholder="username..."
                        name="username"
                        value={inputValues.username}
                        onChange={()=> handleInputChange}
                    />
                </div>
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
                <div>
                    {errors.password2 && <Error>{errors.password2}</Error>}
                    <input
                        type="password"
                        className="input"
                        placeholder="confirm password..."
                        name="password2"
                        value={inputValues.password2}
                        onChange={()=> handleInputChange}
                    />
                </div>
            </form>
            <button
                onClick={handleFormSubmit}
                className="submit-btn"
                type="submit">
                    Signup
            </button>
            <div>
                <a href="none" className="muted-link">already have an account</a>
                <span onClick={switchToLogin} className="bold-link">login</span>
            </div>
        </div>
    )
}