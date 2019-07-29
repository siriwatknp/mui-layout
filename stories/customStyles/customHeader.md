## Custom Header Styles

If you haven't had any experience about styling Material-UI component, please first look at the [official docs](https://material-ui.com/styles/basics/#why-use-material-uis-styling-solution) to understand the mechanism behind it.

### use `makeStyles` api from @material-ui/styles

this fn will create useStyles hook that is very convenient for customization.

```js
import { makeStyles } from '@material-ui/styles';
```

> Please note that all examples are independent for each other.

### #1 Custom Icon

this example override menu button by using css class reference (don't forget to add '&' when you want to specify :hover or nested element)

[Color](https://github.com/Qix-/color) is used to manipulate palette

```js
import Color from 'color';

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

function App() {
  return (
    <Root>
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
    </Root>
  );
}
```

### #2 Custom Header

```js
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

function App() {
  const {
    icon: iconCss,
    toolbar: toolbarCss,
    header: headerCss,
    menuBtn: menuBtnCss,
  } = useHeaderStyles();
  return (
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
  );
}
```

### #3 : Custom Height (Don't forget to update config)

If you want to change Header's height, you have to set `initialAdjustmentHeight` to that height (use object pattern for mediaQuery config) like in this example

```js
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

function App() {
  const {
    icon: iconCss,
    toolbar: toolbarCss,
    header: headerCss,
    menuBtn: menuBtnCss,
  } = useHeaderStyles();
  return (
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
  );
}
```
