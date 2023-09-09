import { S } from "./style";

interface IContentProps {
  crntPage?: number;
  data?: any;
  children: (item: any, index: number) => React.ReactNode;
}

const ContentContainer = ({ crntPage, data, children }: IContentProps) => {
  console.log(data, crntPage, children);

  const CURRENT_DATA = data.slice(crntPage! * 4, crntPage! * 4 + 4);
  return (
    <S.ContentContainer>{CURRENT_DATA.map((elem: any, index: number) => children(elem, index))}</S.ContentContainer>
  );
};

export default ContentContainer;
