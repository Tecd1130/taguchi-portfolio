import React from "react";
import { Header, Footer } from "../components/index";

const WorksDetail = () => {
  return (
    <>
      <Header></Header>
      <section className="detail">
        <div className="inner">
          <div className="detail-mv">
            <img src="" alt="" />
          </div>
          <p className="detail-info">
            スクール教材用ブログサイトをリニューアル。記事を検索しやすく、生徒が読みやすく改善
          </p>
          <div className="detail-client">
            <p className="detail-client-card">クライアント</p>
            <p className="detail-client-text">
              BeCrazy 個人プログラミングブログサイト
            </p>
          </div>
          <div className="detail-charge">
            <p className="detail-charge-card">担当工程</p>
            <p className="detail-charge-text">ワイヤーフレーム/デザイン</p>
          </div>
          <p className="detail-text">
            プログラミングスクールの受講生用にプログラミング用語や作成方法をまとめたブログサイトの大幅リニューアルに向けてデザインを担当。「教材らしさが強くサイトの検索の不便さを改善したデザインにしたい」という依頼を受け、文字をメインとしたページを読みやすく、また親しみやすさを直感していただけるようなデザインを心がけました。また以前まではブログ内での導線が出来ていない場所も多くあり導線の確保と優先的に読んで欲しい内容がトップページ内で収まる構成を提案いたしました。
          </p>
          <div className="detail-img">
            <img src="" alt="" />
          </div>
          <div className="detail-img">
            <img src="" alt="" />
          </div>
          <div className="detail-img">
            <img src="" alt="" />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default WorksDetail;
