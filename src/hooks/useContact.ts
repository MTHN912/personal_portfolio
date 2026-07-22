

'use client';

import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { contactService, socialService } from '@/services';
import type { ContactFormData } from '@/shared/types';

export function useContact() {
  return useQuery({
    queryKey: ['contact'],
    queryFn: () => contactService.getContactInfo(),
  });
}

export function useSocial() {
  return useQuery({
    queryKey: ['social'],
    queryFn: () => socialService.getSocialLinks(),
  });
}

export function useContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const mutation = useMutation({
    mutationFn: (data: ContactFormData) => contactService.submitForm(data),
    onSuccess: () => {
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    },
    onError: () => {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    },
  });

  return {
    submitForm: mutation.mutate,
    isSubmitting: mutation.isPending,
    submitStatus,
    resetStatus: () => setSubmitStatus('idle'),
  };
}
