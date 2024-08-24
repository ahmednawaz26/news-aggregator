import { useDispatch } from 'react-redux';
import { setSettings } from '../features/settings/settingsSlice';
import { useEffect } from 'react';

export function useLocalStorageSettings() {
  const dispatch = useDispatch();
  useEffect(() => {
    const localStorageSettings = localStorage.getItem('settings');

    if (localStorageSettings) {
      const parsedSettings = JSON.parse(localStorageSettings);
      dispatch(setSettings(parsedSettings));
    } else {
      dispatch(setSettings({ category: '', source: '', author: '' }));
    }
  }, []);
}
