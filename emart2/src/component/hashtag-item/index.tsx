import React from "react";
import * as S from "./styles";

import { HashtagModel } from "@/model/hashtagModel";

interface HashtagItemProps {
  hashtag: HashtagModel;
}

const HashtagItem = ({ hashtag }: HashtagItemProps) => {
  const handleClick = () => {
    window.open(hashtag.url, "_blank");
    return;
  };
  return <S.Hashtag onClick={handleClick}>#{hashtag.name}</S.Hashtag>;
};

export default HashtagItem;
