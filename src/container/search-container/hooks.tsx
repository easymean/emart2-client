import React, { useCallback, useEffect, useState } from "react";
import siteAPI from "@api/website";
import SiteModel from "@model/siteModel";
import HashtagModel from "@model/hashtagModel";

const useDebounce = (state: string, delay: number): string => {
  const [debounceState, setDebounceState] = useState(state);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceState(state);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [state, delay]);
  return debounceState;
};

export const useSearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [siteList, setSiteList] = useState([] as SiteModel[]);

  const onKeyup = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  }, []);

  const debounceKeyword = useDebounce(keyword, 2000);

  const searchSiteList = useCallback(
    (keyword: string) => async () => {
      if (!keyword) return;

      const siteList = await siteAPI.searchSitebyKeyword(keyword);
      setSiteList(siteList);
    },
    [debounceKeyword]
  );

  useEffect(() => {
    if (!debounceKeyword) return;
    searchSiteList(debounceKeyword)();
  }, [debounceKeyword]);

  return {
    siteList,
    onKeyup,
  };
};

export const useHashtag = () => {
  const [hashtags, setHashtags] = useState([] as HashtagModel[]);

  const getSiteListbyFreq = useCallback(async () => {
    const siteList = await siteAPI.getSiteListbyFreq();
    setHashtags(siteList);
  }, []);

  useEffect(() => {
    getSiteListbyFreq();
  }, []);

  return { hashtags };
};
