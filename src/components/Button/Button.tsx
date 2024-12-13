import cn from "classnames";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";

export const Button = ({
    size = "m",
    notice,
    disabled,
    children,
    className,
    ...props
}: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, styles[size], {
                [styles.notice]: notice,
                [styles.disabled]: disabled
            })}
            {...props}
        >
            {children}
        </button>
    );
};
