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
import {
  createStandardLayout,
  createFixedLayout,
  createContentBasedLayout,
  createCozyLayout,
  createMuiTreasuryLayout,
} from 'utils/presets';

// MOCK
import NavContentEx from './mock/NavContentEx';
import NavHeaderEx from './mock/NavHeaderEx';
import HeaderEx from './mock/HeaderEx';
import ContentEx from './mock/ContentEx';
import FooterEx from './mock/FooterEx';

storiesOf('Presets', module)
  .add('Default', () => (
    <Root>
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
      <Content>
        <ContentEx />
      </Content>
      <Footer>
        <FooterEx />
      </Footer>
    </Root>
  ))
  .add('Standard', () => (
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
        <NavContentEx />
      </Nav>
      <Content>
        <ContentEx />
      </Content>
      <Footer>
        <FooterEx />
      </Footer>
    </Root>
  ))
  .add('Fixed', () => (
    <Root config={createFixedLayout()}>
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
      <Content>
        <ContentEx />
      </Content>
      <Footer>
        <FooterEx />
      </Footer>
    </Root>
  ))
  .add('Content Based', () => (
    <Root config={createContentBasedLayout()}>
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
      <Content>
        <ContentEx />
      </Content>
      <Footer>
        <FooterEx />
      </Footer>
    </Root>
  ))
  .add('Cozy', () => (
    <Root config={createCozyLayout()}>
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
      <Content>
        <ContentEx />
      </Content>
      <Footer>
        <FooterEx />
      </Footer>
    </Root>
  ))
  .add('Mui Treasury', () => (
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
      <Content>
        <ContentEx />
      </Content>
      <Footer>
        <FooterEx />
      </Footer>
    </Root>
  ));
