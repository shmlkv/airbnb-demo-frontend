import React from "react";
import styled from "styled-components";
import searchIcon from "./search.svg";

const Search = styled.div`
  display: inline-block;
  position: relative;
`;
const SearchIcon = styled.image`
  position: absolute;
  left: 4.2rem;
  top: 1.9rem;
  width: 1.3rem;
  height: 1.3rem;
  background: url(${searchIcon});
`;

const SearchField = styled.input`
  margin: 1rem 3.2rem;
  padding-left: 3.3rem;
  border-radius: 4px;
  width: 392px;
  height: 48px;
  font-size: 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
`;

export default () => {
  return (
    <Search>
      <SearchIcon />
      <SearchField placeholder="Try &quot;Miami&quot;" />
    </Search>
  );
};
