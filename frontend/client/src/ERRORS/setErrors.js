export const setErrors = (first_name, last_name, phone, from, to) => {
  let errors = {};
  errors.first_name = first_name ? '' : 'first_name is required';
  errors.last_name = last_name ? '' : 'last_name is required';
  errors.phone = phone ? '' : 'phone is required';
  errors.from = from ? '' : 'from is required';
  errors.to = to ? '' : 'to is required';

  return errors;
};
