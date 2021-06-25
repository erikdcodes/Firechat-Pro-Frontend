import { useEffect, useState } from "react";
import styled from "styled-components";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import ConversationItem from "../ConversationListPanel/ConversationItem";
import { getActiveContactsByUser } from "../../Data/Axios.js";

const ConversationsList = () => {
  const [activeLink, setActiveLink] = useState("ACTIVE");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const newdata = await getActiveContactsByUser("1234");
      setData(newdata);
      setIsLoading(false);
    };
    getData();
  }, [setData]);

  if (isLoading)
    return (
      <Wrapper>
        <div className="loading">
          <p>Retrieving contacts...</p>
        </div>
      </Wrapper>
    );

  return (
    <Wrapper>
      <div className="header">
        <button
          onClick={() => setActiveLink("ACTIVE")}
          className={activeLink === "ACTIVE" ? "link selected" : "link"}
        >
          Active
        </button>
        <button
          onClick={() => setActiveLink("ALL")}
          className={activeLink === "ALL" ? "link selected" : "link"}
        >
          All
        </button>
      </div>
      <div className="list-wrapper">
        {data?.map((item, i) => (
          <ConversationItem contact={item} key={i + item._id} />
        ))}
        <div className="add-contact-button-container">
          <button>Add Contact</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  .header {
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${styleVariables.bgColor1};

    .selected {
      color: ${styleVariables.accentColorBlue};
      background: transparent;
    }
  }

  .list-wrapper {
    height: 100%;
    padding-bottom: 200px;
    overflow-y: scroll;
  }

  .loading {
    padding: 20px;
  }

  .add-contact-button-container {
    position: fixed;
    bottom: 20px;
    left: 75px;

    button {
      padding: 15px 20px;
      color: ${styleVariables.bgColor1};
      background-color: ${styleVariables.accentColorGreen};
    }
  }
`;

export default ConversationsList;
