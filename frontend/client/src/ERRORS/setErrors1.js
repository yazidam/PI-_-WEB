export const setErrors1 = (
  first_name,
  last_name,
  phone,
  cin,
  email,
  password
) => {
  let errors = {};
  errors.first_name = first_name ? '' : 'first_name is required';
  errors.last_name = last_name ? '' : 'last_name is required';
  errors.phone = phone ? '' : 'phone is required';
  errors.cin = cin ? '' : 'cin is required';
  errors.email = email ? '' : 'email is required';
  errors.password = password ? '' : 'password is required';

  return errors;
};
