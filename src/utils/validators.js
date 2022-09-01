export const required = (value) => {
  if (value) {
    return undefined;
  } 
  else {
    return "Field is required";
  }
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) {
    return `Max length is ${maxLength} symbols`;
  } 
  else {
    return undefined;
  }
};
