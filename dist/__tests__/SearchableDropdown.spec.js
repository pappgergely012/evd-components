"use strict";
/**
 * @jest-environment jsdom
 */
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
var cities = [
    { city: 'New York', id: '1' },
    { city: 'Boston', id: '2' }
];
var component = react_test_renderer_1.default.create(react_1.default.createElement(index_1.SearchableDropdown, { data: cities, placeholder: "Cities", labelExtractor: function (item) { return item.city; }, keyExtractor: function (item) { return item.id; }, onChange: function (selected) { return console.log('value come from searchabledropdown change is ' + selected); }, activeColor: "#333" }));
test("Dropdown open test", function () {
    var instance = component.root;
    expect(instance.props.placeholder).toBe("Cities");
    expect(instance.props.data).toBeInstanceOf(Array);
    react_test_renderer_1.act(function () {
        var inst = component.toJSON();
        var input = inst.children[0].children[0].children[1];
        input.props.onFocus();
    });
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
test("Dropdown item clicked test", function () {
    var instance = component.root;
    expect(instance.props.placeholder).toBe("Cities");
    expect(instance.props.data).toBeInstanceOf(Array);
    react_test_renderer_1.act(function () {
        var inst = component.toJSON();
        var input = inst.children[0].children[0].children[1];
        var listItem = inst.children[1].children[0];
        input.props.onFocus();
        listItem.props.onClick();
    });
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=SearchableDropdown.spec.js.map