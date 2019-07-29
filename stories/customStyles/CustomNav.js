import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';
import { makeStyles } from '@material-ui/styles';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Root from '../../src/components/Root';
import Nav from '../../src/components/Nav';
import { createCozyLayout } from '../../src';
import NavHeaderEx from '../mock/NavHeaderEx';
import NavContentEx from '../mock/NavContentEx';

const useDrawerStyles = makeStyles(({ palette }) => ({
  paper: {
    backgroundColor: palette.grey[900],
    color: palette.common.white,
    border: 'none',
    boxShadow: '0 0 8px 0 rgba(0,0,0,0.38)',
    '& .MuiListItemIcon-root': {
      color: 'rgba(255, 255, 255, 0.64)',
    },
    '& .MuiTypography-colorTextSecondary': {
      color: 'rgba(255, 255, 255, 0.48)',
    },
    '& .MuiDivider-root': {
      backgroundColor: 'rgba(255, 255, 255, 0.24)',
    },
  },
}));

const useToggleStyles = makeStyles(({ palette }) => ({
  root: {
    color: palette.common.white,
    borderTopColor: 'rgba(255, 255, 255, 0.24)',
    backgroundColor: palette.grey[900],
    '&:hover': {
      backgroundColor: palette.grey[700],
    },
  },
}));

const CustomNav = () => {
  const drawerStyles = useDrawerStyles();
  const toggleStyles = useToggleStyles();
  return (
    <Root config={createCozyLayout()}>
      <Nav
        renderIcon={collapsed =>
          collapsed ? <ChevronRight /> : <ChevronLeft />
        }
        header={({ collapsed }) => <NavHeaderEx collapsed={collapsed} />}
        classes={drawerStyles}
        toggleProps={{
          classes: toggleStyles,
        }}
      >
        <NavContentEx />
      </Nav>
    </Root>
  );
};

CustomNav.propTypes = {};
CustomNav.defaultProps = {};

export default CustomNav;
