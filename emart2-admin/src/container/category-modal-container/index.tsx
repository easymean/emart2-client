import React, { useCallback, useState } from "react";
import { useHistory } from "react-router";

import * as S from "./styles";
import InputBox from "@/component/input-box";
import Modal from "@/component/common/modal";
import Alert from "@/component/common/alert";
import Toast from "@/component/common/toast";
import useForm from "@/component/common/hooks/form";
import { CategoryModel } from "@/model/cateoryModel";
import { updateCategory } from "@/query/category";

interface CategoryModalProps {
  show: boolean;
  closeModal: () => void;
  categoryId: number;
  category: CategoryModel;
}

const CategoryModalContainer = ({
  show,
  closeModal,
  categoryId,
  category,
}: CategoryModalProps) => {
  const [alert, setAlert] = useState(false);
  const [toast, setToast] = useState(false);

  const onValidate = (data: CategoryModel) => {
    for (let [key, val] of Object.entries(data)) {
      if (val === null || val === "") return false;
    }
    return true;
  };

  const {
    values: updated,
    handleChange,
    handleSubmit,
  } = useForm<CategoryModel>(category, onValidate);

  const { mutateAsync, error, status } = updateCategory();

  const onSubmit = (data: CategoryModel, e?) => {
    const category = {
      ...data,
    };

    try {
      mutateAsync({ id: categoryId, category: category });
    } catch (e) {
      setAlert(true);
      return;
    }
    window.location.href = "/category";
  };

  const onError = (errors: Object, e?) => {
    if (errors instanceof Error) {
      setToast(true);
    }
  };

  return (
    <Modal show={show} onClose={closeModal}>
      <Alert
        show={alert}
        redirect={"/category"}
        message={"에러가 발생했습니다."}
      />
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
              defaultValue={updated.name}
              name="name"
              placeholder="광고제휴BOS 웹"
              onChange={handleChange}
            />
            <S.Label> 설명*</S.Label>
            <InputBox
              defaultValue={updated.description}
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

export default CategoryModalContainer;
