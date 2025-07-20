import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email';

const COOLDOWN_TIME = 60000; // 1 minute cooldown
let lastEmailTime = 0;

export const useEmail = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = async (form) => {
    const now = Date.now();
    if (now - lastEmailTime < COOLDOWN_TIME) {
      setStatus('cooldown');
      return false;
    }

    setLoading(true);
    try {
      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        form,
        emailConfig.publicKey
      );
      lastEmailTime = now;
      setStatus('success');
      return true;
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading, status };
};
