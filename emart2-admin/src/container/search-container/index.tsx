import React from "react";
import * as S from "./styles";

import InputBox from "@/component/input-box/index";
import { useSearchBar } from "./hooks";
import {
  DropdownContainer,
  DropdownItem,
  DropdownList,
} from "@component/dropdown/styles";

const SearchContainer = () => {
  const { siteList, onKeyup, visible, onKeyPress } = useSearchBar();

  return (
    <S.SearchContainer>
      <S.SeachBarContainer>
        <InputBox
          name="keyword"
          placeholder="검색예시: 챗봇 API 개발"
          setData={onKeyup}
          onKeyPress={onKeyPress}
        />

        <DropdownContainer>
          <DropdownList>
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
    </S.SearchContainer>
  );
};

export default SearchContainer;
