## Custom Nav Styles

If you haven't had any experience about styling Material-UI component, please first look at the [official docs](https://material-ui.com/styles/basics/#why-use-material-uis-styling-solution) to understand the mechanism behind it.

### use `makeStyles` api from @material-ui/styles

this fn will create useStyles hook that is very convenient for customization.

```js
import { makeStyles } from '@material-ui/styles';
```

### Dark Nav

`classes` send to `Nav` will be send to `Drawer`. `paper` refer to the `Paper` component that `Drawer` uses inside it.

If you want to custom toggle button styles, send an object with `classes` as `toggleProps`. ToggleButton = IconButton (fullWidth)

- [Drawer CSS API](https://material-ui.com/api/drawer/#css)
- [IconButton CSS API](https://material-ui.com/api/icon-button/#css)

```js
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
```
