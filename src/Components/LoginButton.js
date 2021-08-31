import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </Wrapper>
  );
};

export default LoginButton;

const Wrapper = styled.div`
  /* button {
    padding: 15px 20px;
  } */
`;
