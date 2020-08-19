import {Iitem} from './item';

export interface Iresponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Iitem[];
}
