import React from "react";
import * as S from "./styles";
import { useModal } from "./hooks";

import { useCategoryList } from "@/query/category";
import CategoryItem from "@/component/category-item";
import CategoryModalContainer from "../category-modal-container";

const CategoryListContainer = () => {
  const { data: categoryList } = useCategoryList();
  const { show, showModal, closeModal, siteId: categoryId } = useModal();

  return (
    <>
      <S.CategoryListContainer>
        <S.CategoryListWrapper>
          {categoryList &&
            categoryList.map((category, idx) => {
              return (
                <S.CategoryItem
                  onClick={() => showModal(category.id)}
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
        />
      )}
    </>
  );
};

export default CategoryListContainer;
