import React from "react";
import * as S from "./styles";

import HashtagItem from "@component/hashtag-item/index";
import SearchBar from "@/component/search-bar/index";
import { useHashtag, useSearchBar } from "./hooks";
import {
  DropdownContainer,
  DropdownItem,
  DropdownList,
} from "@component/dropdown/styles";

const SearchContainer = () => {
  const { hashtags } = useHashtag();
  const { siteList, onKeyup, visible } = useSearchBar();

  return (
    <S.SearchContainer>
      <S.SeachBarContainer>
        <SearchBar placeholder="검색예시: 챗봇 API 개발" setData={onKeyup} />

        <DropdownContainer>
          <DropdownList visible={visible}>
            {siteList.map((site, idx) => {
              return (
                <DropdownItem key={idx}>
                  <a href={site.url} target="_blank">
                    <S.SiteName>
                      {site.name}
                      <S.Dev>{site.dev ? "개발" : "운영"}</S.Dev>
                    </S.SiteName>
                  </a>
                </DropdownItem>
              );
            })}
          </DropdownList>
        </DropdownContainer>
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
