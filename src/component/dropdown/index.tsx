import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { DropDownItemProps } from "./types";

const Dropdown = ({ siteList, visible }: DropDownItemProps) => {
  return (
    <S.DropdownContainer visible={visible}>
      <S.DropdownList>
        {siteList.map((site, idx) => {
          return (
            <S.Dropdown key={idx}>
              <a href={site.url} target="_blank">
                {site.name}
                <S.Dev>{site.dev ? "개발" : "운영"}</S.Dev>
              </a>
            </S.Dropdown>
          );
        })}
      </S.DropdownList>
    </S.DropdownContainer>
  );
};

export default Dropdown;
