import React, { useCallback, useState } from "react";
import { useHistory } from "react-router";

import * as S from "./styles";
import InputBox from "@/component/input-box";
import Modal from "@/component/common/modal";
import Alert from "@/component/common/alert";
import Toast from "@/component/common/toast";
import useForm from "@/component/common/hooks/form";
import { CategoryModel } from "@/model/cateoryModel";
import { updateCategory, useCategory } from "@/query/category";

interface CategoryModalProps {
  show: boolean;
  closeModal: () => void;
  categoryId: number;
}

const CategoryModalContainer = ({
  show,
  closeModal,
  categoryId,
}: CategoryModalProps) => {
  const [toast, setToast] = useState(false);

  const {
    data: category,
    error: categoryError,
    status: categoryStatus,
    isFetching,
  } = useCategory(categoryId);

  const [updated, setUpdated] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setUpdated({ ...updated, [e.target.name]: e.target.value });
  };

  const onValidate = (data: CategoryModel) => {
    for (let [key, val] of Object.entries(data)) {
      if (val === null || val === "") return false;
    }
    return true;
  };

  const { handleSubmit } = useForm<CategoryModel>(category, onValidate);

  const { mutateAsync, error, status } = updateCategory();

  const onSubmit = (data: CategoryModel, e?) => {
    const category = {
      ...data,
    };

    try {
      mutateAsync({ id: categoryId, category: category });
    } catch (e) {
      throw new Error();
    }
    window.location.href = "/category";
  };

  const onError = (errors: Object, e?) => {
    if (errors instanceof Error) {
      setToast(true);
    }
  };

  const renderByStatus = useCallback(() => {
    switch (categoryStatus) {
      case "loading":
        return <Alert show={true} message={"로딩중"} />;
      case "error":
        if (categoryError instanceof Error) {
          return (
            <Alert
              show={true}
              redirect={"/category"}
              message={categoryError.message}
            />
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
                  defaultValue={category?.name}
                  name="name"
                  placeholder="광고제휴BOS 웹"
                  onChange={handleChange}
                />
                <S.Label> 설명*</S.Label>
                <InputBox
                  defaultValue={category?.description}
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
  }, [categoryStatus, categoryId]);

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

export default CategoryModalContainer;
