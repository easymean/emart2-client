export default interface SiteModel {
  id: number;
  name: string;
  categoryId: number;
  stage: string;
  dev: boolean;
  url: string;
  order: number;
}
