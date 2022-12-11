import React from "react";
import Album from "./type";
import "./AlbumList.css";

type Props = {
  currentAlbums: Album[];
};

const AlbumList = (props: Props) => {
  const { currentAlbums } = props;

  return (
    <div className="albumGridWrapper">
      {currentAlbums.map((album) => (
        <div key={album.id}>
          <img src={album.url} alt="" />
        </div>
      ))}
    </div>
  );
};

export default AlbumList;
