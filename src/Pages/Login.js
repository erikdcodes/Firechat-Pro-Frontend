import styled from "styled-components";
import AppLayout from "../Layouts/AppLayout";
import LoginButton from "../Components/LoginButton";

const Login = () => {
  return (
    <AppLayout>
      <Wrapper>
        <LoginButton />
      </Wrapper>
    </AppLayout>
  );
};

const Wrapper = styled.div``;

export default Login;
