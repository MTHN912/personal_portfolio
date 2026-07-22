


import { ContactInfo } from '@/shared/types';

export const contactMock: ContactInfo = {
  id: 'contact-1',
  phone: '+1 (682) 218-6643',
  email: 'william.mai.vn@gmail.com',
  address: 'Arlington, Texas, USA',
  mapLocation: {
    lat: 37.7749,
    lng: -122.4194,
    address: '2906 David Ln, Arlington, TX 76013, USA',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6713.313621429995!2d-97.15403060000001!3d32.721745999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7ceb976a92c1%3A0xf01aa93881d2095c!2s2906%20David%20Ln%2C%20Arlington%2C%20TX%2076013!5e0!3m2!1svi!2sus!4v1784675836920!5m2!1svi!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin',
  },
  workingHours: {
    days: 'Monday — Friday',
    hours: '9:00 AM — 6:00 PM',
    timezone: 'CDT (UTC-5)',
  },
};
