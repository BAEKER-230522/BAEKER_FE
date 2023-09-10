import { Table } from ".";
import InviteAcceptButton from "../button/InviteAcceptButton";
import { useNavigation } from "@/hooks/useNavigation";
import EmptyList from "../empty/EmptyList";

const InviteTable = ({ data, category, widthRatio, memberId }: any) => {
  const { navigatePage } = useNavigation();

  const renderFieldContent = (field: any, item: any, index: number) => {
    switch (field[1]) {
      case "user_invite":
        return <InviteAcceptButton key={index} memberId={memberId} studyId={item.id} />;
      case "capacity":
        return (
          <div>
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
            onClickMethod={() => navigatePage({ type: "study", id: item.id })}
            widthRatio={widthRatio}
            item={item}
            idx={index}
            key={index}
            category={category}>
            {(field) => renderFieldContent(field, item, index)}
          </Table.ContentRow>
        )}
      </Table.ContentContainer>
      <Table.Pagination />
    </Table>
  );
};

export default InviteTable;
