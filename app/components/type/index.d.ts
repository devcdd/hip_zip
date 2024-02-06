export interface ArtistType {
  id: number;
  name: string;
  image: string;
  artistType?: string;
}

export interface ArtistDetailType {
  name: string;
  image: string;
  artistType: string;
  group: {
    id: number;
    name: string;
    image: string;
  } | null;
  groupMembers: {
    id: number;
    name: string;
    image: string;
  }[];
  hashtag: string[];
}

export interface AlbumType {
  id: number;
  name: string;
  image: string;
}

export interface AlbumDetailType {
  id: number;
  name: string;
  image: string;
  date: Date;
  musicVideo: string;
  artistResponse: ArtistType;
}
