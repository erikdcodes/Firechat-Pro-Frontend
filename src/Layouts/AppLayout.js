import styled from "styled-components";
import NavigationBar from "../Components/NavigationBar";
import { Link } from "react-router-dom";

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
