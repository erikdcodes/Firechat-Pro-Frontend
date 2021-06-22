import styled from "styled-components";
import AppLayout from "../Layouts/AppLayout";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { uiConfig, fbAuth } from "../Firebase/Firebase";

const Login = () => {
  return (
    <AppLayout>
      <Wrapper>
        <h1>Login</h1>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fbAuth} />
      </Wrapper>
    </AppLayout>
  );
};

const Wrapper = styled.div``;

export default Login;
