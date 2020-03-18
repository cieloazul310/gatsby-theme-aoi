# Gatsby Theme Aoi

> A [Gatsby] theme for TypeScript-based Gatsby projects Material-UI.

DEMO: <https://cieloazul310.github.io/gatsby-starter-aoi-theme/>

## Features

- TypeScript
- Material-UI
- Mobile friendlly responsive UI layout
- Hold App State
- Dark Mode

## Getting Started

1. [Install](#install)
2. [Use Layout](#use-layout)
3. [Set your MuiTheme](#set-your-muitheme)
4. [Use App State](#use-app-state)

### install

Using [gatsby-starter-aoi-theme]

```sh
gatsby new ${your_project} gatsby-starter-aoi-theme
```

or if individually

```sh
yarn add gatsby-theme-aoi
```

and

```js:gatsby-config.js
module.exports = {
  ...,
  plugins: [
    ...plugins,
    `gatsby-theme-aoi`
  ]
}
```

### Use Layout

#### Default Layout

```tsx
import Typography from '@material-ui/core/Typography';
import Layout from 'gatsby-theme-aoi/src/layout';

function Page() {
  return (
    <Layout title="Default Layout Example" maxWidth="md">
      <Typography variant="h3" component="h2">
        Welcome to $your_project
      </Typography>
    </Layout>
  );
}
export default Page;
```

Easy to customize

#### Tab Layout

```tsx
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Layout from 'gatsby-theme-aoi/src/layouts/TabPageLayout';
import TabPane from 'gatsby-theme-aoi/src/layout/TabPane';

function Page() {
  const [tab, setTab] = React.useState(0);
  const _handleTab = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };
  const _handleTabIndex = (index: number) => () => {
    setTab(index);
  };
  const tabs = (
    <Tabs value={tab} onChange={_handleTab}>
      <Tab label="Tab1" />
      <Tab label="Tab2" />
    </Tabs>
  );
  return (
    <Layout title="Tab Layout" tabSticky tabs={tabs}>
      <TabPane index={0} value={tab} id="tab-1">
        <Typography variant="h2">Tab1</Typogrphy>
      </TabPane>
      <TabPane index={1} value={tab} id="tab-2">
        <Typography variant="h2">Tab2</Typogrphy>
      </TabPane>
    </Layout>
  );
}
export default Page;
```

[Example](https://cieloazul310.github.io/gatsby-starter-aoi-theme/tab-page/)

#### Jumbotron Layout

```tsx
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Layout from 'gatsby-theme-aoi/src/layouts/Jumbotron';

function Page() {
  const junmbotron = (
    <Box bgColor="silver" height={280} p={4} display="flex" flexDirection="column" justifyContent="center">
      <Typography variant="subtitle1">Gatsby Theme Aoi</Typography>
      <Typography variant="h2">Jumbotron Layout</Typography>
    </Box>
  );
  return (
    <Layout title="JumbotronPage" maxWidth="md" jumbotron={jumbotron}>
      <Typography variant="h4" component="h3">
        Welcome to $your_project
      </Typography>
    </Layout>
  );
}
export default Page;
```

[Example](https://cieloazul310.github.io/gatsby-starter-aoi-theme/jumbotron/)

#### Create your Layout

##### Use `componentViewports` props

```tsx
<Layout
  title="Full Width Layout"
  componentViewports={{
    PermanentDrawer: false,
    SwipeableDrawer: true,
    Fab: true
    BottomNav: 'smDown'
  }}
>
  {any}
</Layout>
```

value: Viewport (`xsDown`, `xsUp`, `smDown`, `smUp`, `mdDown`, `mdUp`, `lgDown`, `lgUp`, `xlDown`, `xlUp`) | boolean | null

`true` means components always showing and `false` means always hiding (equal to former `disableDrawer`, `disableFab`, `disableBottomNav`).

| component       | default |
| :-------------- | :------ |
| PermanentDrawer | mdUp    |
| SwipeableDrawer | smDown  |
| Fab             | smDown  |
| BottomNav       | xsDown  |

##### Insert Contents from page

```tsx
<Layout
  title="Insert Fab"
  componentViewports={{
    Fab: true
  }}
  fab={<Fab onClick={_toggleDark}>{isDark ? <Brightness4Icon /> : <Brightness5Icon />}</Fab>}
>
  {any}
</Layout>
```

#### Layout API

##### Props

`<Layout>` component have a props of Material-UI `<Container>` which is first child of main section.
<https://material-ui.com/api/container/>

| Name               | Type                          | Default | Description                                                         |
| :----------------- | :---------------------------- | :------ | :------------------------------------------------------------------ |
| children           | `node`                        |         | child element                                                       |
| title              | `string`                      |         | for Header, SEO                                                         |
| description        | `string`                      |         | for SEO                                                                 |
| keywords           | `string[]`                    |         | for SEO                                                                 |
| image              | `string`                      |         | for SEO                                                                 |
| disablePaddingTop  | `boolean`                     | false   | set padding to contents top                                         |
| componentViewports | `Partial<ComponentViewports>` |         |                                                                     |
| drawerWidth        | `number`                      | 280     |                                                                     |
| tabSticky          | `boolean`                     | false   | enable sticky tab component                                         |
| drawerContents     | `node`                        |         | Insert drawer contents from props, which is displayed top of drawer |
| tabs               | `node`                        |         | Insert tabs from props                                              |
| bottomNavigation   | `node`                        |         | Insert BottomNav from props                                         |
| fab                | `node`                        |         | Insert Fab from props                                               |

Every prop is optional.

#### Layout Structure

```tsx
<div>
  <SEO />
  <Header />
  <Drawer />
  <div>
    <Container {...props}>
      <Box pt={disablePaddingTop ? 0 : 6}>
        {tabs ? <Tabs /> : null}
        <main>{children}</main>
      </Box>
    </Container>
    <Footer />
  </div>
  <Fab />
  <BottomNav />
</div>
```

#### Layout Shadowing

##### your project src directory

```txt
src
├── gatsby-theme-aoi
│   ├── layout
│   │   ├── DrawerInner
│   │   │   └── Contents.tsx
│   │   └── SEO
│   │       └── index.tsx
│   └── utils
│       ├── AppState.ts
│       └── theme.ts
└── pages
    ├── 404.tsx
    ├── index.tsx
    └── page-2.tsx
```

Gatsby automatically conbined these components.

##### Theme Layout Structure

```txt
.
├── BottomNavigation
│   └── index.tsx
├── DrawerInner
│   ├── Contents.tsx
│   ├── DrawerFooter.tsx
│   ├── DrawerSharer.tsx
│   ├── StateHandler.tsx
│   └── index.tsx
├── Footer
│   ├── Socials.tsx
│   └── index.tsx
├── Header
│   ├── ButtonLeft.tsx
│   ├── ButtonRight.tsx
│   ├── ShareButtons.tsx
│   └── index.tsx
├── SEO
│   └── index.tsx
├── TabPane
│   └── index.tsx
├── Tabs
│   └── index.tsx
└── index.tsx
```

### Set Your MuiTheme

change your `src/gatsby-theme-aoi-top-layout/utils/theme.ts`

```ts
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: blue, // your primary color
    secondary: red, // your secondary color
  },
});

export default responsiveFontSizes(theme);
// or export default theme;
```

### Use App State

change your `src/gatsby-theme-aoi-top-layout/utils/AppState.ts`

```ts
/**
 * Gatsby Theme Shadowing
 * MUST
 * export type AppState;
 * export const initialAppState
 * export type Action
 * export default function reducer
 */

export interface AppState {
  count: number;
}

export const initialAppState: AppState = {
  count: 0,
};

export type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' } | { type: 'RESET_COUNT' };

export default function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: Math.max(state.count - 1, 0),
      };
    case 'RESET_COUNT':
      return {
        ...state,
        count: 0,
      };
    default:
      throw new Error();
  }
}
```

## Related Repositories

- [gatsby-theme-aoi-top-layout] A plugin for this theme.
- [gatsby-starter-aoi-theme] A Gatsby starter kit using gatsby-theme-aoi
- [gatsby-starter-aoi] A Gatsby starter kit (deprecated)

[gatsby]: https://www.gatsbyjs.org/ 'Gatsby'
[gatsby-theme-aoi-top-layout]: https://github.com/cieloazul310/gatsby-theme-aoi-top-layout/ 'Gatsby Theme Aoi Top Layout'
[gatsby-starter-aoi-theme]: https://github.com/cieloazul310/gatsby-theme-aoi/ 'Gatsby Starter Aoi Theme'
[gatsby-starter-aoi]: https://github.com/cieloazul310/gatsby-starter-aoi/ 'Gatsby Starter Aoi'
