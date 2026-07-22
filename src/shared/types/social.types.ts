

import { BaseEntity } from './common.types';

export type SocialPlatform =
  | 'facebook'
  | 'instagram'
  | 'linkedin'
  | 'tiktok'
  | 'github'
  | 'youtube'
  | 'twitter'
  | 'discord'
  | 'portfolio'
  | 'email';

export interface SocialLink extends BaseEntity {
  platform: SocialPlatform;
  url: string;
  label: string;
  icon: string;
  username?: string;
}
