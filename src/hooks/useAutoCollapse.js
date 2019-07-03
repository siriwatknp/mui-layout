import { useEffect } from 'react';
import { useTheme } from '@material-ui/core';
import useConfig from './useConfig';

export default () => {
  const {
    breakpoints: { keys },
  } = useTheme();
  const {
    collapsible,
    screen,
    collapsed,
    setCollapsed,
    collapsedBreakpoint,
  } = useConfig();

  useEffect(() => {
    if (collapsible) {
      if (collapsed && screen === collapsedBreakpoint) {
        setCollapsed(false);
      }
      if (
        !collapsed &&
        keys.indexOf(screen) < keys.indexOf(collapsedBreakpoint)
      ) {
        setCollapsed(true);
      }
    }
  }, [screen]);
};
