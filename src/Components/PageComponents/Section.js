import React from "react";
import styled from "styled-components";
import { styleVariables } from "../../GlobalStyles/StyleVariables.js";

const Section = ({ title, description, img, orientation }) => {
  return (
    <>
      {orientation !== "standard" ? (
        <Wrapper>
          <div className="container flex">
            <div className="left">
              <h2 className="title">{title}</h2>
              <p className="description">{description}</p>
            </div>
            <div className="right">
              <img
                className="hero-img"
                src={img}
                alt="animated example of sms"
              />
            </div>
          </div>
        </Wrapper>
      ) : (
        <Wrapper className="flipped">
          <div className="container flex reverse">
            <div className="right">
              <img
                className="hero-img"
                src={img}
                alt="animated example of sms"
              />
            </div>
            <div className="left  ">
              <h2 className="title">{title}</h2>
              <p className="description">{description}</p>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Section;

const Wrapper = styled.section`
  padding-block: 100px;
  background: ${styleVariables.bgColor1};

  .container {
    margin-inline: auto;
    width: min(90%, 1140px);
  }

  .flex {
    display: flex;
    gap: 45px;
    text-align: center;
    flex-direction: column;
  }
  .flex.reverse {
    flex-direction: column-reverse;
  }

  &.flipped {
    background: ${styleVariables.accentColorBlue};
    color: #fff;
    .title,
    .description {
      color: #fff;
    }
  }

  .left {
    flex: 1 0 25%;
  }
  .right {
    flex: 1 0 75%;
  }

  .hero-img {
    width: 100%;
    box-shadow: 0px 1px 25px rgba(121, 120, 120, 0.603);
  }
  .title {
    color: ${styleVariables.primaryTextColor};
    font-size: ${styleVariables.heading1Size};
  }

  .description {
    font-size: ${styleVariables.textSize};
    color: ${styleVariables.secondaryTextColor};
  }

  @media (min-width: 1140px) {
    .flex,
    .flex.reverse {
      text-align: left;

      flex-direction: row;
    }
  }
`;
