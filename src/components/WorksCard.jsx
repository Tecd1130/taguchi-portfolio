import React from "react";

const WorksCard = (props) => {
  return (
    <a
      className={"works-card" + " " + props.category}
      href={"/works/detail/" + props.id}
    >
      <img className="works-card-img" src={props.thumb} alt="" />
      <div className="works-card-info">
        <p className="works-card-client">{props.client}</p>
        <p className="works-card-content">{props.title}</p>
      </div>
    </a>
  );
};

export default WorksCard;
