import React, {useState, useEffect} from "react"

export default function Error(props: { children: JSX.Element | null}) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(function () {
        while (props.children) {
            setIsVisible(true)
            const timer = setTimeout(function () {
                setIsVisible(false)
            }, 2000)
            return function () {
                clearTimeout(timer)
            }
        }   
        // if (!props.children) {
        //     setIsVisible(false)
        //     return;
        // }
        // else {
        //     setIsVisible(true)
        //     const timer = setTimeout(function () {
        //         setIsVisible(false)
        //     }, 2000)
        //     return function () {
        //         clearTimeout(timer)
        //     }
        // }
    }, [props.children])
    if (!isVisible) return null
    
    
    return (
        <small className="error">{props.children}</small>
    )
}