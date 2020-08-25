"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var React = __importStar(require("react"));
require("../styles/Input.scss");
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        _this.getStyle = function () {
            var style = 'input-container';
            if (_this.state.focused)
                style += ' focused';
            if (_this.props.className)
                style += " \u00A0" + _this.props.className;
            if (_this.props.value.length > 0)
                style += ' not-empty';
            return style;
        };
        _this.onblur = function () {
            _this.setState(function (prevState) { return (__assign(__assign({}, prevState), { focused: false })); });
            _this.props.onBlur && _this.props.onBlur();
        };
        _this.onfocus = function () {
            _this.setState(function (prevState) { return (__assign(__assign({}, prevState), { focused: true })); });
        };
        _this.state = {
            focused: false
        };
        if (_this.props.activeColor && ((_a = _this.props.activeColor) === null || _a === void 0 ? void 0 : _a.match('/^#(?:[0-9a-f]{3}){1,2}$/i'))) {
            throw new Error('EInput activeColor must be a hex code (ie: #333 || #333333)');
        }
        return _this;
    }
    Input.prototype.render = function () {
        var _this = this;
        var _a = this.props, placeholder = _a.placeholder, value = _a.value, isHalf = _a.isHalf, onChange = _a.onChange, type = _a.type, activeColor = _a.activeColor;
        var focused = this.state.focused;
        return (React.createElement("div", { className: isHalf ? 'half-input-outer' : 'full-input-outer' },
            React.createElement("div", { className: this.getStyle() },
                React.createElement("label", { className: "input-placeholder", style: activeColor && focused ? { color: activeColor } : undefined }, placeholder),
                React.createElement("input", { className: "input", value: value, style: activeColor && focused ? { boxShadow: "10px 20px 30px rgba(" + activeColor + ", .4)", borderColor: activeColor } : undefined, onChange: function (ev) { return onChange(ev.target.value); }, onBlur: function () { return _this.onblur(); }, onFocus: function () { return _this.onfocus(); }, type: type }))));
    };
    return Input;
}(React.Component));
exports.default = Input;
//# sourceMappingURL=Input.js.map