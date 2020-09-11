"use strict";
/**
 * @jest-environment jsdom
 */
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchableDropdown = void 0;
var react_1 = __importStar(require("react"));
var index_1 = require("../index");
var index_2 = require("../index");
exports.SearchableDropdown = react_1.forwardRef(function (props, ref) {
    var data = props.data, isHalf = props.isHalf, placeholder = props.placeholder, defaultSelected = props.defaultSelected, labelExtractor = props.labelExtractor, error = props.error, onChange = props.onChange, keyExtractor = props.keyExtractor, activeColor = props.activeColor;
    var _a = react_1.useState([]), formedData = _a[0], setFormedData = _a[1];
    var _b = react_1.useState({ value: '', error: '' }), input = _b[0], setInputVal = _b[1];
    var _c = react_1.useState({ value: '', error: '' }), selected = _c[0], setSelected = _c[1];
    var _d = react_1.useState(false), show = _d[0], setShow = _d[1];
    var dropdownRef = react_1.useRef(null);
    react_1.useEffect(function () {
        setData();
    }, [data]);
    react_1.useEffect(function () {
        if (error) {
            if (formedData && formedData.length > 0) {
                setInputVal(__assign(__assign({}, input), { error: 'Válassz egyet a listából!' }));
            }
            else {
                setInputVal(__assign(__assign({}, input), { error: 'A mező kitöltése kötelező!' }));
            }
        }
        else {
            setInputVal(__assign(__assign({}, input), { error: '' }));
        }
    }, [error]);
    react_1.useEffect(function () {
        if (show) {
            document.addEventListener('mousedown', handleClickOutside);
        }
    }, [show]);
    react_1.useEffect(function () {
        if (index_1.isExist(defaultSelected)) {
            setDefault();
        }
        else {
            setInputVal({ value: '', error: '' });
            setSelected({ value: '', error: '' });
        }
    }, [defaultSelected]);
    var handleClickOutside = function (ev) {
        if (dropdownRef.current && !dropdownRef.current.contains(ev.target)) {
            onBlur(false);
        }
    };
    var setDefault = function () {
        if (formedData) {
            if (defaultSelected && index_1.isExist(defaultSelected.id) && typeof defaultSelected.id === 'string') {
                var item = formedData.find(function (i) { return i.key == defaultSelected.id; });
                setSelected({ value: defaultSelected.id, error: '' });
                setInputVal({ value: item.label, error: '' });
            }
            return;
        }
        if (defaultSelected && index_1.isExist(defaultSelected.name) && typeof defaultSelected.name === 'string') {
            setInputVal({ value: defaultSelected.name, error: '' });
        }
    };
    var setData = function () {
        if (data && data.length > 0) {
            var tempData_1 = [];
            data.map(function (item) {
                var label = labelExtractor(item);
                var key = keyExtractor(item);
                tempData_1.push({ label: label, key: key });
            });
            setFormedData(tempData_1);
        }
    };
    var onSelect = function (item) {
        onChange(item.key);
        setInputVal({ value: item.label, error: '' });
        setSelected({ value: item.key, error: '' });
    };
    /**
     * @param {string} value
     * Ha van formedData az azt jelenti, hogy ez egy tényleges searchable dropdown, amennyiben nincs így egy sima inputként kell működnie
     * ezért ha nincs formedData akkor visszaadjuk az inputba írt értéket
     */
    var onInputChange = function (value) {
        setInputVal(__assign(__assign({}, input), { value: value }));
        setSelected({ value: '', error: '' });
        if (formedData && formedData.length > 0 && selected.value === '' && value.length >= 3) {
            formedData.map(function (item) {
                var label = index_1.removeAccents(item.label.toLowerCase());
                var val = index_1.removeAccents(value.toLowerCase());
                if (label === val) {
                    onChange(item.key);
                    onSelect(item);
                }
            });
            return;
        }
        else {
            onChange('');
        }
        if (!formedData || formedData.length < 1) {
            onChange(value);
        }
    };
    var onBlur = function (itemClicked, item) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (itemClicked && item) {
                onSelect(item);
            }
            document.removeEventListener('mousedown', handleClickOutside);
            setShow(false);
            return [2 /*return*/];
        });
    }); };
    var filterList = function () { return (formedData.filter(function (item) {
        var label = index_1.removeAccents(item.label.toLowerCase());
        var value = index_1.removeAccents(input.value.toLowerCase());
        if (label.startsWith(value)) {
            return item;
        }
    })); };
    var getList = function () {
        if (show && formedData && formedData.length > 0) {
            var filteredList = filterList();
            if (filteredList.length < 1 && selected.error === '') {
                setSelected({ value: '', error: 'Nincs település a keresett szóra!' });
            }
            return (react_1.default.createElement("div", { style: activeColor ? { border: "1px solid " + activeColor, borderTop: '0px' } : undefined, className: input.error !== '' ? 'dropdown-list has-error' : 'dropdown-list' },
                filteredList.map(function (item) { return (react_1.default.createElement("div", { onClick: function () { return onBlur(true, item); }, className: selected.value === item.key ? "dropdown-item selected" : "dropdown-item", key: item.key }, item.label)); }),
                selected.error !== '' ? react_1.default.createElement("div", { className: "list-error" }, selected.error) : null));
        }
    };
    var getStlye = function () {
        var value = '';
        if (show && formedData.length > 0) {
            value += 'border-bottom-off ';
        }
        return value;
    };
    return (react_1.default.createElement("div", { ref: dropdownRef, className: isHalf ? "dropdown dropdown--searchable half" : "dropdown dropdown--searchable full" },
        react_1.default.createElement(index_2.Input, { placeholder: placeholder, value: input.value, onFocus: function () { return setShow(true); }, className: getStlye(), onChange: function (value) { return onInputChange(value); }, error: input.error, activeColor: activeColor }),
        getList()));
});
//# sourceMappingURL=SearchableDropdown.js.map