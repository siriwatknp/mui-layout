import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import useFullConfig from 'hooks/useFullConfig';

const getMargin = ({
  navAnchor,
  navVariant,
  navWidth,
  collapsible,
  collapsed,
  collapsedWidth,
  opened,
}) => {
  if (navAnchor !== 'left') return 0;
  if (navVariant === 'persistent' && opened) {
    // open is effect only when
    // navVariant === 'persistent' ||
    // navVariant === 'temporary'
    return navWidth;
  }
  if (navVariant === 'permanent') {
    if (collapsible) {
      if (collapsed) return collapsedWidth;
      return navWidth;
    }
    return navWidth;
  }
  return 0;
};
const getWidth = ({ opened, navVariant, squeezed }) => {
  if (navVariant === 'persistent' && opened) {
    // open is effect only when
    // navVariant === 'persistent' ||
    // navVariant === 'temporary'
    if (squeezed) {
      return 'auto';
    }
    return '100%';
  }
  return 'auto';
};

const useStyles = makeStyles(({ transitions }) => ({
  root: {
    flexGrow: 1,
    transition: transitions.create(['margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
  },
}));

const Content = ({ component: Component, className, style, ...props }) => {
  const ctx = useFullConfig();
  const classes = useStyles(props);
  return (
    <Component
      {...props}
      className={`${className} ${classes.root}`}
      style={{
        ...style,
        marginLeft: getMargin(ctx),
        width: getWidth(ctx),
      }}
    />
  );
};

Content.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
  style: PropTypes.shape({}),
};
Content.defaultProps = {
  className: '',
  component: 'main',
  style: {},
};

export default Content;
