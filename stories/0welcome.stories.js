import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';
import Gist from 'react-gist';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

storiesOf('Welcome', module)
  .add('Introduction', () => (
    <Box maxWidth={700} p={2} mx={'auto'}>
      <Typography variant={'overline'}>INTRODUCING</Typography>
      <Typography weight={'bold'} variant={'h4'} gutterBottom>
        Material UI <Link underline={'none'}>Layout</Link>
      </Typography>
      <Typography gutterBottom>
        <b>Version 1.2</b>
      </Typography>
      <Typography indent={'small'}>
        Layout is a group of Material-UI components that are enhanced and
        combined to create dynamic, easy-to-maintain and easy-to-use as much as
        possible.
      </Typography>
      <br />
      <Typography weight={'bold'} variant={'h5'} gutterBottom>
        <b>{"Let's start with Why?"}</b>
      </Typography>
      <Typography gutterBottom>
        I created this because
        <br />
      </Typography>
      <Typography component={'div'}>
        <ol>
          <li>
            It took me a lot of time to initialize dashboard layout when I have
            new projects and I’m sure that a lot of you guys agree with me.
          </li>
          <li>
            Sometimes it is hard to refactor because the structure is so poor
            because someone isn’t deeply understand what he/she was doing, as a
            result, rewrite the whole layout (it actually happened, at least in
            my experience).
          </li>
          <li>
            Because we need to be fast to let others continue our work, we
            frequently write poor and a lot of code. However, we say we don’t
            have time to fix them. Eventually, spend all day paying technical
            debts.
          </li>
        </ol>
      </Typography>
      <br />
      <Typography weight={'bold'} variant={'h5'} gutterBottom>
        <b>Objectives</b>
      </Typography>
      <Typography>
        It must be easy enough to use, however still be able to adjust to compat
        with real word examples and usages. More importantly, it need to follow{' '}
        <Link
          target={'_blank'}
          rel="noopener"
          href={'https://material.io/design/components/navigation-drawer.html#'}
          underline={'none'}
        >
          Material specs
        </Link>{' '}
        since we are 100% based on Material-UI with no other styling libraries.
        Last but not least, responsive is a must.
      </Typography>
      <br />
      <Typography weight={'bold'} variant={'h5'} gutterBottom>
        <b>Solution</b>
      </Typography>
      <Typography>Separate layout into 5 components</Typography>
      <Typography component={'div'}>
        <ul>
          <li>Root</li>
          <li>Header (AppBar)</li>
          <li>Nav (Drawer)</li>
          <li>Content</li>
          <li>Footer</li>
        </ul>
      </Typography>
      <Typography>
        <b>Root</b> will provide context to other components to sync states
        across them.
      </Typography>
      <Typography>
        <b>Behavior</b> of your layout will be controlled by using config (just
        a plain object) that will be injected to the Root.
      </Typography>
      <Typography>
        <b>Presets</b> is a set of predefined config that I can come up with
        after researching a lot of the real world websites and also the{' '}
        <Link
          href={
            'https://material.io/design/components/navigation-drawer.html#usage'
          }
        >
          official Material specs
        </Link>
      </Typography>
      <br />
      <button onClick={linkTo('Welcome', 'Features')}>Features in v1.2</button>
      <br />
      <br />
    </Box>
  ))
  .add('Features', () => (
    <Box maxWidth={700} p={2} mx={'auto'}>
      <Typography variant={'h4'} gutterBottom>
        Built-in Features
      </Typography>
      <Typography gutterBottom>
        with these built-in features, you don't have to do any tedious works to
        make it work! hooks is used internally. Moreover, if you don't like
        these build-in features, you can turn it off by pass some config to{' '}
        <code>Root</code> component
      </Typography>
      <br />
      <Typography variant={'h6'} gutterBottom>
        <b>1. Collapsible Nav</b>
      </Typography>
      <img src={'https://media.giphy.com/media/1BgIQWDxSNQHZS0HiN/giphy.gif'} />
      <Typography gutterBottom>
        <ul>
          <li>
            <code>collapsible</code> is boolean, false means you don't want this
            feature., it will hide menu icon at the bottom of the nav
          </li>
          <li>
            <code>collapsedWidth</code> is number or object (mediaQuery pattern)
            means the width after the nav collapsed.
          </li>
        </ul>
      </Typography>
      <br />
      <Typography variant={'h6'} gutterBottom>
        <b>2. Header Magnet</b>
      </Typography>
      <img src={'https://media.giphy.com/media/L0ZQCiCrFiVKaHb5St/giphy.gif'} />
      <Typography gutterBottom>
        <ul>
          <li>
            <code>heightAdjustmentDisabled</code> is boolean, true means you
            don't want this feature :(
          </li>
          <li>
            <code>initialAdjustmentHeight</code> is number or object (mediaQuery
            pattern)
          </li>
          <li>
            <code>heightAdjustmentSpeed</code> the speed of snapping (ms) the
            lower, the faster but drop performance
          </li>
        </ul>
      </Typography>
      <br />
      <Typography variant={'h6'} gutterBottom>
        <b>3. Auto Collapsed</b>
      </Typography>
      <img src={'https://media.giphy.com/media/XbySngD0dtVnHeDq1a/giphy.gif'} />
      <Typography gutterBottom>
        Nav will collapsed automatically when it detects that the screen is
        below breakpoint. Likewise, it will stretch automatically when the
        screen is larger than breakpoint. Default value is "md".
      </Typography>
      <Typography gutterBottom>
        <ul>
          <li>
            <code>autoCollapsedDisabled</code> is boolean, true means you don't
            want this feature :(
          </li>
          <li>
            <code>collapsedBreakpoint</code> is string one of ['sm', 'md',
            'lg']. (sm = 600px, md = 960px best!, lg=1280px)
          </li>
        </ul>
      </Typography>
      <br />
      <Divider />
      <br />
      <Typography variant={'h6'} gutterBottom>
        <b>Excited?</b>
      </Typography>
      <button onClick={linkTo('Welcome', 'Get started')}>Read How to</button>
    </Box>
  ))
  .add('Get started', () => (
    <Box maxWidth={960} p={2} mx={'auto'}>
      <Box px={1}>
        <Typography variant={'h6'} gutterBottom>
          <b>1. Easiest Way</b>
        </Typography>
        <Typography variant={'subtitle1'} gutterBottom>
          <b>
            <Link
              target={'_blank'}
              rel="noopener"
              href={
                'https://material.io/design/components/navigation-drawer.html#'
              }
              color={'secondary'}
            >
              Open this sandbox
            </Link>
          </b>{' '}
          to see the code. and then{' '}
          <button onClick={linkTo('Welcome', 'Configuration')}>
            How to config
          </button>
        </Typography>
        <br />
        <Divider />
        <br />
        <Typography variant={'h6'} gutterBottom>
          <b>2. Manual Way</b>
        </Typography>
        <Typography gutterBottom>
          <b>create-react-app</b> is the fastest way to test and start building
          react app.
        </Typography>
      </Box>
      <Gist id={'31b89672cbbf295eb2fd6839cb1c8600'} file={'install'} />
      <Box px={1}>
        <Typography gutterBottom>
          then copy the code below and paste to <b>App.js</b>
        </Typography>
        <Typography gutterBottom>
          <code>ThemeProvider</code> is a must since mui-layout need to access{' '}
          <code>breakpoints</code> in theme.
        </Typography>
      </Box>
      <Gist id={'31b89672cbbf295eb2fd6839cb1c8600'} file={'mui-layout.js'} />
      <Box px={1}>
        <Typography variant={'h6'} gutterBottom>
          <b>Congratulations!</b>
        </Typography>
        <Typography gutterBottom>
          <b>Next Step</b>, Let's customize your layout's behavior by adjusting
          config
        </Typography>
        <button onClick={linkTo('Welcome', 'Configuration')}>See config</button>
      </Box>
      <br />
      <br />
      <br />
    </Box>
  ))
  .add('Configuration', () => (
    <Box maxWidth={960} p={2} mx={'auto'}>
      <Box px={1}>
        <Typography variant={'subtitle1'} gutterBottom>
          <b>Adjust Config</b>
        </Typography>
        <Typography variant={'subtitle1'} gutterBottom>
          config is just a plain object that defines behavior of your layout.
          Mostly, the value of each field can be an object pattern (mediaQuery).
        </Typography>
      </Box>
      <Gist id={'bc1575e3261b92c8046030f30414342c'} file={'config'} />
      <Box px={1}>
        <Typography gutterBottom component={'div'}>
          to see what each field can do{' '}
          <Link
            target={'_blank'}
            rel="noopener"
            href={'https://mui-treasury.com/components/layout'}
            color={'secondary'}
          >
            Click here
          </Link>
        </Typography>
      </Box>
      <br />
      <br />
      <Box px={1}>
        <Typography>
          <b>Object pattern</b>
        </Typography>
      </Box>
      <Gist id={'bc1575e3261b92c8046030f30414342c'} file={'object pattern'} />
      <Box px={1}>
        <Typography>
          if you want to customize behavior in each screen (mobile, tablet,
          desktop), you have to specify it in object. The key represent the
          screen that the value will be applied on, ex.{' '}
          <code>{`\{ "sm": true \}`}</code> means you want this behavior to be
          true in tablet. Luckily, you dont have to specify all screen key. if
          there is no key let say "md"(desktop), it will use the smaller
          specified value that it can found. If you want to apply to all screen,
          don't use object pattern.
        </Typography>
      </Box>
      <br />
      <br />
      <Box px={1}>
        <Typography>
          <b>Example preset</b>
        </Typography>
      </Box>
      <Gist id={'bc1575e3261b92c8046030f30414342c'} file={'example config'} />
      <br />
      <br />
      <Box px={1}>
        <Typography gutterBottom>
          <b>Pass as props</b>
        </Typography>
        <Typography>
          pass your config as props to <code>Root</code> component
        </Typography>
      </Box>
      <Gist id={'bc1575e3261b92c8046030f30414342c'} file={'How to use'} />
      <br />
      <br />
      <Box px={1}>
        <Typography>
          <b>Lazy? pick one from my presets (see demo on the panel)</b>
        </Typography>
      </Box>
      <Gist id={'bc1575e3261b92c8046030f30414342c'} file={'presets'} />
      <br />
      <br />
    </Box>
  ));
