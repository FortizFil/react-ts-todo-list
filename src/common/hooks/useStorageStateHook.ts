import { useState, useEffect } from 'react';

type StorageType = 'localStorage' | 'sessionStorage';

export const useStorageStateHook = <T>(
  defaultValue: T,
  key: string,
  storageType: StorageType = 'localStorage',
): [T, (val: T) => void] => {
  const storage = window[storageType];

  const [value, setValue] = useState<T>(() => {
    const storedValue = storage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    storage.setItem(key, JSON.stringify(value));
  }, [key, value, storage]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.newValue !== null) {
        setValue(JSON.parse(event.newValue));
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return [value, setValue];
};
