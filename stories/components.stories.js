import React from 'react';
import { storiesOf } from '@storybook/react';

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

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Components', module)
  .add('Root', () => (
    <Root>
      <code>Root</code> is just a Provider, it does not return any DOM on the
      screen.
    </Root>
  ))
  .add('Header', () => (
    <Root>
      <Header
        renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
      />
    </Root>
  ))
  .add('Header (mock children)', () => (
    <Root>
      <Header
        renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
      >
        {({ screen, collapsed }) => (
          <HeaderEx screen={screen} collapsed={collapsed} />
        )}
      </Header>
    </Root>
  ))
  .add('Nav', () => (
    <Root>
      <Header
        renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
      />
      <Nav
        renderIcon={collapsed =>
          collapsed ? <ChevronRight /> : <ChevronLeft />
        }
      />
    </Root>
  ))
  .add('Nav (mock children)', () => (
    <Root>
      <Header
        renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
      />
      <Nav
        renderIcon={collapsed =>
          collapsed ? <ChevronRight /> : <ChevronLeft />
        }
        header={({ collapsed }) => <NavHeaderEx collapsed={collapsed} />}
      >
        <NavContentEx />
      </Nav>
    </Root>
  ))
  .add('Content', () => (
    <Root>
      <Content>
        <ContentEx />
      </Content>
    </Root>
  ))
  .add('Footer', () => (
    <Root>
      <Footer>
        <FooterEx />
      </Footer>
    </Root>
  ));
