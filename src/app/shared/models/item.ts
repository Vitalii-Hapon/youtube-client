import {Isnippet} from './snippet';
import {Istatistic} from './statistic';

export interface Iitem {
  kind: string;
  etag: string;
  id: string;
  snippet: Isnippet;
  statistics: Istatistic;
}



