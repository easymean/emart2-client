import React from "react";
import * as S from "./styles";

interface SearchBarProps {
  placeholder: string;
  setData: (e: any) => void;
}

const SearchBar = ({ placeholder, setData }: SearchBarProps) => {
  return (
    <S.SearchBar
      placeholder={placeholder}
      onChange={(e) => {
        setData(e.target.value);
      }}
    />
  );
};

export default SearchBar;
