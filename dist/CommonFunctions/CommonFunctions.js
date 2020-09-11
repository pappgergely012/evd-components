"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAccents = exports.dataFormat = exports.isExist = void 0;
/** Insert a char | string into a string to a specified index */
String.prototype.insert = function (index, char) {
    if (index > 0) {
        return this.substring(0, index) + char + this.substring(index, this.length);
    }
    return char + this;
};
/** Checks if the current data is a valid data */
exports.isExist = function (data) {
    var returnValue = true;
    switch (data) {
        case null:
            returnValue = false;
            break;
        case undefined:
            returnValue = false;
            break;
        case '':
            returnValue = false;
            break;
        case ' ':
            returnValue = false;
            break;
        default:
            returnValue = true;
            break;
    }
    if (data === true) {
        returnValue = true;
    }
    if (typeof returnValue === 'object' && Object.values(data).length === 0) {
        returnValue = false;
    }
    return returnValue;
};
/** Fromatting string  */
exports.dataFormat = function (type, data, quantity) {
    if (quantity === void 0) { quantity = 1; }
    var formattedData = null;
    switch (type) {
        case 'uppercaseFirst':
            formattedData = data.charAt(0).toUpperCase() + data.slice(1);
            break;
        case 'name':
            formattedData = data.replace(/\b(\w)/g, function (s) { return s.toUpperCase(); });
            break;
        case 'priceFormat':
            /**
             * Makes a hungarian price format from number
             *
             * @param  {Number} data
             * @return {String}
             */
            if (isNaN(parseInt(data))) {
                return 0;
            }
            var sumData = quantity * parseInt(data);
            var dataArr = sumData.toString().split('');
            if (dataArr.length < 4) {
                formattedData = data + " Ft";
            }
            else {
                dataArr.reverse();
                var newArr = dataArr.map(function (item, index) {
                    if ((index + 1) % 3 === 0) {
                        return " " + item.toString();
                    }
                    return item;
                });
                formattedData = newArr.reverse().join('') + " Ft";
            }
            break;
        default: return null;
    }
    return formattedData;
};
exports.removeAccents = function (data) {
    if (typeof data !== 'string') {
        throw new Error(data + " is not a string");
    }
    return data.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
};
//# sourceMappingURL=CommonFunctions.js.map