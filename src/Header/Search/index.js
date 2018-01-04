import React from "react";
import styled from "styled-components";
import searchIcon from "./search.svg";

const Search = styled.div`
    display: inline-block;
    position: relative;
    width: 100%;
  `,
  SearchIcon = styled.image`
    position: absolute;
    left: 1rem;
    top: 1.9rem;
    width: 1.3rem;
    height: 1.3rem;
    background: url(${searchIcon});
    z-index: -1;
  `,
  SearchField = styled.input`
    background: none;
    margin: 1rem 0;
    padding-left: 3.3rem;
    border-radius: 4px;
    width: 100%;
    height: 48px;
    font-size: 16px;
    border: 1px solid rgba(72, 72, 72, 0.2);
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  `,
  placeholder = `Try "Miami"`;

export default () => {
  return (
    <Search>
      <SearchIcon />
      <SearchField placeholder={placeholder} />
    </Search>
  );
};
