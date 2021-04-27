import React from "react";
import * as S from "./styles";

import HashtagModel from "@/model/hashtagModel";

interface HashtagItemProps {
  hashtag: HashtagModel;
}

const HashtagItem = ({ hashtag }: HashtagItemProps) => {
  const handleClick = () => {
    window.open(hashtag.url);
    return;
  };
  return (
    <S.Hashtag onClick={handleClick}>
      #{hashtag.name}
      <S.HashTagDev>{hashtag.dev ? "개발" : "운영"}</S.HashTagDev>
    </S.Hashtag>
  );
};

export default HashtagItem;
