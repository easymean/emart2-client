import { CategoryModel } from "@/model/cateoryModel";

export interface CategoryItemProps {
  category: CategoryModel;
  setAlert: (state: boolean) => void;
  setDeleted: (state: number) => void;
}
