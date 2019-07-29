import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import KeyboardArrowUpRounded from '@material-ui/icons/KeyboardArrowUpRounded';
import MenuRounded from '@material-ui/icons/MenuRounded';
import Header from '../../src/components/Header';
import Root from '../../src/components/Root';

const useAppBarStyles = makeStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.common.white,
    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.12)',
    '& .MuiIconButton-root': {
      '&:hover': {
        backgroundColor: Color(palette.secondary.main)
          .rotate(-10)
          .lighten(1)
          .toString(),
      },
    },
  },
}));

const useIconStyles = makeStyles(({ palette }) => ({
  root: {
    color: palette.secondary.main,
  },
}));

const useHeaderStyles = makeStyles(({ palette, spacing }) => ({
  header: {
    backgroundColor: palette.secondary.main,
  },
  menuBtn: {
    padding: spacing(2.5),
    borderRadius: 0,
  },
  icon: {
    color: palette.common.white,
  },
  toolbar: {
    padding: spacing(0, 1),
  },
}));

const useHeaderStyles2 = makeStyles(({ palette, spacing, breakpoints }) => ({
  header: {
    backgroundColor: palette.primary.main,
  },
  menuBtn: {},
  icon: {
    color: palette.common.white,
  },
  toolbar: {
    minHeight: 64,
    [breakpoints.up('sm')]: {
      minHeight: 80,
    },
  },
}));

const CustomHeader = () => {
  const appBarStyles = useAppBarStyles();
  const iconStyles = useIconStyles();
  const {
    icon: iconCss,
    toolbar: toolbarCss,
    header: headerCss,
    menuBtn: menuBtnCss,
  } = useHeaderStyles();
  const {
    icon: iconCss2,
    toolbar: toolbarCss2,
    header: headerCss2,
    menuBtn: menuBtnCss2,
  } = useHeaderStyles2();
  return (
    <Box p={2}>
      <Typography variant={'subtitle2'} gutterBottom>
        Read in Notes{' '}
        <KeyboardArrowUpRounded style={{ verticalAlign: 'bottom' }} />
      </Typography>
      <br />
      <Root config={{ headerPosition: 'static' }}>
        <Typography variant={'subtitle2'} gutterBottom>
          Default
        </Typography>
        <Header
          renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
        />
        <br />
        <br />
        <Typography variant={'subtitle2'} gutterBottom>
          #1 : Custom Icon
        </Typography>
        <Header
          classes={appBarStyles}
          renderMenuIcon={open =>
            open ? (
              <ChevronLeft className={iconStyles.root} />
            ) : (
              <MenuRounded classes={iconStyles} />
            )
          }
        />
        <br />
        <br />
        <Typography variant={'subtitle2'} gutterBottom>
          #2 : Custom Header
        </Typography>
        <Header
          classes={{ root: headerCss }}
          renderMenuIcon={open =>
            open ? (
              <ChevronLeft className={iconCss} />
            ) : (
              <MenuRounded classes={{ root: iconCss }} />
            )
          }
          menuButtonProps={{ className: menuBtnCss }}
          toolbarProps={{ className: toolbarCss }}
        />
      </Root>
      <br />
      <br />
      <Root
        config={{
          headerPosition: 'static',
          initialAdjustmentHeight: { xs: 64, sm: 80 },
        }}
      >
        <Typography variant={'subtitle2'} gutterBottom>
          #3 : Custom Height (Don't forget to update config)
        </Typography>
        <Header
          classes={{ root: headerCss2 }}
          renderMenuIcon={open =>
            open ? (
              <ChevronLeft className={iconCss2} />
            ) : (
              <MenuRounded classes={{ root: iconCss2 }} />
            )
          }
          menuButtonProps={{ className: menuBtnCss2 }}
          toolbarProps={{ className: toolbarCss2 }}
        />
      </Root>
    </Box>
  );
};

CustomHeader.propTypes = {};
CustomHeader.defaultProps = {};

export default CustomHeader;
