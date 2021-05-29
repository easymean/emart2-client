import React from "react";
import * as S from "./styles";

import { SiteModel } from "@/model/siteModel";

interface HashtagItemProps {
  hashtag: SiteModel;
}

const HashtagItem = ({ hashtag }: HashtagItemProps) => {
  const handleClick = () => {
    window.open(hashtag.url);
    return;
  };
  return <S.Hashtag onClick={handleClick}>#{hashtag.name}</S.Hashtag>;
};

export default HashtagItem;
