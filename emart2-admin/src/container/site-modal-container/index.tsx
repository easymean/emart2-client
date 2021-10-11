import React, { useCallback } from "react";
import * as S from "./styles";

import InputBox from "@/component/input-box";
import Modal from "@/component/common/modal";
import Alert from "@/component/common/alert";
import { useCategoryList } from "@/query/category";
import { useSite } from "@/query/site";

interface SiteModalProps {
  show: boolean;
  closeModal: () => void;
  siteId: number;
}

const SiteModalContainer = ({ show, closeModal, siteId }: SiteModalProps) => {
  const {
    data: categoryList,
    error: categoryListError,
    isFetching: categoryListIsFetching,
  } = useCategoryList();

  const {
    data: site,
    error: siteError,
    status: siteStatus,
    isFetching,
  } = useSite(siteId);
  const onChangeHandler = (e) => {};
  const renderByStatus = useCallback(() => {
    switch (siteStatus) {
      case "loading":
        return <>로딩중..</>;
      case "error":
        if (siteError instanceof Error) {
          return <Alert redirect={"/site"} message={siteError.message} />;
        }
        break;
      default:
        return (
          <S.SiteContainer>
            <S.SiteInfo>
              <S.Table>
                <S.Label>이름*</S.Label>
                <InputBox
                  value={site?.name}
                  placeholder="광고제휴BOS 웹"
                  onChange={onChangeHandler}
                />
                <S.Label>url*</S.Label>
                <S.InputBoxWrapper>
                  <InputBox
                    value={site?.url}
                    placeholder="https://www.naver.com"
                    onChange={onChangeHandler}
                  />
                </S.InputBoxWrapper>
                <S.Label>개발/운영*</S.Label>
                <S.Select value={`${site?.dev}`} onChange={onChangeHandler}>
                  <option value="true">개발</option>
                  <option value="false">운영</option>
                </S.Select>
                <S.Label>관련 시스템*</S.Label>
                <S.Select value={site?.categoryId} onChange={onChangeHandler}>
                  <option value="" hidden={true}>
                    시스템을 골라주세요
                  </option>
                  {categoryList &&
                    categoryList.map((system, idx) => {
                      return (
                        <option value={system.id} key={idx}>
                          {system.name}
                        </option>
                      );
                    })}
                </S.Select>
                <S.Label>태그*</S.Label>
                <S.Select value={site?.stage} onChange={onChangeHandler}>
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
                <InputBox
                  value={site?.description}
                  onChange={onChangeHandler}
                />
              </S.Table>
            </S.SiteInfo>
            <S.ButtonWrapper>
              <S.SaveButton>수정</S.SaveButton>
            </S.ButtonWrapper>
          </S.SiteContainer>
        );
    }
  }, [siteStatus, isFetching]);

  return (
    <Modal show={show} onClose={closeModal}>
      {renderByStatus()}
    </Modal>
  );
};

export default SiteModalContainer;
