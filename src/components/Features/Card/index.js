import React from "react";
import styled from "styled-components";
import { shape, string, number ,arrayOf } from "prop-types";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import {Anchor} from '../../Shared/Link';
import Button from '../../Shared/Button';
import List,{ ListItem } from '../../Shared/List';
import Flex from '../../Shared/Flex';
import Text from '../../Shared/Text';
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
  color: black;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  ${mobile({ width: "70%", margin: "10px 0px" })}
`;

export const Header = styled.span`
  font-weight: bold;
  text-transform: capitalize;
  font-size: 35px;
`;

const Card = ({ data }) => {
  return (
    <Container>
      <Flex alignItems="center" paddingBottom="20px" justifyContent="center">
        <Text size="20px" color="black">{data.name}</Text>
      </Flex>
        
      <Button>
        <StarBorderIcon style={{ color: "#e9d02c" }} />
        {data.stargazerCount}
      </Button>

      <List>
        <ListItem header>Related Topics</ListItem>
        {data.relatedTopics.map((item) => (
          <ListItem key={item.id}>{item.name}</ListItem>
        ))}
      </List>

      <Button>
        <Anchor
          href={`https://www.google.com/search?q=${data.name}`}
          target="_blank"
        >
          Learn More
        </Anchor>
      </Button>
      
    </Container>
  );
};

Card.propTypes = {
  data: shape({
    name: string.isRequired,
    stargazerCount: string.isRequired,
    relatedTopics: arrayOf(
      shape({
        id: number,
        name: string
      })
    ).isRequired,

  })
};

export default Card;