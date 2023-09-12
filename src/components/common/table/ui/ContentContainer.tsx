import { useTable } from "../context/TableContext";
import { S } from "./style";
import { PAGE_LIMIT } from "@/constant";

interface IContentProps {
  crntPage?: number;
  data?: any;
  children: (item: any, index: number) => React.ReactNode;
  height?: string;
  overflowY?: "scroll" | "hidden";
  contentLimit?: number | 4;
}

const ContentContainer = ({ contentLimit = PAGE_LIMIT, height, overflowY, children }: IContentProps) => {
  const { data, crntPage } = useTable();
  const CURRENT_DATA = data.slice(crntPage! * contentLimit, crntPage! * contentLimit + contentLimit);
  return (
    <S.ContentContainer style={{ height, overflowY }}>
      {CURRENT_DATA.map((elem: any, index: number) => children(elem, index))}
    </S.ContentContainer>
  );
};

export default ContentContainer;
