import React, { useState } from "react";
import * as S from "./styles";
import { useHistory } from "react-router";

import InputBox from "@/component/input-box";
import Modal from "@/component/common/modal";
import Alert from "@/component/common/alert";
import { SiteModel } from "@/model/siteModel";

import { makeSite } from "@/query/site";
import { useCategoryList } from "@/query/category";
import { useMutation, useQueryClient } from "react-query";
import siteAPI from "@/api/website";
import useForm from "@/component/common/hooks/form";
import Toast from "@/component/common/toast";

interface SiteRegisterProps {
  show: boolean;
  closeModal: () => void;
}

const SiteRegisterContainer = ({ show, closeModal }: SiteRegisterProps) => {
  const queryClient = useQueryClient();
  const history = useHistory();

  const initValue = {
    name: "",
    url: "",
    dev: "",
    categoryId: "",
    stage: "",
    description: "",
  };

  const [toast, setToast] = useState(false);

  const onValidate = (data: SiteModel) => {
    for (let val of Object.values(data)) {
      if (val === null || val === "") return false;
    }
    return true;
  };

  const {
    values: site,
    handleChange,
    handleSubmit,
  } = useForm<SiteModel>(initValue, onValidate);

  const { mutate, isLoading, error } = useMutation(siteAPI.createWebsite, {
    onSuccess: (data) => {
      history.goBack();
    },
    onError: () => {
      alert("there was an error");
    },
    onSettled: () => {
      queryClient.invalidateQueries("site");
    },
  });

  const onSubmit = (data: SiteModel, e?) => {
    const site = {
      ...data,
    };
    mutate(site);
  };

  const onError = (errors: Object, e?) => {
    if (errors instanceof Error) {
      setToast(true);
    }
  };

  const {
    data: categoryList,
    error: categoryListError,
    isFetching: categoryListIsFetching,
  } = useCategoryList();

  return (
    <Modal show={show} onClose={closeModal}>
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
              name="name"
              value={site.name}
              placeholder="광고제휴BOS 웹"
              onChange={handleChange}
            ></InputBox>
            <S.Label>url*</S.Label>
            <S.InputBoxWrapper>
              <InputBox
                name="url"
                value={site.url}
                placeholder="https://www.naver.com"
                onChange={handleChange}
              />
            </S.InputBoxWrapper>
            <S.Label>개발/운영*</S.Label>
            <S.Select name="dev" value={`${site.dev}`} onChange={handleChange}>
              <option value="true">개발</option>
              <option value="false">운영</option>
            </S.Select>
            <S.Label>관련 시스템*</S.Label>
            <S.Select
              name="categoryId"
              value={site.categoryId}
              onChange={handleChange}
            >
              <option value="" hidden={true}>
                시스템을 골라주세요
              </option>
              {categoryList &&
                categoryList.map((category, idx) => {
                  return (
                    <option value={category.id} key={idx}>
                      {category.name}
                    </option>
                  );
                })}
            </S.Select>
            <S.Label>태그*</S.Label>
            <S.Select name="stage" value={site.stage} onChange={handleChange}>
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
            <InputBox
              name="description"
              value={site.description}
              onChange={handleChange}
            />
          </S.Table>
          <S.ButtonWrapper>
            <S.SaveButton type="submit">저장</S.SaveButton>
          </S.ButtonWrapper>
        </S.SiteInfo>
      </S.SiteContainer>
      {error && error instanceof Error && (
        <Alert redirect={"/site"} message={error.message} />
      )}
    </Modal>
  );
};

export default SiteRegisterContainer;
