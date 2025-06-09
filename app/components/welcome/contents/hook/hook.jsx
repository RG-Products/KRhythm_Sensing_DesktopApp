import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useFocusOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    // This works only if you’ve enabled nodeIntegration and remote module
    if (window && window.require) {
      try {
        const { remote } = window.require('electron');
        const currentWindow = remote.getCurrentWindow();
        if (currentWindow) {
          currentWindow.focus();
        }
      } catch (err) {
        console.error('Failed to focus window:', err);
      }
    }
  }, [location]);
}
