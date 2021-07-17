import styled from "styled-components";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
// import data from "../../FakeData/FakeContacts.js";
// import ActionItem from "../ActionsListPanel/ActionItem";

// const getContactsWithActions = (data) => {
//   const newData = data.filter((item) => item.nextAction);
//   return newData;
// };

const ActionsList = () => {
  // useEffect(() => {
  //   const getData = async () => {
  //     const newData = getContactsWithActions(data);
  //   };
  //   getData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <Wrapper>
      <div className="header">
        <h4>Upcoming Actions</h4>
      </div>
      <div className="list-wrapper">
        {/* {newData.map((item, i) => (
          <ActionItem contact={item} key={i + item.id} />
        ))} */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  .header {
    padding: 10px 30px;
    /* display: flex; */
    /* justify-content: space-between; */
    border-bottom: 2px solid ${styleVariables.bgColor1};
  }
`;

export default ActionsList;
