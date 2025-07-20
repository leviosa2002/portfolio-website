import { useState } from 'react';

const BACKEND_URL = 'http://localhost:3001/api';

export const useEmail = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = async (form) => {
    const formData = new FormData(form);
    setLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('user_name'),
          email: formData.get('user_email'),
          message: formData.get('message')
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        return true;
      } else if (response.status === 429) {
        setStatus('cooldown');
        return false;
      } else {
        setStatus('error');
        return false;
      }
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
