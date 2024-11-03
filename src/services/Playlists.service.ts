import axios from "axios";

type PlaylistDto = {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: PlaylistDtoItem[];
};

type PlaylistDtoItem = {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: ThumbnailInfo;
      medium: ThumbnailInfo;
      high: ThumbnailInfo;
      standard: ThumbnailInfo;
      maxres: ThumbnailInfo;
    };
    channelTitle: string;
    localized: {
      title: string;
      description: string;
    };
  };
  contentDetails: {
    itemCount: number;
  };
};

export type ThumbnailInfo = {
  url: string;
  width: number;
  height: number;
};

export type PlaylistResult = {
  id: string;
  title: string;
  description: string;
  channelId: string;
  channelTitle: string;
  mediumThumbnail: ThumbnailInfo;
  contentDetails: {
    itemCount: number;
  };
};

const youtubePlaylistUrl =
  "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&maxResults=25&mine=true";

export const getPlaylists = async (token: string) => {
  return axios
    .get<PlaylistDto>(youtubePlaylistUrl, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => formatPlaylistResult(response.data))
    .catch((reason) => {
      throw new Error(reason);
    });
};

const formatPlaylistResult = (dto: PlaylistDto): PlaylistResult[] => {
  return dto.items.map((item) => {
    return {
      id: item.id,
      title: item.snippet.title,
      description: item.snippet.description,
      channelId: item.snippet.channelId,
      channelTitle: item.snippet.channelTitle,
      mediumThumbnail: item.snippet.thumbnails.medium,
      contentDetails: {
        itemCount: item.contentDetails.itemCount,
      },
    };
  });
};
