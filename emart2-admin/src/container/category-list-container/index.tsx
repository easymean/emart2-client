import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

import * as S from "./styles";
import { useModal } from "./hooks";

import categoryAPI from "@/api/category";
import Alert from "@/component/common/alert";
import { useCategoryList } from "@/query/category";
import CategoryItem from "@/component/category-item";
import CategoryModalContainer from "@/container/category-modal-container";

const CategoryListContainer = () => {
  const { data: categoryList } = useCategoryList();
  const { show, showModal, closeModal, categoryId, category } = useModal();

  const [alert, setAlert] = useState(false);
  const [deleted, setDeleted] = useState(0);

  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(categoryAPI.deleteCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("categories");
    },
  });

  const handleClick = () => {
    mutate(deleted);
    setAlert(false);
    closeModal();
  };
  return (
    <>
      <Alert
        show={alert}
        message="삭제하시겠습니까?"
        handleClick={handleClick}
      />
      <S.CategoryListContainer>
        <S.CategoryListWrapper>
          {categoryList &&
            categoryList.map((category, idx) => {
              return (
                <S.CategoryItem
                  onClick={() => showModal(category.id, category)}
                  key={category.id}
                >
                  <CategoryItem
                    category={category}
                    setAlert={setAlert}
                    setDeleted={setDeleted}
                    key={idx}
                  />
                </S.CategoryItem>
              );
            })}
        </S.CategoryListWrapper>
      </S.CategoryListContainer>
      {show && (
        <CategoryModalContainer
          categoryId={categoryId}
          show={show}
          closeModal={closeModal}
          category={category}
        />
      )}
    </>
  );
};

export default CategoryListContainer;
