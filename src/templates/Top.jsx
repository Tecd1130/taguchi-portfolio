import React from "react";
import { Header, Footer } from "../components/index";
import MV from "../assets/img/mv.png";
import MV_SP from "../assets/img/mv_sp.png";
import IconIllust from "../assets/img/icon_illust.png";
import IconWeb from "../assets/img/icon_web.png";
import IconLogo from "../assets/img/icon_logo.png";

const Top = () => {
  return (
    <>
      <Header></Header>

      <div className="mv">
        <picture>
          <source media="(min-width: 960px)" srcset={MV} />
          <source media="(min-width: 320px)" srcset={MV_SP} />
          <img src={MV_SP} alt="" />
        </picture>
      </div>

      <section className="skill">
        <div className="inner">
          <h2 className="section-title">
            スキル<span>skill</span>
          </h2>
          <div className="skill-row">
            <div className="skill-row-item">
              <div className="skill-row-icon-wrap">
                <img
                  className="skill-row-icon skill-row-icon--web"
                  src={IconWeb}
                  alt=""
                />
              </div>
              <h3 className="skill-row-title">
                Webデザイン<span>web design</span>
              </h3>
              <p className="skill-row-text">
                デザイン前にお客様の要望やターゲットとする客層などのペルソナを確認し、デザイン作業にうつります。コーディングを意識したデザインも取り入れつつPhotoshopやXD、必要であればillustratorなどのソフトを使用しデザインを作成致します。
              </p>
            </div>
            <div className="skill-row-item">
              <div className="skill-row-icon-wrap">
                <img
                  className="skill-row-icon skill-row-icon--logo"
                  src={IconLogo}
                  alt=""
                />
              </div>
              <h3 className="skill-row-title">
                ロゴデザイン<span>logo design</span>
              </h3>
              <p className="skill-row-text">
                企業の顔となるロゴやマークを作成するにあたってコンセプトや白黒で使用する場合や縦横などの使用用途などをデザインいたします。
                <br />
                また用途(白黒での使用など)も含め提案をさせていただきます。
              </p>
            </div>
            <div className="skill-row-item">
              <div className="skill-row-icon-wrap">
                <img
                  className="skill-row-icon skill-row-icon--illust"
                  src={IconIllust}
                  alt=""
                />
              </div>
              <h3 className="skill-row-title">
                イラスト作成<span>illustration</span>
              </h3>
              <p className="skill-row-text">
                欲しい素材やイラストを伺いそのイメージに沿ったイラストを作成いたします。アイコンや背景パターン、MVなどに使用するイラスト作成をいたします。イラストの詳細は下の仕事一覧をご覧ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="works">
        <div className="inner">
          <h2 className="section-title">
            実績<span>Works</span>
          </h2>

          <a href="/works/" className="works-link">
            もっと見る
          </a>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Top;
