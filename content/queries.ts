import { HeroQuery, HeroBannerImgQuery } from "../types";
import { contentGQLFetcher } from "./fetch";

export const getHeroContent = async () => {
  const query = `#graphql
    query HeroCollection {
  heroCollection {
    items {
      title
      preTitle
      subTitle
      callToActionCollection {
        items {
          ctaText
          ctaRedirectionValue
        }
      }
    }
  }
}
`;

  const data = await contentGQLFetcher<HeroQuery>({ query });

  if (!data) {
    throw new Error("Failed to fetch");
  }

  return data;
};

export const getHeroImg = async () => {
  const query = `#graphql
  query Query($where: AssetFilter) {
  assetCollection(where: $where) {
    items {
      height
      url
      width
      title
    }
  }
}
  `;

  const data = await contentGQLFetcher<HeroBannerImgQuery>({
    query,
    variables: {
      where: {
        description_contains: "hero",
      },
    },
  });

  if (!data) {
    throw new Error("Failed to fetch");
  }

  return data;
};
