import { Table } from ".";
import { useNavigation } from "@/hooks/useNavigation";
import EmptyList from "../empty/EmptyList";

const BasicTable = ({ data, category, widthRatio }: any) => {
  const { navigatePage } = useNavigation();

  const renderFieldContent = (field: any, item: any) => {
    switch (field[1]) {
      case "nickname":
        return (
          <div>
            ( {item.studyMember}/{item.capacity} )
          </div>
        );

      default:
        return <div>{item[field[1]]}</div>;
    }
  };

  if (data.length === 0) return <EmptyList />;

  return (
    <Table data={data}>
      <Table.Header widthRatio={widthRatio} category={category} />
      <Table.ContentContainer>
        {(item, index) => (
          <Table.ContentRow
            onClickMethod={() => navigatePage({ type: "study", id: item.id })}
            widthRatio={widthRatio}
            item={item}
            idx={index}
            category={category}>
            {(field) => renderFieldContent(field, item)}
          </Table.ContentRow>
        )}
      </Table.ContentContainer>
      <Table.Pagination />
    </Table>
  );
};

export default BasicTable;
