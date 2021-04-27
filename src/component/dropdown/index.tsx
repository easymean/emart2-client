import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { DropDownItemProps } from "./types";

const Dropdown = ({ siteList, visible }: DropDownItemProps) => {
  const handleClick = (url) => {
    window.open(url);
  };

  return (
    <S.DropdownContainer visible={visible}>
      <S.DropdownList>
        {siteList.map((site, idx) => {
          return (
            <S.DropdownWrapper key={idx}>
              <S.Dropdown>{site.name}</S.Dropdown>
            </S.DropdownWrapper>
          );
        })}
      </S.DropdownList>
    </S.DropdownContainer>
  );
};

export default Dropdown;
