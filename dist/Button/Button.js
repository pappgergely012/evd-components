"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
require("../styles/Button.scss");
exports.Button = function (props) {
    var type = props.type, className = props.className, position = props.position, wider = props.wider, style = props.style;
    var getClasses = function () {
        var classes = 'button';
        if (type)
            classes += " " + type;
        if (className)
            classes += " " + className;
        if (position)
            classes += " " + position;
        if (wider)
            classes += " wide";
        return classes;
    };
    var getStyle = function () {
        var stl = { color: '#fff', backgroundColor: '#c4c4c4', border: '1px solid #c4c4c4' };
        return style || stl;
    };
    return (react_1.default.createElement("button", { onClick: props.onClick, style: getStyle(), className: getClasses(), type: "button" }, props.title));
};
//# sourceMappingURL=Button.js.map