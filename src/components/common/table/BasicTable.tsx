import { Table } from "./ui";
import { useNavigation } from "@/hooks/useNavigation";
import EmptyList from "../empty/EmptyList";
import { S } from "./ui/style";

const BasicTable = ({ data, category, widthRatio, url, routeType }: any) => {
  const { navigatePage } = useNavigation();

  const renderFieldContent = (field: any, item: any, index: number) => {
    switch (field[1]) {
      case "capacity":
        return (
          <div>
            <S.ColorBox key={index} color="blue">
              {item.studyMember} / {item.capacity}
            </S.ColorBox>
          </div>
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
            onClickMethod={() => navigatePage({ url, routeType, id: item.id })}
            widthRatio={widthRatio}
            item={item}
            idx={index}
            category={category}>
            {(field, idx) => renderFieldContent(field, item, idx)}
          </Table.ContentRow>
        )}
      </Table.ContentContainer>
      <Table.Pagination />
    </Table>
  );
};

export default BasicTable;
