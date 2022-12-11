import React, { useState } from "react";
import "./Pagination.css";
import ReactPaginate from "react-paginate";
import AlbumList from "./AlbumList";
import Album from "./type";

type Props = {
  albums: Album[];
  itemsPerPage: number;
};

const Pagination = (props: Props) => {
  const { albums, itemsPerPage } = props;

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`アルバムを${itemOffset}から${endOffset}まで表示しています`);
  const currentAlbums = albums.slice(itemOffset, endOffset);
  // math.ceil(7.004) = 8
  const pageCount = Math.ceil(albums.length / itemsPerPage);

  const handlePageClick = (e: { selected: number }) => {
    const newOffset = (e.selected * itemsPerPage) % albums.length;
    console.log(
      `User requested page number ${e.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="albumWrapper">
      <AlbumList currentAlbums={currentAlbums} />
      <div className="paginateWrapper">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default Pagination;
