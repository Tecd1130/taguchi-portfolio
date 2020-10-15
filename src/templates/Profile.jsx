import React from "react";
import { Header, Footer } from "../components/index";
import ProfileImg from "../assets/img/img_profile.png";
import IconPs from "../assets/img/icon_photoshop.png";
import IconAi from "../assets/img/icon_illustrator.png";
import IconXD from "../assets/img/icon_xd.png";

const Profile = () => {
  return (
    <>
      <Header></Header>
      <section className="profile">
        <div className="inner">
          <h2 className="section-title">
            プロフィール<span>Profile</span>
          </h2>
          <p className="profile-text">
            東京にてWeb制作をしております。
            <br />
            2015年よりECサイト/オリジナルブランドショップにて商品企画、デザインなどの業務を行う。
            <br />
            2019年からweb製作会社にてwebデザインやバナー製作などを担当。
            <br />
            2020年よりweb製作会社に所属しつつ、フリーランスとして活動。
          </p>
          <div className="profile-row">
            <div className="profile-row-img">
              <img src={ProfileImg} alt="" />
            </div>
            <div className="profile-row-content">
              <p className="profile-row-name">田口 華野　Kano Taguchi</p>
              <p className="profile-row-contact">
                <span>お問い合わせ</span>
                taguchik0220@gmail.com
              </p>
              <p className="profile-row-business">
                <span>事業内容</span>
                Webデザイン、バナー製作、ロゴ作成など
              </p>
            </div>
          </div>
          <ul className="profile-skill-list">
            <li className="profile-skill-item">
              <div className="profile-skill-img">
                <img src={IconAi} alt="" />
              </div>
              <p className="profile-skill-text">
                llustrator CC
                <br />
                実務経験5年以上
                <br />
                イラスト・バナー作成
              </p>
            </li>
            <div className="profile-skill-item">
              <div className="profile-skill-img">
                <img src={IconPs} alt="" />
              </div>
              <p className="profile-skill-text">
                Photoshop CC
                <br />
                実務経験5年以上
                <br />
                写真加工・webページ画像作成
              </p>
            </div>
            <div className="profile-skill-item">
              <div className="profile-skill-img">
                <img src={IconXD} alt="" />
              </div>
              <p className="profile-skill-text">
                Adobe XD
                <br />
                実務経験1年以上
                <br />
                webページ画像作成
              </p>
            </div>
          </ul>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Profile;
