import React, { useEffect, useState } from "react";
import * as S from "./styles";

import { data } from "./data";
import HashtagItem from "@component/hashtag-item/index";
import SearchBar from "@component/search-bar/index";
import HashtagModel from "@module/model/hashtagModel";

const SearchContainer = () => {
  const [hashtags, setHashtags] = useState([] as HashtagModel[]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    setHashtags(data);
  }, [hashtags]);

  const onClick = () => {};
  return (
    <S.SearchContainer>
      <S.SeachBarContainer>
        <SearchBar
          placeholder="검색예시: 챗봇 API 개발"
          setData={setSearchText}
        />
        <S.SearchButtonContainer>
          <S.SearchButton
            onClick={onClick}
            src="/src/asset/images/glass.jpg"
            alt="glass"
          ></S.SearchButton>
        </S.SearchButtonContainer>
      </S.SeachBarContainer>
      <S.HashtagContainer>
        {hashtags.length !== 0 ? (
          hashtags.map((el, idx) => {
            return (
              <S.HashtagItemWrapper key={idx}>
                <HashtagItem hashtag={el} />
              </S.HashtagItemWrapper>
            );
          })
        ) : (
          <></>
        )}
      </S.HashtagContainer>
    </S.SearchContainer>
  );
};

export default SearchContainer;
