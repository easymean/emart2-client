import React from "react";
import * as S from "./styles";
import { useForm } from "./hooks";

import InputBox from "@/component/input-box";
import Modal from "@/component/common/modal";
import Alert from "@/component/common/alert";
import useInput from "@/component/common/hooks/input";
import Toast from "@/component/common/toast";

const CategoryRegisterContainer = ({ show, closeModal }) => {
  const { value: name, onChangeHandler: onChangeName } = useInput("");
  const { value: description, onChangeHandler: onChangeDescription } =
    useInput("");

  const { onSubmitHandler, isAlert, alertMsg, isPopup, popupMsg, closePopup } =
    useForm(name, description);
  return (
    <Modal show={show} onClose={closeModal}>
      <S.RegisterCategoryContainer>
        <S.SystemInfo onSubmit={onSubmitHandler}>
          <S.Title>시스템 등록하기</S.Title>
          <S.Table>
            <S.Label>이름*</S.Label>
            <S.InputBoxWrapper>
              <InputBox
                value={name}
                placeholder="광고제휴"
                onChange={onChangeName}
              />
            </S.InputBoxWrapper>
            <S.Label> 설명*</S.Label>
            <S.InputBoxWrapper>
              <InputBox value={description} onChange={onChangeDescription} />
            </S.InputBoxWrapper>
          </S.Table>
          <S.ButtonWrapper>
            <S.SaveButton type="submit">저장</S.SaveButton>
          </S.ButtonWrapper>
        </S.SystemInfo>
      </S.RegisterCategoryContainer>
      {isAlert && <Alert redirect={"/system"} message={alertMsg} />}
      {isPopup && <Toast message={popupMsg} onClose={closePopup} />}
    </Modal>
  );
};

export default CategoryRegisterContainer;
