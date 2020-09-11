/// <reference types="react" />
import '../styles/Input.scss';
export interface IInput {
    placeholder: string;
    value: string;
    isHalf?: boolean;
    className?: string;
    error?: string;
    type?: string;
    activeColor?: string;
    onBlur?: () => void;
    onFocus?: () => void;
    onChange: (val: string) => void;
}
export interface IState {
    focused: boolean;
}
export declare const Input: (props: IInput) => JSX.Element;
