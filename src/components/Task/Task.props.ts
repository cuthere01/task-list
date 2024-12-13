import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ITask } from "../../interfaces/task";

export interface TaskProps
    extends ITask,
        DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    onToggle: () => void;
}
