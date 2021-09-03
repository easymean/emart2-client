import React, { useState } from "react";
import * as S from "./styles";
import InputBox from "@/component/input-box";

const RegisterWebsitePage = () => {
  return (
    <S.ManageWebsiteContainer>
      <S.Title>사이트 등록하기</S.Title>
      <S.InfoWrapper>
        <S.Label>이름*</S.Label>
        <S.InputBoxWrapper>
          <InputBox placeholder="광고제휴BOS 웹" />
        </S.InputBoxWrapper>
        <S.Label>url*</S.Label>
        <S.InputBoxWrapper>
          <InputBox placeholder="https://www.naver.com" />
        </S.InputBoxWrapper>
        <S.Label>관련 시스템*</S.Label>
        <S.Select>
          <option value="" hidden>
            시스템을 선택해주세요
          </option>
          <option value="1">MMS쿠폰</option>
          <option value="2">광고제휴</option>
          <option value="3">세금계산서</option>
          <option value="4">CMS</option>
          <option value="5">ALM</option>
          <option value="6">챗봇</option>
          <option value="7">공통</option>
        </S.Select>
        <S.Label>태그*</S.Label>
        <S.Select>
          <option value="" hidden>
            태그을 선택해주세요
          </option>
          <option value="WEB_FRONT">웹FRONT</option>
          <option value="WEB_ADMIN">웹BOS</option>
          <option value="DEPLOY">배포</option>
          <option value="MONITOR">모니터링</option>
          <option value="STAGE">스테이징</option>
        </S.Select>
        <S.Label> 설명*</S.Label>
        <InputBox />
      </S.InfoWrapper>
      <S.ButtonWrapper>
        <S.SaveButton>저장</S.SaveButton>
        <S.CancelButton>취소</S.CancelButton>
      </S.ButtonWrapper>
    </S.ManageWebsiteContainer>
  );
};

export default RegisterWebsitePage;
