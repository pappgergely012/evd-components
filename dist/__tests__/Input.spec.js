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
var React = __importStar(require("react"));
var index_1 = __importDefault(require("../index"));
var react_test_renderer_1 = __importDefault(require("react-test-renderer"));
test("Component should return an EInput with placeholder=Asd, value=asd, onChange='function: void' ", function () {
    var component = react_test_renderer_1.default.create(React.createElement(index_1.default, { placeholder: "Asd", value: "asd", onChange: function (val) { return console.log(val); } }));
    var testInstance = component.root;
    expect(testInstance.findByType(index_1.default).props.placeholder).toBe("Asd");
    expect(testInstance.findByType(index_1.default).props.value).toBe("asd");
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Input.spec.js.map