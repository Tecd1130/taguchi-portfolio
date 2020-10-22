import React, { useState, useEffect } from "react";
import { Header, Footer } from "../components/index";
import { db } from "../firebase";
import HTMLReactParser from "html-react-parser";

const WorksDetail = () => {
  const id = "jupW6sYHKIaAXE4AiGPI";

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
            <div className="detail-mv">
              <img src={works.thumb[0].path} alt="" />
            </div>
            <p className="detail-info">{works.title}</p>
            <div className="detail-client">
              <p className="detail-client-card">クライアント</p>
              <p className="detail-client-text">{works.client}</p>
            </div>
            <div className="detail-charge">
              <p className="detail-charge-card">担当工程</p>
              <p className="detail-charge-text">{works.charge}</p>
            </div>
            <p className="detail-text">{returnCodeToBr(works.description)}</p>
            <img src={works.thumb[2].path} alt="" />
            <img src={works.thumb[4].path} alt="" />
            <img src={works.thumb[6].path} alt="" />
            {/* <picture className="detail-img">
              <source srcset="{works.image01}" />
              <source srcset="" />
            </picture>
            <picture className="detail-img">
              <source srcset="" />
              <source srcset="" />
              <img src={works.image02} alt="" />
            </picture>
            <picture className="detail-img">
              <source srcset="" />
              <source srcset="" />
              <img src={works.image03} alt="" />
            </picture> */}
          </div>
        )}
      </section>
      <Footer></Footer>
    </>
  );
};

export default WorksDetail;
