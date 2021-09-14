import React from "react";
import * as S from "./styles";
import { useInput, useSaveButton, useSelectBox } from "./hooks";

import InputBox from "@/component/input-box";
import Modal from "@/component/common/modal";
import Alert from "@/component/alert";

const RegisterSiteForm = ({ show, closeModal }) => {
  const { data, loading, error } = useSelectBox();
  const { info, onChangeHandler, disabled } = useInput();
  const { onClickSave, isAlert, alertMsg } = useSaveButton(info);
  return (
    <Modal show={show} onClose={closeModal}>
      <S.RegisterSiteContainer>
        <S.Title>사이트 등록하기</S.Title>
        <S.SiteInfo>
          <S.Table>
            <S.Label>이름*</S.Label>
            <S.InputBoxWrapper>
              <InputBox
                placeholder="광고제휴BOS 웹"
                name="name"
                setData={onChangeHandler}
              />
            </S.InputBoxWrapper>
            <S.Label>url*</S.Label>
            <S.InputBoxWrapper>
              <InputBox
                placeholder="https://www.naver.com"
                name="url"
                setData={onChangeHandler}
              />
            </S.InputBoxWrapper>
            <S.Label>개발/운영*</S.Label>
            <S.Select name="dev" onChange={onChangeHandler}>
              <option value="true">개발</option>
              <option value="false">운영</option>
            </S.Select>
            <S.Label>관련 시스템*</S.Label>
            <S.Select name="categoryId" onChange={onChangeHandler}>
              <option value="" hidden={true}>
                시스템을 골라주세요
              </option>
              {data &&
                data.map((system, idx) => {
                  return (
                    <option value={system.id} key={idx}>
                      {system.name}
                    </option>
                  );
                })}
            </S.Select>
            <S.Label>태그*</S.Label>
            <S.Select name="stage" onChange={onChangeHandler}>
              <option value="" hidden>
                태그을 선택해주세요
              </option>
              <option value="WEB">웹</option>
              <option value="CONFIG">형상관리</option>
              <option value="DEPLOY">배포</option>
              <option value="MONITOR">모니터링</option>
              <option value="ADMIN">관리(제우스)</option>
            </S.Select>
            <S.Label> 설명*</S.Label>
            <InputBox name="description" setData={onChangeHandler} />
          </S.Table>
        </S.SiteInfo>
        <S.ButtonWrapper>
          <S.SaveButton onClick={onClickSave} disabled={disabled}>
            저장
          </S.SaveButton>
        </S.ButtonWrapper>
      </S.RegisterSiteContainer>
      {isAlert && <Alert redirect={"/admin/site"} message={alertMsg} />}
    </Modal>
  );
};

export default RegisterSiteForm;
