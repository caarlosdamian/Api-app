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
          src="https://s36496.pcdn.co/wp-content/uploads/2019/01/7_Github_contenido.jpg"
          alt="Avatar"
        />

        <div className="up">
          <h4>
            <span>{data.stargazerCount}</span>
            <FaStar className="cardIcon" />
          </h4>
        </div>
        <div className="down">
          <span className="cardSpan">Related Topics</span>
          <div className="cardListContaner">
            {data?.relatedTopics?.map((topic) => (
              <div className="itemContainer">
                <span className="cardSpanItem">{topic.name}</span>{" "}
                <div className="startCountContainer">
                  <span className="cardSpanItemCount">
                    {topic.stargazerCount}
                  </span>{" "}
                  <FaStar className="cardIconItem" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
