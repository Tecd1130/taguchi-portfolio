import React from "react";
import { animateScroll as scroll } from "react-scroll";
import iconScrollSP from "../assets/img/icon_scroll_sp.png";
import iconScrollPC from "../assets/img/icon_scroll_pc.png";

const ScrollTop = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="scroll-top" onClick={scrollToTop}>
      <img className="pc-block" src={iconScrollPC} alt="ページトップへ戻る" />
      <img className="sp-block" src={iconScrollSP} alt="ページトップへ戻る" />
    </div>
  );
};

export default ScrollTop;
