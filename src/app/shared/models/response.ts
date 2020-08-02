import {Iitem} from './item';

export interface Response {
  'kind': string;
  'etag': string;
  'pageInfo': {
    'totalResults': number;
    'resultsPerPage': number;
  };
  'items': Iitem[];
}
