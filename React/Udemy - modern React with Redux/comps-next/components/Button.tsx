// import propTypes from "prop-types";
import classnames from "classnames";

export interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
  outline?: boolean;
  round?: boolean;
  children?: React.ReactNode;
  onClick?: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  round,
  ...rest
}) => {
  console.log(children);
  const finalClassName = classnames("flex items-center px-3 py-1.5 border", {
    "border-blue-600 bg-blue-500 text-white": primary,
    "border-gray-600 bg-gray-500 text-white": secondary,
    "border-green-600 bg-green-800 text-white": success,
    "border-red-600 bg-red-800 text-white": danger,
    "border-yellow-600 bg-yellow-800 text-white": warning,
    "bg-transparent text-black border-2": outline,
    "rounded-full": round,
  });

  return (
    <button {...rest} className={finalClassName}>
      {children}
    </button>
  );
};

// Button.propTypes = {
//   buttonThemeValidation: ({
//     primary,
//     secondary,
//     success,
//     danger,
//     warning,
//   }: ButtonProps) => {
//     const count: Number =
//       Number(!!primary) +
//       Number(!!secondary) +
//       Number(!!success) +
//       Number(!!danger) +
//       Number(!!warning);

//     if (count > 1) {
//       throw new Error("Button allowing only one theme proprities");
//     }
//   },
// };

export default Button;
