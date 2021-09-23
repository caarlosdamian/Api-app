import styled from "styled-components";
import Card from "../components/molecules/Card/Card";
import PropTypes from "prop-types";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  position: relative;
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
