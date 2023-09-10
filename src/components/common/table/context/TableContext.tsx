import React, { createContext, useState, useContext } from "react";

interface ITableContext {
  crntPage: number;
  setCrntPage: React.Dispatch<React.SetStateAction<number>>;
  data: any;
}

const TableContext = createContext<ITableContext | undefined>(undefined);

export const useTable = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTable must be used within a TableProvider");
  }
  return context;
};

export const TableProvider = ({ children, data }: any) => {
  const [crntPage, setCrntPage] = useState(0);

  return <TableContext.Provider value={{ crntPage, setCrntPage, data }}>{children}</TableContext.Provider>;
};
