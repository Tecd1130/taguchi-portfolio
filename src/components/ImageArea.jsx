import React, { useCallback } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { makeStyles } from "@material-ui/styles";
import { storage } from "./../firebase";
import ImagePreview from "./ImagePreview";

const useStyles = makeStyles({
  icon: {
    height: 48,
    width: 48,
  },
});

const ImageArea = (props) => {
  const classes = useStyles();

  const deleteImage = useCallback(async () => {
    const ret = window.confirm("この画像を削除しますか？");
    if (!ret) {
      return false;
    } else {
      return storage.ref().child().delete();
    }
  }, [props.images]);

  const uploadImage = useCallback(
    (event) => {
      const file = event.target.files;
      let blob = new Blob(file, { type: "image/jpeg" });

      const S =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const N = 16;
      const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
        .map((n) => S[n % S.length])
        .join("");

      const uploadRef = storage.ref(props.images).child(fileName);
      const uploadTask = uploadRef.put(blob);

      uploadTask.then(() => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          const newImage = downloadURL;
          props.setImages(newImage);
        });
      });
    },

    [props.setImages]
  );

  return (
    <div>
      <div className="u-text-right">
        <span className="works-edit-img-label">{props.label}</span>
        <IconButton className={classes.icon}>
          <label htmlFor={props.htmlFor}>
            <AddPhotoAlternateIcon />
            <input
              type="file"
              className="display-none"
              id={props.id}
              onChange={(event) => uploadImage(event)}
            />
          </label>
        </IconButton>
      </div>
      <div className="p-grid__list-images">
        {props.images.length > 0 && (
          <ImagePreview delete={deleteImage} path={props.images} />
        )}
      </div>
    </div>
  );
};

export default ImageArea;
