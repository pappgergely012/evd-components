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
exports.Dropdown = void 0;
var react_1 = __importStar(require("react"));
require("../styles/Dropdown.scss");
exports.Dropdown = function (props) {
    var _a = react_1.useState(props.placeholder), title = _a[0], setTitle = _a[1];
    var _b = react_1.useState(''), selected = _b[0], setSelected = _b[1];
    var _c = react_1.useState([]), formedData = _c[0], setData = _c[1];
    var _d = react_1.useState(false), showList = _d[0], setShowList = _d[1];
    react_1.useEffect(function () {
        if (compare()) {
            setTitle(props.placeholder);
            setSelected('');
        }
        initData();
    }, [props.data]);
    react_1.useEffect(function () {
        if (props.defaultSelected) {
            setSelected(props.defaultSelected);
            setDefaultTitle();
        }
    }, [formedData]);
    var compare = function () {
        var newData = props.data.map(function (i) { return JSON.stringify(props.labelExtractor(i)); });
        var oldData = formedData.map(function (i) { return JSON.stringify(i.name); });
        return JSON.stringify(newData) !== JSON.stringify(oldData) ? true : false;
    };
    var setDefaultTitle = function () {
        formedData.map(function (item) {
            if (item.key === props.defaultSelected) {
                setTitle(item.name);
                props.onItemClicked(item);
            }
        });
    };
    var initData = function () {
        var tempData = [];
        props.data.map(function (item) {
            var label = props.labelExtractor(item);
            var key = props.keyExtractor(item);
            tempData.push({ name: label, key: key });
        });
        setData(tempData);
    };
    var renderList = function () {
        if (showList) {
            return (react_1.default.createElement("div", { className: "dropdown-list" }, formedData.map(function (item) { return (react_1.default.createElement("div", { className: selected === item.key ? 'dropdown-item selected' : 'dropdown-item', key: item.key, onClick: function () { return itemClicked(item); } }, item.name)); })));
        }
        return null;
    };
    var renderError = function () {
        if (props.errorMsg) {
            return react_1.default.createElement("span", { className: "dropdown-error" }, props.errorMsg);
        }
    };
    var itemClicked = function (item) {
        setSelected(item.key);
        setTitle(item.name);
        setShowList(false);
        props.onItemClicked(item);
    };
    return (react_1.default.createElement("div", { className: showList ? 'dropdown open' : 'dropdown' },
        react_1.default.createElement("div", { className: "dropdown-row", onClick: function () { return setShowList(!showList); } },
            react_1.default.createElement("span", { className: "dropdown-title" }, title),
            react_1.default.createElement("span", { className: "dropdown-arrow" })),
        renderList(),
        renderError()));
};
//# sourceMappingURL=Dropdown.js.map