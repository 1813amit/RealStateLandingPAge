import React from "react";

const sizes = {
  "5xl": "text-2xl font-medium md:text-[22px]",
  "6xl": "text-4xl font-normal md:text-[34px] sm:text-[32px]",
  xs: "text-[10px] font-normal",
  lg: "text-sm font-normal",
  "7xl": "text-5xl font-normal md:text-[44px] sm:text-[38px]",
  "8xl": "text-[78px] font-medium md:text-5xl",
  s: "text-xs font-normal",
  "2xl": "text-base font-normal",
  "3xl": "text-xl font-normal",
  "4xl": "text-[23px] font-medium md:text-[21px]",
  xl: "text-[15px] font-normal",
  md: "text-[13px] font-normal",
};

const Text = ({ children, className = "", as, size = "2xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
