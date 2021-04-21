import SiteModel from "@/model/siteModel";

export interface CategoryContainerProps {
  categoryId: number;
}

export interface SiteListType {
  [key: number]: SiteModel[];
}
