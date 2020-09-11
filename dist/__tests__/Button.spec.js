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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("../index");
var react_test_renderer_1 = __importStar(require("react-test-renderer"));
var component = react_test_renderer_1.default.create(react_1.default.createElement(index_1.Button, { title: "Order", className: "primary", onClick: function () { return console.log('Button clicked!'); }, type: "square", position: "center", style: { backgroundColor: "#fff", color: "#333", border: "1px solid #fff" } }));
test("Button", function () {
    var instance = component.root;
    var inst = component.toJSON();
    expect(instance.props.className).toBe("primary");
    expect(instance.props.title).toBe("Order");
    expect(instance.props.type).toBe("square");
    expect(instance.props.position).toBe("center");
    react_test_renderer_1.act(function () {
        inst.props.onClick();
    });
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Button.spec.js.map