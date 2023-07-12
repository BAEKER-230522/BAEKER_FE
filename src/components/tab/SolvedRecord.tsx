import { S } from "./styled";
import { memberApi } from "@/api/memberApi";

interface IMemberData{
  bronze: number;
  diamond: number;
  silver:number;
  gold: number;
  platinum: number;
  ruby: number;
}

const SolvedRecord = ({id,data}: any) => {
  console.log(data);
  
  return (
    <S.RecordContainer>
      <S.RecordWrapper>
        <S.RecordElement>
          <span>BRONZE</span>
          <div>
            <h1>{data.data.bronze}</h1>
            <h3>solved</h3>
          </div>
        </S.RecordElement>
        <S.RecordElement>
          <span>DIAMOND</span>
          <div>
            <h1>{data.data.diamond}</h1>
            <h3>solved</h3>
          </div>
        </S.RecordElement>
      </S.RecordWrapper>
      <S.RecordWrapper>
        <S.RecordElement>
          <span>SILVER</span>
          <div>
            <h1>{data.data.silver}</h1>
            <h3>solved</h3>
          </div>
        </S.RecordElement>
        <S.RecordElement>
          <span>RUBY</span>
          <div>
            <h1>{data.data.ruby}</h1>
            <h3>solved</h3>
          </div>
        </S.RecordElement>
      </S.RecordWrapper>
      <S.RecordWrapper>
        <S.RecordElement>
          <span>GOLD</span>
          <div>
            <h1>{data.data.gold}</h1>
            <h3>solved</h3>
          </div>
        </S.RecordElement>
        <S.RecordElement>
          <span>PLATINUM</span>
          <div>
            <h1>{data.data.platinum}</h1>
            <h3>solved</h3>
          </div>
        </S.RecordElement>
      </S.RecordWrapper>
    </S.RecordContainer>
  );
};

export default SolvedRecord;
