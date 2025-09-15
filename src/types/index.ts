export interface ButtonProps {
    href?: string;
    className?: string;
    children?: any;
    onClick?: () => void;
}

export interface TitleProps {
    text: string;
    right?:boolean;
    center?: boolean
}