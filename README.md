<img src="https://user-images.githubusercontent.com/18292247/60601737-cb425a00-9ddc-11e9-8cb7-642fa581aa3d.png" alt="logo" width="150" height="136" />

# Material-UI Layout [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/siriwatknp/mui-layout/pulls)

A set of components that allows you to build dynamic and responsive layout based on Material-UI

## Prerequisites
This project based on [React Material-UI](https://material-ui.com/), so you have to install `@material-ui/core @material-ui/styles`

## Installation

```bash
// yarn
yarn add mui-layout @material-ui/core @material-ui/styles

// npm
npm install mui-layout @material-ui/core @material-ui/styles
```

## Usage

```python
import {
 Root,
 Header,
 Nav,
 Content,
 Footer,
 createStandardLayout,
} from 'mui-layout';

const config = createStandardLayout();

const App = () => (
  <Root config={config}>
    <Header
      renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
    >
      header
    </Header>
    <Nav
      renderIcon={collapsed =>
        collapsed ? <ChevronRight /> : <ChevronLeft />
      }
    >
      nav
    </Nav>
    <Content>
      content
    </Content>
    <Footer>
      footer
    </Footer>
  </Root>
)
```

## Demo
see demo here [Storybook Demo](https://siriwatknp.github.io/mui-layout/?path=/story/welcome--introduction)

## Built-in Features
- Collapsible Nav

  ![Alt Text](https://media.giphy.com/media/1BgIQWDxSNQHZS0HiN/giphy.gif)
- Header Magnet

  ![alt text](https://media.giphy.com/media/L0ZQCiCrFiVKaHb5St/giphy.gif)
- Auto Collapsed

  ![alt text](https://media.giphy.com/media/XbySngD0dtVnHeDq1a/giphy.gif)
- Responsive Config
  ```
  const extendedConfigs2 = {
    ...defaultConfig,
  
    // navVariant is 'temporary' in mobile and tablet, 'permanent' in desktop and greater
    navVariant: {
      xs: 'temporary',
      md: 'permanent',
    },
  ```
  
## Presets
- Standard

  ![Alt Text](https://media.giphy.com/media/1jXGr4qb8dVizIUudS/giphy.gif)
- Fixed

  ![Alt Text](https://media.giphy.com/media/fnW25ZYsCtCyrX2aho/giphy.gif)
- Content Based
  
  ![Alt Text](https://media.giphy.com/media/1ZnFrQUZpCibwtTGj9/giphy.gif)
- Cozy

  ![Alt Text](https://media.giphy.com/media/w9d1LsOBFndXpzV62z/giphy.gif)

## How it works
- They are basically material-ui components that are combined to make things easier.
`AppBar`, `Toolbar`, `Drawer`

- use `@material-ui/styles` to style components

- use react-hooks

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
