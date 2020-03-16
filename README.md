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

### install

Using [gatsby-starter-aoi-theme]

```sh
gatsby new ${your_project} gatsby-starter-aoi-theme
```

or if individually

```sh
yarn add gatsby-theme-aoi
```

### config

```js:gatsby-config.js
module.exports = {
  ...,
  plugins: [
    ...plugins,
    `gatsby-theme-aoi`
  ]
}
```

## Layouts

### Default Layout

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

Easy to customize. Read docs.

### Tab Layout

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

### Jumbotron Layout

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

## Layout Shadowing

### your project src directory

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

### Theme Layout Structure

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
├── TabPageLayout
│   └── index.tsx
├── TabPane
│   └── index.tsx
├── Tabs
│   └── index.tsx
└── index.tsx
```

## Related Repositories

- [gatsby-theme-aoi-top-layout] A plugin for this theme.
- [gatsby-starter-aoi-theme] A Gatsby starter kit using gatsby-theme-aoi
- [gatsby-starter-aoi] A Gatsby starter kit (deprecated)

[Gatsby]: https://www.gatsbyjs.org/ "Gatsby"
[gatsby-theme-aoi-top-layout]: https://github.com/cieloazul310/gatsby-theme-aoi-top-layout/ "Gatsby Theme Aoi Top Layout"
[gatsby-starter-aoi-theme]: https://github.com/cieloazul310/gatsby-theme-aoi/ "Gatsby Starter Aoi Theme"
[gatsby-starter-aoi]: https://github.com/cieloazul310/gatsby-starter-aoi/ "Gatsby Starter Aoi"
