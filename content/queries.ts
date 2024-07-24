import "server-only";
import { HeroQuery, HeroBannerImgQuery, NavLinksQuery } from "../types";
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

export const getNavLinks = async () => {
  const query = `#graphql 
  query NavigationCollection($where: NavigationFilter) {
    navigationCollection(where: $where) {
      items {
        linksCollection {
          items {
            ctaRedirectionValue
            ctaText
          }
        }
        headerNavigation
      }
    }
  }`;

  const data = contentGQLFetcher<NavLinksQuery>({
    query,
    variables: {
      where: {
        headerNavigation: "header_navigation",
      },
    },
  });

  if (!data) {
    throw new Error("Failed to fetch");
  }

  return data;
};
