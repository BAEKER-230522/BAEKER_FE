import { S } from "../style";
import { Button } from 'antd';
const MissionDetail = () => {
  const ALPHA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const PROBLEM_COUNT = 3;
  const NUM_COLUMN = 3;
  const PROBLEM_NAME = ['HASH', '피보나치 함수', '어린 왕자']
  const ALPHA_ARR = Array.from({length:PROBLEM_COUNT}, (_, i) => ALPHA[i])
  const HEADER_ARR = ['랭킹', '아이디']
  for(let i=0; i<NUM_COLUMN; i++){
    HEADER_ARR.push(ALPHA[i])
  }

  const USER_STATUS = [
    {
      rank: 1,
      nickname : 'chumjio1o',
      problem_status: [true, true, true]
    },
    {
      rank: 2,
      nickname : 'jeongdo',
      problem_status: [false, false, true]
    }
  ]

  
  return (
    <S.Container>
      <S.MissionStatusContainer>
        <S.MissionProblemListContainer numColumn={NUM_COLUMN}>
          {ALPHA_ARR.map((e) => <div>{e}</div>)}
          {PROBLEM_NAME.map((e) => <div>{e}</div>)}
        </S.MissionProblemListContainer>
        <S.MemberSolvingStatusContainer>
          <S.MissionProblemListContainer numColumn={NUM_COLUMN+2}>
            {HEADER_ARR.map((e) => <div>{e}</div>)}
            {USER_STATUS.map((e,idx) => (
              <>
                <div>{idx+1}</div>
                <div>{e.nickname}</div>
                {
                  e.problem_status.map((p_status) => {
                    return p_status ? 
                    <div>
                      <S.Dot color={'#5bc59c'}/>
                    </div> 
                      :
                    <div>
                      <S.Dot color={'#e31d2e'}/>
                    </div>
                  })
                }
              </>
            ))}
          </S.MissionProblemListContainer>
        </S.MemberSolvingStatusContainer>
        <S.ButtonContainer>
          <Button type="primary" style={{width:"100px", height:"40px"}}>목록</Button>
          <Button style={{width:"100px", height:"40px"}} type="primary">수정</Button>
          <Button style={{width:"100px", height:"40px"}} type="primary">삭제</Button>
          <Button style={{width:"100px", height:"40px"}} type="primary">규칙 상세보기</Button>
        </S.ButtonContainer>
      </S.MissionStatusContainer>
    </S.Container>
  )
}

export default MissionDetail;
