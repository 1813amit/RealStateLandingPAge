import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded",
};
const variants = {
  gradient: {
    green_500_green_600_01: "bg-gradient text-white-A700",
    green_500_green_600: "bg-gradient1 text-white-A700",
  },
  fill: {
    gray_50_01: "bg-gray-50_01 text-teal-300",
    black_900: "bg-black-900 text-white-A700",
    white_A700: "bg-white-A700 text-green-400",
    green_500: "bg-green-500 text-white-A700",
  },
};
const sizes = {
  sm: "h-[38px] px-[7px] text-base",
  xs: "h-[34px] pl-[15px] pr-5 text-xs",
  xl: "h-[52px] px-[35px] text-base",
  lg: "h-[48px] px-[35px] text-sm",
  md: "h-[48px] px-[35px] text-lg",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "green_500",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["sm", "xs", "xl", "lg", "md"]),
  variant: PropTypes.oneOf(["gradient", "fill"]),
  color: PropTypes.oneOf([
    "green_500_green_600_01",
    "green_500_green_600",
    "gray_50_01",
    "black_900",
    "white_A700",
    "green_500",
  ]),
};

export { Button };
