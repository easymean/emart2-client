export interface CategoryModel {
  id?: number;
  name: string;
  order: number;
  description: string;
}

export interface CategoryListModel {
  categoryList: CategoryModel[];
}
