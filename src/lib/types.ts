export type BuildNote = {
  id: number;
  version: string;
  title: string;
  content: string;
  releaseDate: string;
  createdAt: string;
  updatedAt: string;
};

export type Feature = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
};

export type MediaAsset = {
  id: number;
  url: string;
  altText: string;
  uploadedById: number;
  createdAt: string;
};

export type Review = {
  id: number;
  name: string;
  content: string;
  rating: number;
  approved: boolean;
  createdAt: string;
};

export type User = {
  id: number;
  email: string;
  passwordHash: string;
  role: string;
  createdAt: string;
};

export interface Team {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  position: string;
  positionShortcut: string;
  linkedIn: string;
  facebook: string;
  github: string;
  createdAt: string;
  updatedAt: string;
}

export interface About {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface GameCardProps {
  title: string;
  imageUrl: string;
  streaming: string;
  isOnline: boolean;
}
