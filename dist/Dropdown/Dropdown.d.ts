/// <reference types="react" />
import '../styles/Dropdown.scss';
export interface IDropdown {
    data: any[];
    placeholder: string;
    defaultSelected?: string;
    errorMsg?: string;
    keyExtractor: (val: any) => number;
    labelExtractor: (val: any) => string;
    onItemClicked: (val: any) => void;
}
export interface IState {
    formedData: any[];
    title: string;
    selected?: string;
    showList: boolean;
}
export declare const Dropdown: (props: IDropdown) => JSX.Element;
