export const setPhoneNumber = text => {
  let result = `${text ?? ''}`;
  result = result?.replace(/^0+/, '');
  result = result?.replace(/^62+/, '');
  return result;
};
