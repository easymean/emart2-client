export interface HashtagModel {
  id: number;
  name: string;
  url: string;
  freq: number;
  dev: boolean;
}

export interface HashtagListModel {
  hashtagList: HashtagModel[];
}
