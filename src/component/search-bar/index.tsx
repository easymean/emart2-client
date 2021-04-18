import React from "react";
import { useSearchBar } from "./hooks";
import * as S from "./styles";

interface SearchBarProps {
  placeholder: string;
  setData: (e: any) => void;
}

const SearchBar = ({ placeholder, setData }: SearchBarProps) => {
  return <S.InputBox placeholder={placeholder} onKeyUp={setData} />;
};

export default SearchBar;
