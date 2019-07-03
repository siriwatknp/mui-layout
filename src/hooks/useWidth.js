/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import getWindowSizes from 'utils/getWindowSizes';
/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
const getNextScreen = (keys, screen) => {
  const index = keys.indexOf(screen);
  if (index === keys.length - 1) return null;
  return keys[index + 1];
};
const getScreenBefore = (keys, screen) => {
  const index = keys.indexOf(screen);
  if (index === 0) return null;
  return keys[index - 1];
};

const getScreen = breakpoints => {
  const { width } = getWindowSizes();
  let screen = 'xs';
  breakpoints.keys.some(key => {
    if (width < breakpoints.values[key]) {
      screen = key;
      return true;
    }
    return false;
  });
  return screen;
};

function useWidth() {
  const theme = useTheme();
  const { breakpoints } = theme;
  const [screen, setScreen] = useState(getScreen(breakpoints));
  const keys = [...breakpoints.keys].reverse();
  const result =
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.only(key));

      return !output && matches ? key : output;
    }, null) || 'xs';

  useEffect(() => {
    if (
      getNextScreen(keys, screen) === result ||
      getScreenBefore(keys, screen) === result
    ) {
      setScreen(result);
    }
  }, [result]);
  return screen;
}

export default useWidth;

// import { useEffect, useRef, useState } from 'react';
// import { useTheme } from '@material-ui/core/styles';
// import getWindowSizes from 'utils/getWindowSizes';
//
// const useWidth = (interval = 200) => {
//   const { breakpoints } = useTheme();
//   const [screen, setScreen] = useState(getScreen(breakpoints));
//
//   const debounced = useRef(() =>
//     setTimeout(() => {
//       const calculatedScreen = getScreen(breakpoints);
//       if (screen !== calculatedScreen) {
//         setScreen(calculatedScreen);
//       }
//     }, interval),
//   );
//   useEffect(() => {
//     window.addEventListener('resize', debounced.current);
//     return () => {
//       window.removeEventListener('resize', debounced.current);
//     };
//   }, []);
//   console.log('screen', screen);
//   return screen;
// };
//
// export default useWidth;
