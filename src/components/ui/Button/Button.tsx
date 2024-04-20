import styles from './Button.module.scss'
import Link from 'next/link'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    renderAs: "link"
    href: string
}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    renderAs?: "button" 
}

type Props = (LinkProps | ButtonProps) & {
    active?: boolean
    secondary?: boolean
}

const Button = ({ children, className, secondary, active, ...props} : Props ) => {  
    const classes = `${styles.btn} ${active ? styles.active : ""} ${className ? className : ""} ${secondary ? styles.secondary : styles.primary}`
    
    if (props.renderAs === 'link') {
        const { renderAs, ...newProps } = props

        return (
            <Link className={classes} {...newProps}>
                {children}
            </Link>
        )
    }

    return (    
        <button className={classes} {...props}>
            {children}
        </button>
    )
}

Button.displayName = 'Button';

export default Button;



