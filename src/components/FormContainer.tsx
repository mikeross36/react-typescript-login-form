import React from "react"
import SignupForm from "./SignupForm"
import LoginForm from "./LoginForm"
import useForm from "../hooks/useForm"
import { motion } from "framer-motion"
import {backdropVariants, expandingTransition} from "../hooks/formVariants"
import validation from "../helpres/validation"

export default function FormContainer() {
    const {isActive, isExpanding, switchToSignup, switchToLogin} = useForm({ validation })
    
    return (
        <section>
            <main className="form-container">
                <div className="top-container">
                    <motion.canvas className="back-drop"
                        variants={backdropVariants}
                        initial={"false"}
                        animate={isExpanding ? "expand" : "shrink"}
                        transition={expandingTransition}
                    >
                    </motion.canvas>
                    {isActive === "login" && (
                        <div className="header-container">
                            <h2 className="header-text">Welcome</h2>
                            <small className="small-text">
                                please login to continue
                            </small>
                        </div>
                    )}
                    {isActive === "signup" && (
                        <div className="header-container">
                            <h2 className="header-text">Create Account</h2>
                            <small className="small-text">
                                please signup to continue
                            </small>
                        </div>
                    )}
                </div>
                <div className="inner-container">
                    {isActive === "login" && (
                        <LoginForm switchToSignup={switchToSignup}/>
                    )}
                    {isActive === "signup" && (
                        <SignupForm switchToLogin={switchToLogin}/>
                    )}
                </div>
            </main>
        </section>
    )
}