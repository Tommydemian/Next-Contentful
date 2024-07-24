export type HeroQuery = {
  heroCollection: {
    items: {
      title: string;
      preTitle: string;
      subTitle: string;
      callToActionCollection: {
        items: {
          ctaText: string;
          ctaRedirectionValue: string;
        }[];
      };
    }[];
  };
};

export type HeroBannerImgQuery = {
  assetCollection: {
    items: {
      height: number;
      url: string;
      width: number;
      title: string;
    }[];
  };
};

export type navLink = {
  text: string;
  href: string;
};