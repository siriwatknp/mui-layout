import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@material-ui/core';
import createGetScreenValue from 'utils/createGetScreenValue';
import useConfig from './useConfig';
import useWidth from './useWidth';

export default (appBarHeight, interval) => {
  const {
    breakpoints: { keys },
  } = useTheme();
  const {
    clipped,
    headerPosition,
    initialAdjustmentHeight,
    heightAdjustmentSpeed,
    heightAdjustmentDisabled,
  } = useConfig();
  const currentScreen = useWidth();
  const getScreenValue = createGetScreenValue(keys, currentScreen);
  const initialHeight = getScreenValue(appBarHeight, initialAdjustmentHeight);

  if (heightAdjustmentDisabled) return 0; // disabled by user.
  if (clipped && headerPosition === 'sticky') return initialHeight;
  if (
    !clipped &&
    (headerPosition !== 'static' || headerPosition !== 'relative')
  ) {
    // do not run the effect below if behavior is not right.
    return 0;
  }

  const [height, setHeight] = useState(initialHeight);
  const debounced = useRef(() =>
    setTimeout(() => {
      if (height > 0) {
        const offset = initialHeight - window.scrollY;
        setHeight(offset < 0 ? 0 : offset);
      }
    }, interval || heightAdjustmentSpeed),
  );
  useEffect(() => {
    window.addEventListener('scroll', debounced.current);
    return () => {
      window.removeEventListener('scroll', debounced.current);
    };
  }, []);
  return height;
};
