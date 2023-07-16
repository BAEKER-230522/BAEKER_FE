import { useRouter } from "next/router";
import { S } from "../../style";
import { Button } from 'antd';

const MissionDetail = () => {
  const ALPHA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const PROBLEM_COUNT = 3;
  
  const ALPHA_ARR = Array.from({length:PROBLEM_COUNT}, (_, i) => ALPHA[i])
  const HEADER_ARR = ['랭킹', '아이디']
  
  // 백 data
  const TIME_SPAN_STATUS = [true, true, false]  // 기간 
  const PROBLEM_NAME = ['HASH', '피보나치 함수', '어린 왕자'] // 문제
  
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
  // 예상 data
  // { data : {
  //      PROBLEM_INFO : {['HASH', 1000], ['피보나치 함수', 1001], ['어린 왕자', 1002]},
  //      TIME_SPAN_STATUS : [true, true, false]
  //      USER_STATUS : [ 
  //      {
  //        rank: 1,
  //        nickname : 'chumjio1o',
  //        problem_status: [true, true, true]
  //      },
  //      {
  //        rank: 2,
  //        nickname : 'jeongdo',
  //        problem_status: [false, false, true]
  //      }
  //    ]
  //}}

  for(let i=0; i<PROBLEM_COUNT; i++){
    HEADER_ARR.push(ALPHA[i])
  }

  const PERIOD_HEADER = Array.from({length:TIME_SPAN_STATUS.length}, (_,i) => `${i+1}일차`)
  const router = useRouter()
  const studyId = router.query.studyId

  const movePage = () => {
    router.push({pathname:`/study/${studyId}`})
  }
  
  return (
    <S.Container>
      <S.MissionStatusContainer>
        <S.MissionProblemListContainer numColumn={PROBLEM_COUNT}>
          {PERIOD_HEADER.map((e) => <div>{e}</div>)}
          {TIME_SPAN_STATUS.map((e) => {
            return e ?
            <div>
              <S.Dot color={'#6495Ed'}/>
            </div> 
            :
            <div></div>
          })}
        </S.MissionProblemListContainer>
        <S.MissionProblemListContainer numColumn={PROBLEM_COUNT}>
          {ALPHA_ARR.map((e) => <div>{e}</div>)}
          {PROBLEM_NAME.map((e) => <div>{e}</div>)}
        </S.MissionProblemListContainer>
        <S.MemberSolvingStatusContainer>
          <S.MissionProblemListContainer numColumn={PROBLEM_COUNT+2}>
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
          <Button type="primary" style={{width:"100px", height:"40px"}} onClick={movePage}>목록</Button>
          <Button style={{width:"100px", height:"40px"}} type="primary">수정</Button>
          <Button style={{width:"100px", height:"40px"}} type="primary">삭제</Button>
          <Button style={{width:"100px", height:"40px"}} type="primary">규칙 상세보기</Button>
        </S.ButtonContainer>
      </S.MissionStatusContainer>
    </S.Container>
  )
}

export default MissionDetail;
