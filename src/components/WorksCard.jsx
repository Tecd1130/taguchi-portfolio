import React from "react";
import Demo from "../assets/img/img_demo.png";

const WorksCard = () => {
  return (
    <a className="works-card" href="/works/">
      <img className="works-card-img" src={Demo} alt="" />
      <div className="works-card-info">
        <p className="works-card-client">BeCrazy プログラミングサイト</p>
        <p className="works-card-content">
          個人ブログサイトデザイン/プログラミングスクール教材サイト
        </p>
      </div>
    </a>
  );
};

export default WorksCard;
