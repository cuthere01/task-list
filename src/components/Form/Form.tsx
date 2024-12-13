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

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setText(e.target.value);
    };

    const submitAction = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        addText(text.trim());
        setText("");
    };

    return (
        <form
            onSubmit={submitAction}
            className={cn(styles.wrapper, className)}
            {...props}
        >
            <input
                type="text"
                className={styles.input}
                placeholder="text here..."
                onChange={onChange}
                value={text}
            />
            <Button size="l" type="submit">
                Add task
            </Button>
        </form>
    );
};
