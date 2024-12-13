import cn from "classnames";
import styles from "./Form.module.css";
import { FormProps } from "./Form.props";
import { Button } from "../Button/Button";
import { useState } from "react";

export const Form = ({
    addText,
    className,
    ...props
}: FormProps): JSX.Element => {
    const [text, setText] = useState<string>("");
    const [error, setError] = useState<string>("");

    const validation = (text: string): boolean => {
        if (text.trim().length < 1) {
            setText("");
            setError("Текст не должен быть пустым");
            return false;
        } else if (text.trim().length > 100) {
            setError("Текст не должен превышать 100 символов");
            return false;
        }
        setError("");
        return true;
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        validation(e.target.value);
        setText(e.target.value);
    };

    const submitAction = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (validation(text)) {
            addText(text.trim());
            setText("")
        }
    };

    return (
        <form
            onSubmit={submitAction}
            className={cn(styles.wrapper, className)}
            {...props}
        >
            <div className={styles.inputWrapper}>
                <input
                    type="text"
                    className={cn(styles.input, {
                        [styles.error]: error,
                    })}
                    placeholder="text here..."
                    onChange={onChange}
                    value={text}
                />
                {error && <span className={styles.errorText}>{error}</span>}
            </div>

            <Button
                size="l"
                type="submit"
                disabled={error ? true : false}
            >
                Add task
            </Button>
        </form>
    );
};
