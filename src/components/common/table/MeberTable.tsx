import { Table } from "./ui";
import { S } from "./ui/style";
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
              <S.Cell>{item[field[1]]}</S.Cell>
            </S.UserInfoWrapper>
          </S.UserInfoContainer>
        );
      default:
        return <S.Cell key={index}>{item[field[1]]}</S.Cell>;
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
            onClickMethod={() => navigatePage({ url: "member", routeType: "defaultRoute", id: item.id })}
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
