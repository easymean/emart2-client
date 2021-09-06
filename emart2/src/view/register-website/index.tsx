import React, { useState } from "react";
import * as S from "./styles";
import InputBox from "@/component/input-box";
import { useSelectBox } from "./hooks";

const RegisterWebsitePage = () => {
  const { systemList } = useSelectBox();
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
        <S.Label>개발/운영*</S.Label>
        <S.Select>
          <option value="true">개발</option>
          <option value="false">운영</option>
        </S.Select>
        <S.Label>관련 시스템*</S.Label>
        <S.Select>
          {systemList.length !== 0 ? (
            systemList.map((system, idx) => {
              <option value={system.id}>{system.name}</option>;
            })
          ) : (
            <option value="" hidden>
              시스템을 먼저 등록해주세요
            </option>
          )}
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
