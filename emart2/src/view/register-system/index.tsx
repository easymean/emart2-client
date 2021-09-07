import React from "react";
import * as S from "./styles";
import InputBox from "@/component/input-box";

const RegisterSystemPage = () => {
  return (
    <S.ManageSystemContainer>
      <S.SystemImage></S.SystemImage>
      <S.SystemInfo>
        <S.Title>시스템 등록하기</S.Title>
        <S.Table>
          <S.Label>이름*</S.Label>
          <S.InputBoxWrapper>
            <InputBox placeholder="광고제휴" />
          </S.InputBoxWrapper>
          <S.Label> 설명*</S.Label>
          <S.InputBoxWrapper>
            <InputBox />
          </S.InputBoxWrapper>
        </S.Table>
        <S.ButtonWrapper>
          <S.SaveButton>저장</S.SaveButton>
          <S.CancelButton>취소</S.CancelButton>
        </S.ButtonWrapper>
      </S.SystemInfo>
    </S.ManageSystemContainer>
  );
};

export default RegisterSystemPage;
