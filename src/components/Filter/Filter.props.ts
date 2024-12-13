import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IFilter } from '../../interfaces/filter';

export interface FilterProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    current: IFilter;
    changeFilter: (filter: IFilter) => void;
}
