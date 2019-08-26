import {ISpotifyAlbum} from './spotify-album.model';
import {ISpotifyArtist} from './spotify-artist.model';
import {ISpotifyExternalUrl} from './spotify-external-url.model';
import {ISpotifyAudioFeature} from './spotify-audio-feature.model';

export interface ISpotifyTrack {
  album?: ISpotifyAlbum;
  artists?: Array<ISpotifyArtist> | string;
  duration_ms?: number | string;
  external_urls?: ISpotifyExternalUrl;
  id?: string;
  is_playable?: boolean;
  name?: string;
  popularity?: number;
  preview_url?: string;
  type?: string;
  audio_feature?: ISpotifyAudioFeature;
}

export class SpotifyTrack implements ISpotifyTrack {
  // tslint:disable
  constructor(
    public album?: ISpotifyAlbum,
    public artists?: Array<ISpotifyArtist> | string,
    public duration_ms?: number | string,
    public external_urls?: ISpotifyExternalUrl,
    public id?: string,
    public is_playable?: boolean,
    public name?: string,
    public popularity?: number,
    public preview_url?: string,
    public type?: string,
    public audio_feature?: ISpotifyAudioFeature
  ) {}
}
