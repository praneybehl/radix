import { Headers, RequestInit } from 'node-fetch';

export class CodedError extends Error {
  public code: ERRORS;

  constructor(code: ERRORS, message: string) {
    super(message);
    this.code = code;
    Object.setPrototypeOf(this, CodedError.prototype);
  }
}

export enum ERRORS {
  NETWORK_OFFLINE = 'NETWORK_OFFLINE',
  UNEXPECTED = 'UNEXPECTED',
  NO_ICONS_PAGE = 'NO_ICONS_PAGE',
  NO_ICONS_IN_SETS = 'NO_ICONS_IN_SETS',
  FIGMA_API = 'FIGMA_API',
}

export interface IFigmaConfig {
  baseUrl: string;
  fileKey: string;
  headers: Headers;
}

export interface IIcon {
  id: string;
  name: string;
  path: string;
}

export interface IIcons {
  [iconId: string]: IIcon;
}

export interface IIconsSvgUrls {
  readonly [iconId: string]: string;
}

export interface RequestInitWithRetry extends RequestInit {
  retry?: { delay: number; retries: number };
}

export interface IIconManifest {
  [category: string]: { [size: string]: { [name: string]: string } };
}
