import { Table } from ".";
import EmptyList from "../empty/EmptyList";
import RemoveProblemButton from "../button/RemoveProbleButton";

const ScrollTable = ({ data, category, widthRatio }: any) => {
  const renderFieldContent = (field: any, item: any, index: number) => {
    switch (field[1]) {
      case "remove":
        return <RemoveProblemButton idx={index + 1} />;
      default:
        return <div>{item[field[1]]}</div>;
    }
  };
  if (data.length === 0) return <EmptyList />;
  return (
    <Table data={data}>
      <Table.Header widthRatio={widthRatio} category={category} />
      <Table.ContentContainer height="350px" overflowY="scroll" contentLimit={30}>
        {(item, index) => (
          <Table.ContentRow widthRatio={widthRatio} item={item} idx={index} category={category}>
            {(field) => renderFieldContent(field, item, index)}
          </Table.ContentRow>
        )}
      </Table.ContentContainer>
    </Table>
  );
};

export default ScrollTable;
