import propTypes from 'prop-types';

const Button = ({
  children,
  success,
  primary,
  secondary,
  warning,
  danger,
  outline,
  rounded,
}) => {
  const buttonTheme = () => {};
  return (
    <button className='px-3 py-1.5 border border-blue-600 bg-color-500 text-white'>
      {children}
    </button>
  );
};

Button.propTypes = {
  outline: propTypes.bool,
  rounded: propTypes.bool,
  primary: propTypes.bool,
  success: propTypes.bool,
  secondary: propTypes.bool,
  warning: propTypes.bool,
  danger: propTypes.bool,
  checkButtonTheme: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!danger) +
      Number(!!warning);

    if (count > 1) {
      throw new Error('Allowed only one button theme');
    }
  },
};

export default Button;
