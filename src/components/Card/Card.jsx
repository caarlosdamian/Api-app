import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./card.css";
const Card = (props) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(props.location.state.data);
  }, [props]);
  console.log(data);
  return (
    <div className="cardContainer">
      <div className="wrapper">
        <h2 className="cardHeader">{data.name}</h2>
        <img
          className="cardImg"
          src="data:image/png;base64,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"
          alt="Avatar"
        />

        <div className="up">
          <h4>
            <FaStar className="cardIcon" />
            <span>{data.stargazerCount}</span>
          </h4>
        </div>
        <div className="down">
          <span className="cardSpan">Related Topics</span>
          <div className="cardListContaner">
            {data?.relatedTopics?.map((topic) => (
              <div className="itemContainer">
                <span className="cardSpanItem">{topic.name}</span>{" "}
                <span className="cardSpanItemCount">{topic.stargazerCount}</span>{" "}
                <FaStar className="cardIcon" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
