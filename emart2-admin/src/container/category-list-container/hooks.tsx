import { useState } from "react";
import { CategoryModel } from "@/model/cateoryModel";

export const useModal = () => {
  const [show, setShow] = useState<boolean>(false);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [category, setCategory] = useState<CategoryModel>({} as CategoryModel);
  const showModal = (id, category) => {
    setShow(true);
    setCategoryId(id);
    setCategory(category);
  };
  const closeModal = () => {
    setShow(false);
  };

  return { show, categoryId, showModal, closeModal, category };
};
