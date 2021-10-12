import { SiteModel } from "@/model/siteModel";

export interface SiteItemProps {
  site: SiteModel;
  setAlert: (state: boolean) => void;
  setDeleted: (state: number) => void;
}

export interface TagProps {
  dev: boolean;
}
