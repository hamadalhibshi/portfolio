import type { ButtonProps } from "../types"

const Button = ({href, className, children}: ButtonProps) => {
    const classes = `${className 
        ? '' 
        : 'button relative infline-flex items-center justify-center h-11 transition-colors hover:text-color-1'}`
    const spanClasses = `relative z-10`

    const renderButton = () => {
        return (
            <button className={classes}>
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
