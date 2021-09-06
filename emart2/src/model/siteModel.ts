export interface SiteModel {
  id: number;
  name: string;
  dev: boolean;
  url: string;
  //order: number;
  stage: string;
}

export interface SiteListModel {
  websiteList: SiteModel[];
}
