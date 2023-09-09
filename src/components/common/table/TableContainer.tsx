import { S } from "./style";
import React, { useState } from "react";

interface ITableProps {
  crntPage?: number;
  data?: any;
  children: React.ReactNode;
}

const TableContainer = ({ children, data }: ITableProps) => {
  const [crntPage, setCrntPage] = useState(0);

  return (
    <S.Container>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as any, { crntPage, setCrntPage, data });
        }
        return child;
      })}
    </S.Container>
  );
};

export default TableContainer;
