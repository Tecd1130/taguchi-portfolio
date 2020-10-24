import React, { useState, useEffect } from "react";
import { Header, Footer } from "../components/index";
import { db } from "../firebase";
import HTMLReactParser from "html-react-parser";

const WorksDetail = () => {
  const path = window.location.href;
  const id = path.split("/works/detail/")[1];

  const [works, setWorks] = useState(null);

  useEffect(() => {
    db.collection("works")
      .doc(id)
      .get()
      .then((doc) => {
        const data = doc.data();
        setWorks(data);
      });
  }, []);

  const returnCodeToBr = (text) => {
    if (text === "") {
      return text;
    } else {
      return HTMLReactParser(text.replace(/\r?\n/g, "<br>"));
    }
  };

  return (
    <>
      <Header></Header>
      <section className="detail">
        {works && (
          <div className="inner">
            <picture className="detail-mv">
              <source srcSet={works.thumb} media="(min-width: 600px)" />
              <source srcSet={works.thumbSP} media="(min-width: 320px)" />
              <img src={works.thumbSP} alt="" />
            </picture>
            <p className="detail-info">{returnCodeToBr(works.title)}</p>
            <div className="detail-client">
              <p className="detail-client-card">クライアント</p>
              <p className="detail-client-text">{works.client}</p>
            </div>
            <div className="detail-charge">
              <p className="detail-charge-card">担当工程</p>
              <p className="detail-charge-text">{works.charge}</p>
            </div>
            <p className="detail-text">{returnCodeToBr(works.description)}</p>
            <picture className="detail-img">
              <source srcSet={works.image01} media="(min-width: 600px)" />
              <source srcSet={works.image01SP} media="(min-width: 320px)" />
              <img src={works.image01SP} alt="" />
            </picture>
            <picture className="detail-img">
              <source srcSet={works.image02} media="(min-width: 600px)" />
              <source srcSet={works.image02SP} media="(min-width: 320px)" />
              <img src={works.image02SP} alt="" />
            </picture>
            <picture className="detail-img">
              <source srcSet={works.image03} media="(min-width: 600px)" />
              <source srcSet={works.image03SP} media="(min-width: 320px)" />
              <img src={works.image03SP} alt="" />
            </picture>
            <p className="detail-attention">
              ※当ページに掲載の内容について、一切の転載を禁止いたします。
            </p>
            <a href="/works/" className="worksTop-link">
              実績に戻る
            </a>
          </div>
        )}
      </section>
      <Footer></Footer>
    </>
  );
};

export default WorksDetail;
