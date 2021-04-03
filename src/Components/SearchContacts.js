import styled from "styled-components";

const Search = () => {
  return (
    <Wrapper>
      <input type="text" placeholder="search by name or phone" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 30px;
`;

export default Search;
