import React, { ComponentType, ReactElement } from 'react';

const useTabSwitch = (components: ComponentType[]): ((num: any) => ReactElement | null) => {
  return ({num}) => {
    console.log(num);
    // components가 배열이 아니면 배열로 변환
    const componentArray = Array.isArray(components) ? components : [components];
    if (num >= 0 && num < componentArray.length) {
      return React.createElement(componentArray[num]);
    }
    return null;
  };
};

export default useTabSwitch