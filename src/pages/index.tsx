import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import * as userActions from "../store/modules/dropdown";

const Home = () => {
  // const dispatch = useDispatch();
  // const name = useSelector(({ user }: any) => user.name);

  // const changeNickname = useCallback(() => {
  //   dispatch(userActions.changeNickname("heeseong"));
  // }, [dispatch]);

  return (
    <React.Fragment>
      <h1>test</h1>
      {/* <span>{name}</span> */}
      {/* <button onClick={() => changeNickname()}>이름 변경</button> */}
    </React.Fragment>
  );
};

export default Home;
