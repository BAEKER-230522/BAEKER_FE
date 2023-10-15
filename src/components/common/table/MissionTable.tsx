import { Table } from "./ui";
import { useNavigation } from "@/hooks/useNavigation";
import EmptyList from "../empty/EmptyList";
import { S } from "./ui/style";

const MissionTable = ({ data, category, widthRatio, url, routeType }: any) => {
  const { navigatePage } = useNavigation();

  const renderFieldContent = (field: any, item: any, index: number) => {
    console.log(field);
    switch (field[1]) {
      case "capacity":
        return (
          <div>
            <S.ColorBox key={index} color="blue">
              {item.studyMember} / {item.capacity}
            </S.ColorBox>
          </div>
        );

      case "mission":
        switch (item[field[1]]) {
          case "DONE":
            return (
              <div>
                <S.ColorBox key={index} color="red">
                  Done
                </S.ColorBox>
              </div>
            );
          case "ACTIVE":
            return (
              <div>
                <S.ColorBox key={index} color="blue">
                  Ing
                </S.ColorBox>
              </div>
            );
          case "INACTIVE":
            return (
              <div>
                <S.ColorBox key={index} color="green">
                  Pre
                </S.ColorBox>
              </div>
            );
        }
      case "startDate":
        return (
          <S.Cell key={index} color="green">
            {item[field[1]].substring(5)}
          </S.Cell>
        );
      case "deadline":
        return (
          <S.Cell key={index} color="green">
            {item[field[1]].substring(5)}
          </S.Cell>
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

export default MissionTable;
