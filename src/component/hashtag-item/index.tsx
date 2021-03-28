import React from "react";
import * as S from "./styles";

import HashtagModel from "@module/model/hashtagModel";

interface HashtagItemProps {
  hashtag: HashtagModel;
}

const HashtagItem = ({ hashtag }: HashtagItemProps) => {
  return (
    <S.Hashtag>
      <S.HashTagTitle>
        #{hashtag.category} {hashtag.dev}
      </S.HashTagTitle>
    </S.Hashtag>
  );
};

export default HashtagItem;
