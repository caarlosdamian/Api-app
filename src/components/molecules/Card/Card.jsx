import React from "react";
import styled from "styled-components";
import { List, ListItem } from "../../atoms/list";
import { CardTitle } from "../../atoms/typograpy";
import PropTypes from "prop-types";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { CardButton, CardButtonStar } from "../../atoms/button";
import { Anchor } from "../../atoms/links";
import { mobile } from "../../../responsive";

const Container = styled.div`
  padding: 20px;
  width: 100%;
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  ${mobile({ width: "70%", margin: "10px 0px" })}
`;
const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Card = ({ data }) => {
  return (
    <Container>
      <NameContainer>
        <CardTitle>{data.name}</CardTitle>
      </NameContainer>
      <CardButtonStar>
        <StarBorderIcon style={{ color: "#e9d02c" }} />
        {data.stargazerCount}
      </CardButtonStar>
      <List>
        <ListItem header>Related Topics</ListItem>
        {data.relatedTopics.map((item) => (
          <ListItem key={item.id}>{item.name}</ListItem>
        ))}
      </List>
      <CardButton>
        <Anchor
          href={`https://www.google.com/search?q=${data.name}`}
          target="_blank"
        >
          Learn More
        </Anchor>
      </CardButton>
    </Container>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
