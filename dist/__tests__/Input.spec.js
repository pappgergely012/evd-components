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
test("Input test", function () {
    var component = react_test_renderer_1.default.create(react_1.default.createElement(index_1.Input, { placeholder: "Name", value: "George", onChange: function (val) { return console.log(val); } }));
    var instance = component.root;
    expect(instance.findByType(index_1.Input).props.placeholder).toBe("Name");
    expect(instance.findByType(index_1.Input).props.value).toBe("George");
    react_test_renderer_1.act(function () {
        var inst = component.toJSON();
        var input = inst.children[0].children[1];
        input.props.onChange({ target: { value: 'value come from input' } });
    });
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Input.spec.js.map