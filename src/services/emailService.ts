import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

export interface BookingFormData {
  name: string;
  email: string;
  date: string;
  message?: string;
}

export const sendBookingEmail = async (formData: BookingFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      appointment_date: formData.date,
      message: formData.message || 'No additional message provided',
      to_email: EMAILJS_CONFIG.TO_EMAIL,
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};
