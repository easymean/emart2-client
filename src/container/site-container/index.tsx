import React from "react";
import * as S from "./styles";
import { useSite } from "./hooks";
import { CategoryContainerProps } from "./types";

import SiteItem from "@component/site-item";
import { Col, Grid, Row } from "@/component/grid/styles";
import { CommonTitle, CommonDescription } from "@/component/common/font-styles";

const SiteContainer = ({ categoryId }: CategoryContainerProps) => {
  const { title, description, siteList, stageList, stageTable, makeTable } =
    useSite(categoryId);
  makeTable(stageList, siteList, stageTable);

  return (
    <S.SiteContainer>
      <S.ContentWrapper>
        <Grid>
          <Row>
            <CommonTitle>{title}</CommonTitle>
            <CommonDescription>{description}</CommonDescription>
          </Row>
          {stageList.map((stage, idx) => {
            const siteList = stageTable[stage.id];
            const devSite = siteList.filter((site) => site.dev);
            const prodSite = siteList.filter((site) => !site.dev);
            return (
              <Row height={"15rem"} key={idx}>
                <S.SiteRowContainer>
                  <Col span={2}>
                    <S.StageName>{stage.name}</S.StageName>
                  </Col>
                  <Col span={5}>
                    {devSite.length !== 0 ? (
                      devSite.map((site) => {
                        return <SiteItem key={`site${site.id}`} site={site} />;
                      })
                    ) : (
                      <></>
                    )}
                  </Col>
                  <Col span={5}>
                    {prodSite.length !== 0 ? (
                      prodSite.map((site) => {
                        return <SiteItem key={`site${site.id}`} site={site} />;
                      })
                    ) : (
                      <></>
                    )}
                  </Col>
                </S.SiteRowContainer>
              </Row>
            );
          })}
        </Grid>
      </S.ContentWrapper>
    </S.SiteContainer>
  );
};

export default SiteContainer;
