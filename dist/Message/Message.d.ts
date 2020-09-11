/// <reference types="react" />
import '../styles/Message.scss';
interface IMessage {
    txt: string;
    type: "error" | "success" | "warning";
}
export declare const Message: (props: IMessage) => JSX.Element;
export {};
