import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

import * as S from "./styles";
import { useModal } from "./hooks";

import categoryAPI from "@/api/category";
import { useCategoryList } from "@/query/category";
import CategoryItem from "@/component/category-item";
import CategoryModalContainer from "@/container/category-modal-container";
import Confirm from "@/component/common/confirm";

const CategoryListContainer = () => {
  const { data: categoryList } = useCategoryList();
  const { show, showModal, closeModal, categoryId, category } = useModal();

  const [confirm, setConfirm] = useState(false);
  const [deleted, setDeleted] = useState(0);

  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(categoryAPI.deleteCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("categories");
    },
  });

  const handleClick = () => {
    mutate(deleted);
    setConfirm(false);
    closeModal();
  };

  const handleCancel = () => {
    setConfirm(false);
    closeModal();
  };
  return (
    <>
      <Confirm
        show={confirm}
        message="삭제하시겠습니까?"
        handleClick={handleClick}
        handleCancel={handleCancel}
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
                    setAlert={setConfirm}
                    setDeleted={setDeleted}
                    key={idx}
                  />
                </S.CategoryItem>
              );
            })}
        </S.CategoryListWrapper>
      </S.CategoryListContainer>
      {show && !confirm && (
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
