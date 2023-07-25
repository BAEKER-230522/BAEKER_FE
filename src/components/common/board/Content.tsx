import { S } from "./style";
import { useRouter } from "next/router";
import InviteAcceptButton from "./InviteAcceptButton";
import { USER_NUMBER } from "@/util/constant";
import RemoveProblemButton from "./RemoveProbleButton";
import { useDispatch } from "react-redux";
import { propMissionData } from "@/store/modules/mission";
import { FaDatabase } from "react-icons/fa";
// get api로 데이터 받기.

interface IContentProps{
  target_nth?: number;
  ratio?: number;
  crntPage?: number; 
  data: any;
  type:string;
  category: string[];
}

const RequestStatus = ({status}:{status:string}) => {  
  return status === "ok" ? <div>가입 완료</div> : <div>대기</div>
}

const Content = ({ target_nth, ratio, crntPage, data, type, category }: IContentProps) => {
  const dispatch = useDispatch();

  const test = data.slice(crntPage! * 5, crntPage! * 5 + 5);
  const router = useRouter()
  
  const navigateToPage = (data:any) => {
    console.log(data);    
    const basePath = router.asPath;
    if(type === 'mission'){
      dispatch(propMissionData(data))
      router.push(`${basePath}/${type}/${data.id}`)
    }else{
      router.push({pathname:`/${type}/${data.id}`})
    }
  }
  

  return (
    <S.ContentContainer >
      {test.map((e:any, idx:number) => (
        <S.ContentWrapper key={idx} target_nth={target_nth!} ratio={ratio!} onClick={() => navigateToPage(e)}>
          {category.map((elem, inner_idx) => 
            (
              elem[1] === "request" ? <RequestStatus status={"pending"} key={inner_idx}/> 
              :
              elem[1] === "invite" ? <InviteAcceptButton memberId={USER_NUMBER} studyId={e.id} key={inner_idx}/> 
              :
              elem[1] === "remove" ? <RemoveProblemButton key={inner_idx} idx={idx+1}/>
              : 
              <div key={inner_idx}>{e[elem[1]]}</div>)
          )}
        </S.ContentWrapper>
      ))}
    </S.ContentContainer>
  );
};

export default Content;
