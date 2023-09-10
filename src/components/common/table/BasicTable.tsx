import { Table } from ".";
import { useNavigation } from "@/hooks/useNavigation";
import EmptyList from "../empty/EmptyList";

const BasicTable = ({ data, category, widthRatio }: any) => {
  const { navigatePage } = useNavigation();

  const renderFieldContent = (field: any, item: any, index: number) => {
    switch (field[1]) {
      case "capacity":
        return (
          <div key={index}>
            ( {item.studyMember}/{item.capacity} )
          </div>
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
            onClickMethod={() => navigatePage({ type: "study", id: item.id })}
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
