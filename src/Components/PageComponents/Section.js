import React from "react";
import styled from "styled-components";
import { styleVariables } from "../../GlobalStyles/StyleVariables.js";
const Section = () => {
  return <Wrapper>Section</Wrapper>;
};

export default Section;

const Wrapper = styled.section`
  outline: 1px solid red;
  padding: 30px;
  background: ${styleVariables.bgColor1};
  display: flex;
`;
