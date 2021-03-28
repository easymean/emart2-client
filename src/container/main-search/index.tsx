import React, { useEffect, useState } from "react";
import * as S from "./styles";

import { data } from "./data";
import HashtagItem from "@component/hashtag-item/index";
import SearchBar from "@component/search-bar/index";
import HashtagModel from "@module/model/hashtagModel";

const MainSearch = () => {
  const [hashtags, setHashtags] = useState([] as HashtagModel[]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    setHashtags(data);
  }, hashtags);
  return (
    <S.SearchContainer>
      <SearchBar
        placeholder="검색예시: 챗봇 API 개발"
        setData={setSearchText}
      />
      <S.HashtagContainer>
        {hashtags &&
          hashtags.map((el) => {
            return <HashtagItem hashtag={el} />;
          })}
      </S.HashtagContainer>
    </S.SearchContainer>
  );
};

export default MainSearch;
