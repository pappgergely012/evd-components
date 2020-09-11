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
exports.Message = void 0;
var react_1 = __importStar(require("react"));
require("../styles/Message.scss");
exports.Message = function (props) {
    var txt = props.txt, type = props.type;
    var _a = react_1.useState(false), shown = _a[0], setShown = _a[1];
    react_1.useEffect(function () {
        if (txt !== "") {
            setShown(true);
            close();
        }
    }, [txt]);
    var close = function () {
        setTimeout(function () {
            setShown(false);
        }, 3000);
    };
    var getClasses = function () {
        var classes = 'message';
        if (shown)
            classes += " show";
        if (type)
            classes += " " + type;
        return classes;
    };
    return (react_1.default.createElement("div", { className: getClasses() }, txt));
};
//# sourceMappingURL=Message.js.map