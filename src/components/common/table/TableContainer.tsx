import { S } from "./style";
import { TableProvider } from "./context/TableContext";

interface ITableProps {
  crntPage?: number;
  data?: any;
  children: React.ReactNode;
}

const TableContainer = ({ children, data }: ITableProps) => {
  return (
    <S.Container>
      <TableProvider data={data}>{children}</TableProvider>
    </S.Container>
  );
};

export default TableContainer;
