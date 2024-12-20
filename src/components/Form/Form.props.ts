import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FormProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLFormElement>,
        HTMLFormElement
    > {
    addText: (text: string) => void;
}
