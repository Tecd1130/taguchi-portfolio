import React from "react";

const ImagePreview = (props) => {
  return (
    <div className="p-media__thumb" onClick={() => props.delete()}>
      <img src={props.path} alt="プレビュー" />
    </div>
  );
};

export default ImagePreview;
