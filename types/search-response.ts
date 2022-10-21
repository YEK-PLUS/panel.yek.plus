export type SearchResponse = {
  SearchResult: {
    Items: ({
      ASIN: string;
      DetailPageURL: string;
      Images: {
        Primary: {
          Medium: {
            Height: number;
            URL: string;
            Width: number;
          };
        };
      };
      ItemInfo: {
        Title: {
          DisplayValue: string;
          Label: string;
          Locale: string;
        };
      };
      Offers: {
        Listings: {
          Condition: {
            DisplayValue: string;
            Label: string;
            Locale: string;
            Value: string;
          };
          Id: string;
          Price: {
            Amount: number;
            Currency: string;
            DisplayAmount: string;
            Savings: {
              Amount: number;
              Currency: string;
              DisplayAmount: string;
              Percentage: number;
            };
          };
        }[];
      };
    } & Extends)[];
    SearchURL: string;
    TotalResultCount: number;
  };
};

type Extends = {
  favorite: boolean;
};
