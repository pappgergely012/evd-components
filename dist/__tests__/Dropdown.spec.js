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
var data = [{ name: 'Kis Pizza', key: 1 }, { name: 'Nagy Pizza', key: 2 }];
var component = react_test_renderer_1.default.create(react_1.default.createElement(index_1.Dropdown, { placeholder: "Pizz\u00E1k", data: data, onItemClicked: function (item) { return console.log(item); }, keyExtractor: function (item) { return item.key; }, labelExtractor: function (item) { return item.name; } }));
test("Dropdown list", function () {
    var instance = component.root;
    var inst = component.toJSON();
    expect(instance.props.placeholder).toBe("Pizzák");
    expect(instance.props.data).toBeInstanceOf(Array);
    react_test_renderer_1.act(function () {
        inst.children[0].props.onClick();
    });
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
test("Dropdown list selects the first element", function () {
    var instance = component.root;
    expect(instance.props.placeholder).toBe("Pizzák");
    expect(instance.props.data).toBeInstanceOf(Array);
    react_test_renderer_1.act(function () {
        //the list test opened the dropdown
        var openedInstance = component.toJSON();
        openedInstance.children[1].children[0].props.onClick(data[0]);
    });
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Dropdown.spec.js.map