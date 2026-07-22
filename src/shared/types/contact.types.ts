

import { BaseEntity } from './common.types';

export interface ContactInfo extends BaseEntity {
  phone: string;
  email: string;
  address: string;
  mapLocation: MapLocation;
  workingHours: WorkingHours;
}

export interface MapLocation {
  lat: number;
  lng: number;
  address: string;
  embedUrl: string;
}

export interface WorkingHours {
  days: string;
  hours: string;
  timezone: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}
