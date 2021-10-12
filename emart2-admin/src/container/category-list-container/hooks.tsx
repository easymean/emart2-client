import categoryAPI from "@/api/category";
import { CategoryModel } from "@/model/cateoryModel";
import { useCallback, useEffect, useState } from "react";

export const useCategory = () => {
  const [categoryList, setCategoryList] = useState([] as CategoryModel[]);

  const getCategoryList = useCallback(async () => {
    const categoryList = await categoryAPI.getCategoryList();
    setCategoryList(categoryList);
  }, []);

  useEffect(() => {
    getCategoryList();
  }, []);

  return {
    categoryList,
  };
};

export const useModal = () => {
  const [show, setShow] = useState<boolean>(false);
  const [categoryId, setCategoryId] = useState<number>(0);
  const showModal = (id) => {
    setShow(true);
    setCategoryId(id);
  };
  const closeModal = () => {
    setShow(false);
  };

  return { show, categoryId, showModal, closeModal };
};
