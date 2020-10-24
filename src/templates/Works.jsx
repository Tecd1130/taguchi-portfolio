import React, { useState, useEffect } from "react";
import { Header, Footer, WorksCard } from "../components/index";
// import IconAll from "../assets/img/icon_all.png";
// import IconWeb from "../assets/img/icon_web.png";
// import IconBanner from "../assets/img/icon_banner.png";
// import IconIllustWorks from "../assets/img/icon_illust_works.png";
// import IconLogoWorks from "../assets/img/icon_logo_works.png";
// import IconPlan from "../assets/img/icon_plan.png";
import { db } from "../firebase";

const Works = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchWorks = async () => {
      const worksRef = db.collection("works");
      let query = worksRef.orderBy("date", "desc");
      return await query.get().then((snapshots) => {
        snapshots.forEach((snapshot) => {
          const workList = snapshot.data();
          setWorks((prevState) => [...prevState, workList]);
        });
      });
    };
    fetchWorks();
  }, []);

  return (
    <>
      <Header></Header>
      <section className="works">
        <div className="inner">
          <h2 className="section-title">
            実績<span>Works</span>
          </h2>
          {/* <ul className="works-tab-list">
            <li className="works-tab-item">
              <img
                className="works-tab-img works-tab-img--all"
                src={IconAll}
                alt=""
              />
              <p className="works-tab-text">すべて</p>
            </li>
            <li className="works-tab-item">
              <img
                className="works-tab-img works-tab-img--web"
                src={IconWeb}
                alt=""
              />
              <p className="works-tab-text">Web</p>
            </li>
            <li className="works-tab-item">
              <img
                className="works-tab-img works-tab-img--banner"
                src={IconBanner}
                alt=""
              />
              <p className="works-tab-text">バナー</p>
            </li>
            <li className="works-tab-item">
              <img
                className="works-tab-img works-tab-img--logo"
                src={IconLogoWorks}
                alt=""
              />
              <p className="works-tab-text">ロゴデザイン</p>
            </li>
            <li className="works-tab-item">
              <img
                className="works-tab-img works-tab-img--illust"
                src={IconIllustWorks}
                alt=""
              />
              <p className="works-tab-text">イラスト</p>
            </li>
            <li className="works-tab-item">
              <img
                className="works-tab-img works-tab-img--plan"
                src={IconPlan}
                alt=""
              />
              <p className="works-tab-text">写真商品企画</p>
            </li>
          </ul> */}

          <div className="works-card-list">
            {works.length > 0 &&
              works.map((work) => (
                <WorksCard
                  key={work.id}
                  id={work.id}
                  client={work.client}
                  title={work.title}
                  thumb={work.thumbSP}
                />
              ))}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Works;
