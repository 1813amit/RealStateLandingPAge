import React from "react";

const sizes = {
  "3xl": "text-[41px] font-semibold md:text-[37px] sm:text-[31px]",
  "2xl": "text-3xl font-semibold md:text-[28px] sm:text-[26px]",
  "5xl": "text-[44px] font-bold md:text-[40px] sm:text-[34px]",
  xl: "text-2xl font-bold md:text-[22px]",
  "4xl": "text-[42px] font-semibold md:text-[38px] sm:text-[32px]",
  s: "text-base font-semibold",
  md: "text-lg font-semibold",
  xs: "text-xs font-bold",
  lg: "text-[22px] font-semibold",
};

const Heading = ({ children, className = "", size = "lg", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
