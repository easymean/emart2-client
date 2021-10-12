export interface SiteModel {
  id?: number;
  name: string;
  dev: boolean;
  url: string;
  order: number;
  description: string;
  categoryId?: number;
  categoryName?: string;
  stage: string;
}

export interface SiteListModel {
  websiteList: SiteModel[];
}
