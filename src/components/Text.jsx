import React from "react";

const sizeClasses = {
  txtRobotoRomanBold12: "font-bold font-roboto",
  txtRobotoBold14Gray600: "font-bold font-roboto",
  txtRobotoBold14Lightgreen500: "font-bold font-roboto",
  txtRobotoRomanRegular14Gray600: "font-normal font-roboto",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoBold14PurpleA100: "font-bold font-roboto",
  txtRobotoRomanSemiBold14: "font-roboto font-semibold",
  txtRobotoRegular14Gray600: "font-normal font-roboto",
  txtRobotoRomanMedium18: "font-medium font-roboto",
  txtRobotoMedium12: "font-medium font-roboto",
  txtRobotoBold14: "font-bold font-roboto",
  txtRobotoRomanSemiBold22: "font-roboto font-semibold",
  txtRobotoRomanRegular14: "font-normal font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
