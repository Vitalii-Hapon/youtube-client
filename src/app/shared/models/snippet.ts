import {Ithumbnails} from './thumbnail';
import {Istatistic} from './statistic';

export interface Isnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Ithumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}
