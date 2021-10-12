import React from "react";
import * as S from "./styles";
import { useCategory, useModal } from "./hooks";

import CategoryItem from "@/component/category-item";
import CategoryModalContainer from "@/container/category-modal-container";

const CategoryListContainer = () => {
  const { categoryList } = useCategory();
  const { show, showModal, closeModal, categoryId, category } = useModal();

  return (
    <>
      <S.CategoryListContainer>
        <S.CategoryListWrapper>
          {categoryList &&
            categoryList.map((category, idx) => {
              return (
                <S.CategoryItem
                  onClick={() => showModal(category.id, category)}
                  key={category.id}
                >
                  <CategoryItem category={category} key={idx} />
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
