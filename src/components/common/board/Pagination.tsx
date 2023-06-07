import { S } from "./styled";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Pagination = () => {
  return (
    <S.PaginationContainer>
      <GrFormPrevious style={{ color: "white" }} />
      <span>1</span>
      <span>2</span>
      <GrFormNext />
    </S.PaginationContainer>
  );
};

export default Pagination;
