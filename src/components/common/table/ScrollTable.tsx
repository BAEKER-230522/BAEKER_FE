import React from "react";
import EmptyList from "../empty/EmptyList";
import RemoveProblemButton from "../button/RemoveProbleButton";
import Image from "next/image";
import { Table } from "./ui";
import { LEVEL_IMG_URL } from "@/constant/level";
import { S } from "./ui/style";
import { IMissionProblem } from "@/pages/study/mission";

type CategoryItem = [string, string];

interface IProps {
  category: CategoryItem[];
  widthRatio: number[];
  data: IMissionProblem[];
  setMissionProblemState: React.Dispatch<React.SetStateAction<IMissionProblem[]>>;
}

const ScrollTable = ({ data, category, widthRatio, setMissionProblemState }: IProps) => {
  const renderFieldContent = (field: CategoryItem, item: IMissionProblem, index: number) => {
    switch (field[1]) {
      case "remove":
        return (
          <RemoveProblemButton
            key={index}
            idx={index + 1}
            setMissionProblemState={setMissionProblemState}
            data={data}
          />
        );
      case "xp":
        return (
          <div>
            <Image src={LEVEL_IMG_URL[item[field[1]] - 1]} alt="난이도" width={30} height={30} />
          </div>
        );
      default:
        return <S.Cell key={index}>{item[field[1] as keyof IMissionProblem]}</S.Cell>;
    }
  };
  if (data.length === 0) return <EmptyList />;
  return (
    <Table data={data}>
      <Table.Header widthRatio={widthRatio} category={category} />
      <Table.ContentContainer height="350px" overflowY="scroll" contentLimit={30}>
        {(item, index) => (
          <Table.ContentRow key={index} widthRatio={widthRatio} item={item} idx={index} category={category}>
            {(field: CategoryItem) => renderFieldContent(field, item, index)}
          </Table.ContentRow>
        )}
      </Table.ContentContainer>
    </Table>
  );
};

export default ScrollTable;
