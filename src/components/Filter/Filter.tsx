import cn from "classnames";
import styles from "./Filter.module.css";
import { FilterProps } from "./Filter.props";
import { Button } from '../Button/Button';

export const Filter = ({
    className,
    current,
    changeFilter,
    ...props
}: FilterProps): JSX.Element => {
    return (
        <div className={cn(styles.wrapper, className)} {...props}>
            <Button
                size="m"
                onClick={() => changeFilter("all")}
                disabled={current === "all"}
            >
                All
            </Button>
            <Button
                size="m"
                onClick={() => changeFilter("active")}
                disabled={current === "active"}
            >
                Active
            </Button>
            <Button
                size="m"
                onClick={() => changeFilter("completed")}
                disabled={current === "completed"}
            >
                Completed
            </Button>
        </div>
    );
};
