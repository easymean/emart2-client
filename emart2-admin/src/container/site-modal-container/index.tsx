import React from "react";
import * as S from "./styles";
import { useUpdate, useSelectBox, useSite } from "./hooks";

import InputBox from "@/component/input-box";
import Modal from "@/component/common/modal";
import Alert from "@/component/common/alert";
import useInput from "@/component/common/hooks/input";

interface SiteModalProps {
  show: boolean;
  closeModal: () => void;
  siteId: number;
}

const SiteModalContainer = ({ show, closeModal, siteId }: SiteModalProps) => {
  const { data, loading, error } = useSelectBox();
  const { site } = useSite(siteId);
  const { value: id, onChangeHandler } = useInput(siteId);
  const { value: name, onChangeHandler: onChangeName } = useInput(site.name);
  const { value: url, onChangeHandler: onChangeUrl } = useInput(site.url);
  const { value: dev, onChangeHandler: onChangeDev } = useInput(site.dev);
  const { value: categoryId, onChangeHandler: onChangeCategory } = useInput(
    site.categoryId
  );
  const { value: stage, onChangeHandler: onChangeStage } = useInput(site.stage);
  const { value: description, onChangeHandler: onChangeDescription } = useInput(
    site.description
  );

  const { onClickUpdate, isAlert, alertMsg } = useUpdate(
    id,
    name,
    description,
    url,
    categoryId,
    dev,
    stage
  );
  return (
    <Modal show={show} onClose={closeModal}>
      <S.SiteContainer>
        <S.SiteInfo>
          <S.Table>
            <S.Label>이름*</S.Label>
            <InputBox
              value={name}
              placeholder="광고제휴BOS 웹"
              setData={onChangeName}
            />
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
            <InputBox value={description} setData={onChangeDescription} />
          </S.Table>
        </S.SiteInfo>
        <S.ButtonWrapper>
          <S.SaveButton onClick={onClickUpdate}>수정</S.SaveButton>
        </S.ButtonWrapper>
      </S.SiteContainer>
      {isAlert && <Alert redirect={"/site"} message={alertMsg} />}
    </Modal>
  );
};

export default SiteModalContainer;
