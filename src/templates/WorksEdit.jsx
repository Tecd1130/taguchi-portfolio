import React, { useState, useCallback } from "react";
import {
  TextInput,
  PrimaryButton,
  ImageArea,
  SelectBox,
} from "../components/index";
import { db, FirebaseTimestamp } from "../firebase";

const WorksEdit = () => {
  let id = window.location.pathname.split("/works/edit")[1];

  const [category, setCategory] = useState(""),
    [thumb, setThumb] = useState(""),
    [thumbSP, setThumbSP] = useState(""),
    [title, setTitle] = useState(""),
    [client, setClient] = useState(""),
    [charge, setCharge] = useState(""),
    [description, setDescription] = useState(""),
    [image01, setImage01] = useState(""),
    [image02, setImage02] = useState(""),
    [image03, setImage03] = useState(""),
    [image01SP, setImage01SP] = useState(""),
    [image02SP, setImage02SP] = useState(""),
    [image03SP, setImage03SP] = useState("");

  const inputTitle = useCallback(
    (event) => {
      setTitle(event.target.value);
    },
    [setTitle]
  );

  const inputClient = useCallback(
    (event) => {
      setClient(event.target.value);
    },
    [setClient]
  );
  const inputCharge = useCallback(
    (event) => {
      setCharge(event.target.value);
    },
    [setCharge]
  );

  const inputDescription = useCallback(
    (event) => {
      setDescription(event.target.value);
    },
    [setDescription]
  );

  const categories = [
    { id: "web", name: "web" },
    { id: "banner", name: "バナー" },
    { id: "logo", name: "ロゴデザイン" },
    { id: "illust", name: "イラスト" },
    { id: "graphic", name: "印刷物" },
  ];

  const saveProduct = async (
    id,
    category,
    thumb,
    thumbSP,
    title,
    client,
    charge,
    description,
    image01,
    image01SP,
    image02,
    image02SP,
    image03,
    image03SP
  ) => {
    const worksRef = db.collection("works");
    const timestamp = FirebaseTimestamp.now();

    const data = {
      category: category,
      thumb: thumb,
      thumbSP: thumbSP,
      title: title,
      client: client,
      charge: charge,
      description: description,
      image01: image01,
      image01SP: image01SP,
      image02: image02,
      image02SP: image02SP,
      image03: image03,
      image03SP: image03SP,
      updated_at: timestamp,
    };

    if (id === "") {
      const ref = worksRef.doc();
      id = ref.id;
      data.id = id;
      data.created_at = timestamp;
    }

    await worksRef
      .doc(id)
      .set(data)
      .then(() => {
        alert("完了");
        console.log(data);
      })
      .catch((error) => {
        alert("エラー");
        console.log(data);
      });
  };

  return (
    <>
      <section className="works-edit">
        <div className="inner">
          <h2 className="works-edit-title">実績の編集・登録</h2>
          <div className="spacer-md"></div>
          <SelectBox
            label={"カテゴリー"}
            required={true}
            options={categories}
            select={setCategory}
            value={category}
          />
          <div className="spacer-sm"></div>
          <ImageArea
            images={thumb}
            setImages={setThumb}
            label={"実績MV(PC版)"}
          />
          <div className="spacer-sm"></div>
          <ImageArea
            images={thumbSP}
            setImages={setThumbSP}
            label={"実績MV(SP版)＆一覧画面のサムネイル"}
          />
          <div className="spacer-sm"></div>
          <TextInput
            fullWidth={true}
            label={"実績の見出し"}
            multiline={false}
            required={true}
            onChange={inputTitle}
            rows={1}
            value={title}
            type={"text"}
          />
          <div className="spacer-md"></div>
          <TextInput
            fullWidth={true}
            label={"クライアント名"}
            multiline={false}
            required={true}
            onChange={inputClient}
            rows={1}
            value={client}
            type={"text"}
          />
          <div className="spacer-md"></div>
          <TextInput
            fullWidth={true}
            label={"担当工程"}
            multiline={false}
            required={true}
            onChange={inputCharge}
            rows={1}
            value={charge}
            type={"text"}
          />
          <div className="spacer-md"></div>
          <TextInput
            fullWidth={true}
            label={"内容説明"}
            multiline={true}
            required={true}
            onChange={inputDescription}
            rows={5}
            value={description}
            type={"text"}
          />
          <div className="spacer-md"></div>
          <ImageArea
            images={image01}
            setImages={setImage01}
            label={"実績画像A(PC版)"}
          />
          <div className="spacer-sm"></div>
          <ImageArea
            images={image01SP}
            setImages={setImage01SP}
            label={"実績画像A(SP版)"}
          />
          <div className="spacer-sm"></div>
          <ImageArea
            images={image02}
            setImages={setImage02}
            label={"実績画像B(PC版)"}
          />
          <div className="spacer-sm"></div>
          <ImageArea
            images={image02SP}
            setImages={setImage02SP}
            label={"実績画像B(SP版)"}
          />
          <div className="spacer-sm"></div>
          <ImageArea
            images={image03}
            setImages={setImage03}
            label={"実績画像C(PC版)"}
          />
          <div className="spacer-sm"></div>
          <ImageArea
            images={image03SP}
            setImages={setImage03SP}
            label={"実績画像C(SP版)"}
          />
          <div className="spacer-sm"></div>
          <PrimaryButton
            label={"実績情報を保存"}
            onClick={() => {
              saveProduct(
                id,
                category,
                thumb,
                thumbSP,
                title,
                client,
                charge,
                description,
                image01,
                image01SP,
                image02,
                image02SP,
                image03,
                image03SP
              );
            }}
          />
        </div>
      </section>
    </>
  );
};

export default WorksEdit;
