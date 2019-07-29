import React from 'react';
import { storiesOf } from '@storybook/react';

import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import MenuRounded from '@material-ui/icons/MenuRounded';
import Root from 'components/Root';
import Header from 'components/Header';
import Nav from 'components/Nav';
import Content from 'components/Content';
import Footer from 'components/Footer';

// MOCK
import NavContentEx from './mock/NavContentEx';
import NavHeaderEx from './mock/NavHeaderEx';
import HeaderEx from './mock/HeaderEx';
import ContentEx from './mock/ContentEx';
import FooterEx from './mock/FooterEx';

import customHeader from './customStyles/customHeader.md';
import CustomHeader from './customStyles/CustomHeader';
import customNav from './customStyles/customNav.md';
import CustomNav from './customStyles/CustomNav';

storiesOf('Custom Styles', module)
  .add('Header', () => <CustomHeader />, {
    notes: { markdown: customHeader },
  })
  .add('Nav', () => <CustomNav />, {
    notes: { markdown: customNav },
  });
