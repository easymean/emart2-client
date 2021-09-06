import React, { useState } from "react";
import * as S from "./styles";
import InputBox from "@/component/input-box";
import { useSelectBox } from "./hooks";

const RegisterSystemPage = () => {
  const { systemList } = useSelectBox();
  return (
    <S.ManageSystemContainer>
      <S.Title>시스템 등록하기</S.Title>
      <S.InfoWrapper>
        <S.Label>이름*</S.Label>
        <S.InputBoxWrapper>
          <InputBox placeholder="광고제휴" />
        </S.InputBoxWrapper>
        <S.Label> 설명*</S.Label>
        <InputBox />
      </S.InfoWrapper>
      <S.ButtonWrapper>
        <S.SaveButton>저장</S.SaveButton>
        <S.CancelButton>취소</S.CancelButton>
      </S.ButtonWrapper>
    </S.ManageSystemContainer>
  );
};

export default RegisterSystemPage;
