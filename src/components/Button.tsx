import type { ButtonProps } from "../types"

const Button = ({href, className, children, onClick}: ButtonProps) => {
    const classes = `${className 
        ? '' 
        : 'px-8 py-5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'}`
    const spanClasses = `relative z-10 uppercase`

    const renderButton = () => {
        return (
            <button className={classes} onClick={onClick}>
                <span className={spanClasses}>{children}</span>
            </button>
        )
    }

    const renderLink = () => {
        return (
        <a className={classes} href={href}>
            <span className={spanClasses}>{children}</span>
        </a>
        )
    }

    return href ? renderLink() : renderButton();
}

export default Button;
