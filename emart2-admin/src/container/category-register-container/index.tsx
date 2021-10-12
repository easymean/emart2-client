import React, { useState } from "react";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";

import InputBox from "@/component/input-box";
import Modal from "@/component/common/modal";
import Alert from "@/component/common/alert";
import Toast from "@/component/common/toast";
import { CategoryModel } from "@/model/cateoryModel";
import useForm from "@/component/common/hooks/form";
import categoryAPI from "@/api/category";

const CategoryRegisterContainer = ({ show, closeModal }) => {
  const queryClient = useQueryClient();
  const history = useHistory();
  const [toast, setToast] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "" });

  const { mutate, isLoading, error } = useMutation(categoryAPI.createCategory, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("categories");
      closeModal();
    },
    onError: (error) => {
      setAlert({
        ...alert,
        show: true,
        message: "에러 발생",
      });
    },
  });

  const initValue = {
    name: "",
    description: "",
  };

  const onValidate = (data: CategoryModel) => {
    for (let val of Object.values(data)) {
      if (val === null || val === "") return false;
    }
    return true;
  };

  const onSubmit = (data: CategoryModel, e?) => {
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
    values: category,
    handleChange,
    handleSubmit,
  } = useForm<CategoryModel>(initValue, onValidate);

  return (
    <Modal show={show} onClose={closeModal}>
      <Toast
        message={"필수 요소를 채워주세요"}
        show={toast}
        setShow={setToast}
      />
      <Alert show={alert.show} redirect={"/category"} message={alert.message} />
      <S.RegisterCategoryContainer>
        <S.SystemInfo onSubmit={handleSubmit(onSubmit, onError)}>
          <S.Title>시스템 등록하기</S.Title>
          <S.Table>
            <S.Label>이름*</S.Label>
            <S.InputBoxWrapper>
              <InputBox
                value={category.name}
                name="name"
                placeholder="광고제휴"
                onChange={handleChange}
              />
            </S.InputBoxWrapper>
            <S.Label> 설명*</S.Label>
            <S.InputBoxWrapper>
              <InputBox
                value={category.description}
                name="description"
                onChange={handleChange}
              />
            </S.InputBoxWrapper>
          </S.Table>
          <S.ButtonWrapper>
            <S.SaveButton type="submit">저장</S.SaveButton>
          </S.ButtonWrapper>
        </S.SystemInfo>
      </S.RegisterCategoryContainer>
    </Modal>
  );
};

export default CategoryRegisterContainer;
