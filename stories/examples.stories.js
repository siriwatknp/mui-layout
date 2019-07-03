import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import MenuRounded from '@material-ui/icons/MenuRounded';
import Root from 'components/Root';
import Header from 'components/Header';
import Nav from 'components/Nav';
import Content from 'components/Content';
import Footer from 'components/Footer';
import { createMuiTreasuryLayout, createStandardLayout } from '../src';
import HeaderEx from './mock/HeaderEx';
import NavHeaderEx from './mock/NavHeaderEx';
import NavContentEx from './mock/NavContentEx';
import RouterNavEx from './mock/RouterNavEx';
import ContentEx from './mock/ContentEx';
import FooterEx from './mock/FooterEx';

import SerratedTabs from './mock/SerratedTabs';

storiesOf('Examples', module)
  .addDecorator(StoryRouter())
  .add('React Router', () => {
    const [index, setIndex] = useState(0);
    return (
      <Root config={createStandardLayout()}>
        <Header
          renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
        >
          {({ screen, collapsed }) => (
            <HeaderEx screen={screen} collapsed={collapsed} />
          )}
        </Header>
        <Nav
          renderIcon={collapsed =>
            collapsed ? <ChevronRight /> : <ChevronLeft />
          }
          header={({ collapsed }) => <NavHeaderEx collapsed={collapsed} />}
        >
          {({ setOpened }) => <RouterNavEx setOpened={setOpened} />}
        </Nav>
        <Content>
          <AppBar
            position={'static'}
            elevation={0}
            style={{ backgroundColor: '#E6E8EB' }}
          >
            <Toolbar
              // you need to set override hidden in toolbar
              style={{ overflow: 'hidden', minHeight: 80 }}
            >
              <SerratedTabs
                style={{ alignSelf: 'flex-end' }}
                tabs={[
                  { label: 'Home', to: '/' },
                  { label: 'My Files', to: '/my-files' },
                  { label: 'Shared with me', to: '/shared-with-me' },
                  { label: 'Starred', to: '/starred' },
                ]}
                tabStyle={{
                  bgColor: '#4486a3',
                  selectedBgColor: '#ffffff',
                  minWidth: { md: 144 },
                }}
                tabProps={{
                  disableRipple: true,
                  component: Link,
                }}
                value={index}
                onChange={(e, i) => setIndex(i)}
              />
            </Toolbar>
          </AppBar>
          <Box p={{ xs: 2, sm: 3 }} pb={'0 !important'}>
            <Typography variant={'h6'}>
              I know, the tabs is cool right!{' '}
              <MuiLink
                color={'secondary'}
                target={'_blank'}
                href={'https://mui-treasury.com/components/tabs'}
                rel={'noopener'}
              >
                Get it Now!
              </MuiLink>
            </Typography>
          </Box>
          <Route path={'/'} exact render={() => <ContentEx />} />
          <Route
            path={'/my-files'}
            exact
            render={() => (
              <Box p={{ xs: 2, sm: 3 }}>
                <Typography variant={'h4'}>My Files</Typography>
              </Box>
            )}
          />
          <Route
            path={'/shared-with-me'}
            exact
            render={() => (
              <Box p={{ xs: 2, sm: 3 }}>
                <Typography variant={'h4'}>Shared with me</Typography>
              </Box>
            )}
          />
          <Route
            path={'/starred'}
            exact
            render={() => (
              <Box p={{ xs: 2, sm: 3 }}>
                <Typography variant={'h4'}>Starred</Typography>
              </Box>
            )}
          />
        </Content>
        <Footer>
          <FooterEx />
        </Footer>
      </Root>
    );
  })
  .add('Height 100vh', () => (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Root config={createMuiTreasuryLayout()}>
        <Header
          renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
        >
          {({ screen, collapsed }) => (
            <HeaderEx screen={screen} collapsed={collapsed} />
          )}
        </Header>
        <Nav
          renderIcon={collapsed =>
            collapsed ? <ChevronRight /> : <ChevronLeft />
          }
          header={({ collapsed }) => <NavHeaderEx collapsed={collapsed} />}
        >
          <NavContentEx />
        </Nav>
        <Content style={{ flexGrow: 1 }}>
          <Box p={{ xs: 2, sm: 3 }}>
            <Typography variant={'h4'} gutterBottom>Short Content</Typography>
            <Typography>
              If you want to set 100vh, I recommend{' '}
              <MuiLink
                color={'secondary'}
                target={'_blank'}
                href={'https://github.com/mvasin/react-div-100vh'}
                rel={'noopener'}
              >
                react-div-100vh
              </MuiLink>{' '}
              because it handle some edge cases in safari
            </Typography>
          </Box>
        </Content>
        <Footer>
          <FooterEx />
        </Footer>
      </Root>
    </div>
  ));
