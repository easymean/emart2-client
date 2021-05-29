export interface HashtagModel {
  id: number;
  name: string;
  url: string;
  freq: number;
}

export interface HashtagListModel {
  websiteList: HashtagModel[];
}
