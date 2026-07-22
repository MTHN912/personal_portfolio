

import { APP_CONFIG } from '@/shared/constants';
import { contactMock } from '@/services/mock';
import type { ContactInfo, ContactFormData, ContactFormResponse } from '@/shared/types';

function mockDelay<T>(data: T, ms = 300): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
}

export const contactService = {
  async getContactInfo(): Promise<ContactInfo> {
    if (APP_CONFIG.api.useMock) {
      return mockDelay(contactMock);
    }
    return contactMock;
  },

  async submitForm(data: ContactFormData): Promise<ContactFormResponse> {
    if (APP_CONFIG.api.useMock) {

      console.log('Contact form submitted (mock):', data);
      return mockDelay({
        success: true,
        message: 'Thank you for your message! I will get back to you soon.',
      }, 1000);
    }

    return { success: true, message: 'Message sent successfully.' };
  },
};
