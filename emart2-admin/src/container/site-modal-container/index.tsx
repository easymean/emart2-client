import React, { useState } from "react";

import * as S from "./styles";
import InputBox from "@/component/input-box";
import Modal from "@/component/common/modal";
import Alert from "@/component/common/alert";
import { useCategoryList } from "@/query/category";
import useForm from "@/component/common/hooks/form";
import { SiteModel } from "@/model/siteModel";
import Toast from "@/component/common/toast";
import { useMutation, useQueryClient } from "react-query";
import siteAPI from "@/api/website";

interface SiteModalProps {
  show: boolean;
  closeModal: () => void;
  siteId: number;
  site: SiteModel;
}

const SiteModalContainer = ({
  show,
  closeModal,
  siteId,
  site,
}: SiteModalProps) => {
  const [toast, setToast] = useState(false);
  const [alert, setAlert] = useState(false);

  const {
    data: categoryList,
    error: categoryListError,
    isFetching: categoryListIsFetching,
  } = useCategoryList();

  const onValidate = (data: SiteModel) => {
    for (let [key, val] of Object.entries(data)) {
      if (key === "categoryId" || key == "category_name") continue;
      if (val === null || val === "") return false;
    }
    return true;
  };

  const {
    values: updated,
    handleChange,
    handleSubmit,
  } = useForm<SiteModel>(site, onValidate);

  const queryClient = useQueryClient();
  const { mutate, status, error } = useMutation(siteAPI.updateSite, {
    onSuccess: () => {
      queryClient.invalidateQueries("sites");
      closeModal();
    },
    onError: (error) => {
      setAlert(true);
    },
  });

  const onSubmit = (data: SiteModel, e?) => {
    const site = {
      ...data,
    };

    mutate({ id: siteId, req: site });
  };

  const onError = (errors: Object, e?) => {
    if (errors instanceof Error) {
      setToast(true);
    }
  };

  return (
    <Modal show={show} onClose={closeModal}>
      <Alert show={alert} redirect={"/site"} message={"에러가 발생했습니다."} />
      <Toast
        message={"필수 요소를 채워주세요"}
        show={toast}
        setShow={setToast}
      />
      <S.SiteContainer>
        <S.SiteInfo onSubmit={handleSubmit(onSubmit, onError)}>
          <S.Table>
            <S.Label>이름*</S.Label>
            <InputBox
              value={updated.name}
              name="name"
              placeholder="광고제휴BOS 웹"
              onChange={handleChange}
            />
            <S.Label>url*</S.Label>
            <S.InputBoxWrapper>
              <InputBox
                value={updated.url}
                name="url"
                placeholder="https://www.naver.com"
                onChange={handleChange}
              />
            </S.InputBoxWrapper>
            <S.Label>개발/운영*</S.Label>
            <S.Select
              value={`${updated.dev}`}
              onChange={handleChange}
              name="dev"
            >
              <option value="true">개발</option>
              <option value="false">운영</option>
            </S.Select>
            <S.Label>관련 시스템*</S.Label>
            <S.Select
              value={updated.categoryId}
              onChange={handleChange}
              name="categoryId"
            >
              <option value="" hidden={true}>
                {updated.categoryName}
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
            <S.Select
              value={updated.stage}
              onChange={handleChange}
              name="stage"
            >
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
              value={updated.description}
              onChange={handleChange}
              name="description"
            />
          </S.Table>
          <S.ButtonWrapper>
            <S.SaveButton type="submit">수정</S.SaveButton>
          </S.ButtonWrapper>
        </S.SiteInfo>
      </S.SiteContainer>
    </Modal>
  );
};

export default SiteModalContainer;
