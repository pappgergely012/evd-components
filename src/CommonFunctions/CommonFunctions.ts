interface IDataFormat {
  type: "uppercaseFirst" | "name" | "priceFormat";
  data: any;
  quantity: number;
}

/** Put the insert function to the String instance */
declare global {
  interface String {
    insert(index: number, char: string): string;
  }
}

/** Insert a char | string into a string to a specified index */
String.prototype.insert = function(index: number, char: string){
  if (index > 0) {
    return this.substring(0, index) + char + this.substring(index, this.length);
  }

  return char + this;
}

/** Checks if the current data is a valid data */
export const isExist = (data: any) => {
  let returnValue = true;

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
export const dataFormat = (type: IDataFormat['type'], data: IDataFormat['data'], quantity: IDataFormat['quantity'] = 1) => {
  let formattedData = null;

  switch (type) {
    case 'uppercaseFirst':
      formattedData = data.charAt(0).toUpperCase() + data.slice(1);

      break;
    case 'name':  
      formattedData = data.replace(/\b(\w)/g, (s: string) => s.toUpperCase());

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

      const sumData: number   = quantity * parseInt(data);
      const dataArr: string[] = sumData.toString().split('');

      if (dataArr.length < 4) {
        formattedData = `${data} Ft`;
      } else {
        dataArr.reverse();

        const newArr = dataArr.map((item, index) => {
          if ((index + 1) % 3 === 0) {
            return ` ${item.toString()}`;
          }

          return item;
        });

        formattedData = `${newArr.reverse().join('')} Ft`;
      }
      break;
    default: return null;
  }

  return formattedData;
};

export const removeAccents = (data: string) => {
  if (typeof data !== 'string') {
    throw new Error(`${data} is not a string`);
  }

  return data.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}
