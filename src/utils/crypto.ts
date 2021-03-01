export const encrypt = (value: string): string => {
  console.log(value);
  let result = "";
  for (let i = 0; i < value.length; i++) {
    if (i < value.length - 1) {
      result += value.charCodeAt(i) + 10;
      result += "-";
    } else {
      result += value.charCodeAt(i) + 10;
    }
  }
  return result;
};
export const decrypt = (value: string): string => {
  var result = "";
  var array: any = value.split("-");

  for (let i = 0; i < array.length; i++) {
    result += String.fromCharCode(array[i] - 10);
  }
  return result;
};
