import React from 'react';
import * as S from './styles';

interface SearchProps{
  placeholder: string;
  setData: (e:any) => void;
}

const SearchBar = (props: SearchProps) => {

  const {placeholder, setData} = props;
  return (
    <S.SearchBar
    placeholder = {placeholder}
    onChange = {(e)=> {
      setData(e.target.value);
    }}
    >
        <S.GlassImage/>
    </S.SearchBar>
  );
};

export default SearchBar;