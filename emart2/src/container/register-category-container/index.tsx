import React from "react";
import * as S from "./styles";
import InputBox from "@/component/input-box";
import { useInput, useSaveButton } from "./hooks";
import Modal from "@/component/common/modal";

const RegisterCategoryForm = ({ show }) => {
  const { info, onChangeHandler, disabled } = useInput();
  const { onClickSave } = useSaveButton(info);
  return (
    <Modal show={show}>
      <S.RegisterCategoryContainer>
        <S.SystemImage></S.SystemImage>
        <S.SystemInfo>
          <S.Title>시스템 등록하기</S.Title>
          <S.Table>
            <S.Label>이름*</S.Label>
            <S.InputBoxWrapper>
              <InputBox
                placeholder="광고제휴"
                name="name"
                setData={onChangeHandler}
              />
            </S.InputBoxWrapper>
            <S.Label> 설명*</S.Label>
            <S.InputBoxWrapper>
              <InputBox name="description" setData={onChangeHandler} />
            </S.InputBoxWrapper>
          </S.Table>
          <S.ButtonWrapper>
            <S.SaveButton disabled={disabled} onClick={onClickSave}>
              저장
            </S.SaveButton>
            <S.CancelButton>취소</S.CancelButton>
          </S.ButtonWrapper>
        </S.SystemInfo>
      </S.RegisterCategoryContainer>
    </Modal>
  );
};

export default RegisterCategoryForm;