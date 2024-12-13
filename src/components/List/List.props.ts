import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ITask } from '../../interfaces/task';

export interface ListProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    tasks: ITask[];
    onToggleTaskStatus: (_id: string) => void
}
