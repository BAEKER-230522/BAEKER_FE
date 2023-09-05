import { S } from "./style";
import { memberApi } from "@/api/memberApi";

interface IMemberData {
  bronze: number;
  diamond: number;
  silver: number;
  gold: number;
  platinum: number;
  ruby: number;
}

const SolvedRecord = ({ data }: any) => {
  return (
    <S.RecordContainer>
      <S.RecordWrapper>
        <S.RecordElement>
          <span>BRONZE</span>
          <div style={{ display: "flex", alignContent: "center" }}>
            <S.BigFont>{data.data.bronze}</S.BigFont>
            <S.SmallFont>solved</S.SmallFont>
          </div>
        </S.RecordElement>
        <S.RecordElement>
          <span>DIAMOND</span>
          <div style={{ display: "flex", alignContent: "center" }}>
            <S.BigFont>{data.data.diamond}</S.BigFont>
            <S.SmallFont>solved</S.SmallFont>
          </div>
        </S.RecordElement>
      </S.RecordWrapper>
      <S.RecordWrapper>
        <S.RecordElement>
          <span>SILVER</span>
          <div style={{ display: "flex", alignContent: "center" }}>
            <S.BigFont>{data.data.silver}</S.BigFont>
            <S.SmallFont>solved</S.SmallFont>
          </div>
        </S.RecordElement>
        <S.RecordElement>
          <span>RUBY</span>
          <div style={{ display: "flex", alignContent: "center" }}>
            <S.BigFont>{data.data.ruby}</S.BigFont>
            <S.SmallFont>solved</S.SmallFont>
          </div>
        </S.RecordElement>
      </S.RecordWrapper>
      <S.RecordWrapper>
        <S.RecordElement>
          <span>GOLD</span>
          <div style={{ display: "flex", alignContent: "center" }}>
            <S.BigFont>{data.data.gold}</S.BigFont>
            <S.SmallFont>solved</S.SmallFont>
          </div>
        </S.RecordElement>
        <S.RecordElement>
          <span>PLATINUM</span>
          <div style={{ display: "flex", alignContent: "center" }}>
            <S.BigFont>{data.data.platinum}</S.BigFont>
            <S.SmallFont>solved</S.SmallFont>
          </div>
        </S.RecordElement>
      </S.RecordWrapper>
    </S.RecordContainer>
  );
};

export default SolvedRecord;
