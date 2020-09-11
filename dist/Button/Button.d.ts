/// <reference types="react" />
import '../styles/Button.scss';
interface IButton {
    title: string;
    onClick: () => void;
    type?: "square" | "rounded";
    position?: "left" | "center" | "right";
    className?: string;
    style?: object;
    wider?: boolean;
}
export declare const Button: (props: IButton) => JSX.Element;
export {};
