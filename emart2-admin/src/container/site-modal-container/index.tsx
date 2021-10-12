import React, { useCallback, useState } from "react";

import * as S from "./styles";
import InputBox from "@/component/input-box";
import Modal from "@/component/common/modal";
import Alert from "@/component/common/alert";
import { useCategoryList } from "@/query/category";
import { updateSite, useSite } from "@/query/site";
import useForm from "@/component/common/hooks/form";
import { SiteModel } from "@/model/siteModel";
import Toast from "@/component/common/toast";

interface SiteModalProps {
  show: boolean;
  closeModal: () => void;
  siteId: number;
}

const SiteModalContainer = ({ show, closeModal, siteId }: SiteModalProps) => {
  const [toast, setToast] = useState(false);

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

  const [updated, setUpdated] = useState({
    name: "",
    url: "",
    stage: "",
    dev: null,
    description: "",
    categoryId: "",
  });

  const handleChange = (e) => {
    setUpdated({ ...updated, [e.target.name]: e.target.value });
  };

  const onValidate = (data: SiteModel) => {
    for (let [key, val] of Object.entries(data)) {
      if (key === "categoryId") continue;
      if (val === null || val === "") return false;
    }
    return true;
  };

  const { handleSubmit } = useForm<SiteModel>(site, onValidate);

  const { mutateAsync, error, status } = updateSite();

  const onSubmit = (data: SiteModel, e?) => {
    const site = {
      ...data,
    };

    try {
      mutateAsync({ id: siteId, req: site });
    } catch (e) {
      throw new Error();
    }
    window.location.href = "/site";
  };

  const onError = (errors: Object, e?) => {
    if (errors instanceof Error) {
      setToast(true);
    }
  };

  const renderByStatus = useCallback(() => {
    switch (siteStatus) {
      case "loading":
        return <Alert show={true} message={"로딩중"} />;
      case "error":
        if (siteError instanceof Error) {
          return (
            <Alert show={true} redirect={"/site"} message={siteError.message} />
          );
        }
        break;
      default:
        return (
          <S.SiteContainer>
            <S.SiteInfo onSubmit={handleSubmit(onSubmit, onError)}>
              <S.Table>
                <S.Label>이름*</S.Label>
                <InputBox
                  defaultValue={site?.name}
                  name="name"
                  placeholder="광고제휴BOS 웹"
                  onChange={handleChange}
                />
                <S.Label>url*</S.Label>
                <S.InputBoxWrapper>
                  <InputBox
                    defaultValue={site?.url}
                    name="url"
                    placeholder="https://www.naver.com"
                    onChange={handleChange}
                  />
                </S.InputBoxWrapper>
                <S.Label>개발/운영*</S.Label>
                <S.Select
                  defaultValue={`${site?.dev}`}
                  onChange={handleChange}
                  name="dev"
                >
                  <option value="true">개발</option>
                  <option value="false">운영</option>
                </S.Select>
                <S.Label>관련 시스템*</S.Label>
                <S.Select
                  defaultValue={site?.categoryId}
                  onChange={handleChange}
                  name="categoryId"
                >
                  <option>{site?.categoryName}</option>
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
                  defaultValue={site?.stage}
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
                  defaultValue={site?.description}
                  onChange={handleChange}
                  name="description"
                />
              </S.Table>
              <S.ButtonWrapper>
                <S.SaveButton type="submit">수정</S.SaveButton>
              </S.ButtonWrapper>
            </S.SiteInfo>
          </S.SiteContainer>
        );
    }
  }, [siteStatus, siteId]);

  return (
    <Modal show={show} onClose={closeModal}>
      <Toast
        message={"필수 요소를 채워주세요"}
        show={toast}
        setShow={setToast}
      />
      {renderByStatus()}
    </Modal>
  );
};

export default SiteModalContainer;
