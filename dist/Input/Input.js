"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var react_1 = __importStar(require("react"));
require("../styles/Input.scss");
exports.Input = function (props) {
    var _a = react_1.useState(false), focused = _a[0], setFocus = _a[1];
    var value = props.value, className = props.className, error = props.error, onBlur = props.onBlur, onFocus = props.onFocus, onChange = props.onChange, type = props.type, isHalf = props.isHalf, placeholder = props.placeholder, activeColor = props.activeColor;
    var getStyle = function () {
        var style = 'input-container';
        if (focused) {
            style += ' focused';
        }
        if (value !== '') {
            style += ' not-empty';
        }
        if (className) {
            style += " " + className;
        }
        return style;
    };
    var getError = function () {
        if (error) {
            return (react_1.default.createElement("div", { className: "input-error" }, error));
        }
    };
    var blur = function () {
        setFocus(false);
        if (onBlur) {
            onBlur();
        }
    };
    var focus = function () {
        setFocus(true);
        if (onFocus) {
            onFocus();
        }
    };
    return (react_1.default.createElement("div", { className: isHalf ? 'half-input-outer' : 'full-input-outer' },
        react_1.default.createElement("div", { className: getStyle() },
            react_1.default.createElement("label", { className: "input-placeholder", style: activeColor && focused ? { color: activeColor } : undefined }, placeholder),
            react_1.default.createElement("input", { className: "input", value: value, style: activeColor && focused ? { boxShadow: "0 4px 4px rgba(" + activeColor + ", .4)", borderColor: activeColor } : undefined, onChange: function (ev) { return onChange(ev.target.value); }, onBlur: function () { return blur(); }, onFocus: function () { return focus(); }, type: type })),
        getError()));
};
//# sourceMappingURL=Input.js.map