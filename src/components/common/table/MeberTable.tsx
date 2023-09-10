import { Table } from ".";
import { S } from "./style";
import { useNavigation } from "@/hooks/useNavigation";
import Image from "next/image";
import EmptyList from "../empty/EmptyList";

const MemberTable = ({ data, category, widthRatio }: any) => {
  const { navigatePage } = useNavigation();
  const renderFieldContent = (field: any, item: any, index: number) => {
    switch (field[1]) {
      case "nickname":
        return (
          <S.UserInfoContainer key={index}>
            <S.UserInfoWrapper>
              <Image
                style={{ borderRadius: "10px", marginRight: "10px" }}
                width={60}
                height={60}
                src={item.profileImg}
                alt="profile img"
              />
              <span>{item[field[1]]}</span>
            </S.UserInfoWrapper>
          </S.UserInfoContainer>
        );
      default:
        return <div key={index}>{item[field[1]]}</div>;
    }
  };

  if (data.length === 0) return <EmptyList />;
  return (
    <Table data={data}>
      <Table.Header widthRatio={widthRatio} category={category} />
      <Table.ContentContainer>
        {(item, index) => (
          <Table.ContentRow
            key={index}
            onClickMethod={() => navigatePage({ type: "member", id: item.id })}
            widthRatio={widthRatio}
            item={item}
            idx={index}
            category={category}>
            {(field, index) => renderFieldContent(field, item, index)}
          </Table.ContentRow>
        )}
      </Table.ContentContainer>
      <Table.Pagination />
    </Table>
  );
};

export default MemberTable;
