import React, { ComponentType, ReactElement, FC } from "react";

const useTabSwitch = (
  components: ComponentType[]
): ((num: any) => ReactElement | null) => {
  const Component: FC<{ num: any }> = ({ num }) => {
    const componentArray = Array.isArray(components)
      ? components
      : [components];
    if (num >= 0 && num < componentArray.length) {
      return React.createElement(componentArray[num]);
    }
    return null;
  };

  Component.displayName = "TabSwitchComponent";
  return Component;
};

export default useTabSwitch;
