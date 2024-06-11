import React from "react";
import { Switch, VisuallyHidden, useSwitch } from "@nextui-org/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeSwitch = (props) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  return (
    <div className="flex flex-col gap-2 ">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div {...getWrapperProps()} className="cursor-pointer">
          <p>
            {isSelected ? (
              <p className="bg-gray-200 flex justify-center items-center w-8 h-8 rounded-full">
                <MdLightMode color="" />
              </p>
            ) : (
              <p className="bg-black flex justify-center items-center w-8 h-8 rounded-full color-white">
              <MdDarkMode color="white"/>
              </p>
            )}
          </p>
        </div>
      </Component>
    </div>
  );
};

export default ThemeSwitch;
