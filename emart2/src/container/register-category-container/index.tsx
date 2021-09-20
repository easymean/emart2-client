import React from "react";
import * as S from "./styles";
import { useInput, useSaveButton } from "./hooks";

import InputBox from "@/component/input-box";
import Modal from "@/component/common/modal";
import Alert from "@/component/common/alert";

const RegisterCategoryForm = ({ show, closeModal }) => {
  const { info, onChangeHandler, disabled } = useInput();
  const { onClickSave, isAlert, alertMsg } = useSaveButton(info);
  return (
    <Modal show={show} onClose={closeModal}>
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
          </S.ButtonWrapper>
        </S.SystemInfo>
      </S.RegisterCategoryContainer>
      {isAlert && <Alert redirect={"/admin/system"} message={alertMsg} />}
    </Modal>
  );
};

export default RegisterCategoryForm;
