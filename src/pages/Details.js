import styled from "styled-components";
import Card from "../components/Features/Card";
import PropTypes from "prop-types";
import { mobile } from "../responsive";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  align-items: center;
  ${mobile({ flexDirection: "column", alignItems: "center", marginTop:"60px" })}
`;

const Details = ({ location }) => {
  const { relatedTopics } = location.state.data;
  return (
    <CardContainer>
      {relatedTopics.map((topic) => (
        <Card key={topic.id} data={topic} />
      ))}
    </CardContainer>
  );
};

Details.propTypes = {
  data: PropTypes.object,
};

export default Details;
