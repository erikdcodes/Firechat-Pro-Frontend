import styled from "styled-components";
import NavigationBar from "../Components/NavigationBar";

const DefaultAppLayout = ({ children }) => {
  return (
    <Wrapper>
      <NavigationBar />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default DefaultAppLayout;
