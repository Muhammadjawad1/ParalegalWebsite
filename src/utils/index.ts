// Utility Functions

export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '$1 $2 $3 $4');
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};
