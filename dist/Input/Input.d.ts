import * as React from "react";
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
    onChange: (val: string) => void;
}
export interface IState {
    focused: boolean;
}
export default class Input extends React.Component<IInput, IState> {
    constructor(props: IInput);
    getStyle: () => string;
    onblur: () => void;
    onfocus: () => void;
    render(): JSX.Element;
}
