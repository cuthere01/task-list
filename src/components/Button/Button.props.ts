import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    size?: "s" | "m" | "l";
    disabled?: boolean;
    notice?: boolean;
}
