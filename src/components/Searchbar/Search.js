import React from "react";
import { VscSearch } from 'react-icons/vsc'

const Search = () => {
  return (
    <div className="position-relative">
      <div className="input-group mb-2 mr-sm-2 bg-white position-absolute">
        <div className="input-group-prepend">
          <div className="input-group-text bg-white border-0"><VscSearch/></div>
        </div>
        <input
          type="text"
          className="form-control px-5"
          id="inlineFormInputGroupUsername2"
          placeholder="Search Product"
        />
      </div>
    </div>
  );
};

export default Search;
