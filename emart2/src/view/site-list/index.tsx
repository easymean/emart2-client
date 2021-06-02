import React from "react";
import { useParams } from "react-router";

import SiteContainer from "@/container/site-container/index";

interface CategoryId {
  categoryId: string;
}

const SiteListPage = () => {
  const { categoryId } = useParams<CategoryId>();
  if (!parseInt(categoryId)) throw new Error("잘못된 url 입니다.");
  return (
    <>
      <SiteContainer categoryId={parseInt(categoryId)} />
    </>
  );
};

export default SiteListPage;
