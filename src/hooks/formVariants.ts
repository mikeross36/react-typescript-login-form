export const backdropVariants = {
    expand: {
        width: "230%",
        height: "80rem",
        borderRadius: "30%",
        transform: "rotate(60deg)"
    },
    shrink: {
        width: "170%",
        height: "22rem",
        borderRadius: "40%",
        transform: "rotate(60deg)"
    }
};

export const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30
}