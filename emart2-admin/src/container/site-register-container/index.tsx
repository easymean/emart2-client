import React from "react";
import * as S from "./styles";
import { useForm, useSelectBox } from "./hooks";

import InputBox from "@/component/input-box";
import Modal from "@/component/common/modal";
import Alert from "@/component/common/alert";
import Popup from "@/component/common/pop-up";
import useInput from "@/component/common/hooks/input";

interface SiteRegisterProps {
  show: boolean;
  closeModal: () => void;
}

const SiteRegisterContainer = ({ show, closeModal }: SiteRegisterProps) => {
  const { data, loading, error } = useSelectBox();

  const { value: name, onChangeHandler: onChangeName } = useInput("");
  const { value: url, onChangeHandler: onChangeUrl } = useInput("");
  const { value: dev, onChangeHandler: onChangeDev } = useInput(false);
  const { value: categoryId, onChangeHandler: onChangeCategory } = useInput(0);
  const { value: stage, onChangeHandler: onChangeStage } = useInput("");
  const { value: description, onChangeHandler: onChangeDescription } =
    useInput("");

  const { onSubmitHandler, isAlert, alertMsg, isPopup, popupMsg, closePopup } =
    useForm(name, description, url, categoryId, dev, stage);
  return (
    <Modal show={show} onClose={closeModal}>
      <S.SiteContainer>
        <S.SiteInfo onSubmit={onSubmitHandler}>
          <S.Table>
            <S.Label>이름*</S.Label>
            <InputBox
              value={name}
              placeholder="광고제휴BOS 웹"
              setData={onChangeName}
            ></InputBox>
            <S.Label>url*</S.Label>
            <S.InputBoxWrapper>
              <InputBox
                value={url}
                placeholder="https://www.naver.com"
                setData={onChangeUrl}
              />
            </S.InputBoxWrapper>
            <S.Label>개발/운영*</S.Label>
            <S.Select value={dev} onChange={onChangeDev}>
              <option value="true">개발</option>
              <option value="false">운영</option>
            </S.Select>
            <S.Label>관련 시스템*</S.Label>
            <S.Select value={categoryId} onChange={onChangeCategory}>
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
            <S.Select value={stage} onChange={onChangeStage}>
              <option value="" hidden={true}>
                태그를 골라주세요
              </option>
              <option value="WEB">웹</option>
              <option value="CONFIG">형상관리</option>
              <option value="DEPLOY">배포</option>
              <option value="MONITOR">모니터링</option>
              <option value="ADMIN">관리(제우스)</option>
            </S.Select>
            <S.Label> 설명*</S.Label>
            <InputBox value={description} setData={onChangeDescription} />
          </S.Table>
          <S.ButtonWrapper>
            <S.SaveButton type="submit">저장</S.SaveButton>
          </S.ButtonWrapper>
        </S.SiteInfo>
      </S.SiteContainer>
      {isAlert && <Alert redirect={"/site"} message={alertMsg} />}
      {isPopup && <Popup message={popupMsg} onClose={closePopup} />}
    </Modal>
  );
};

export default SiteRegisterContainer;
