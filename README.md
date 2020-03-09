# gatsby-theme-aoi

> A theme for TypeScript-based Gatsby projects Material-UI.

DEMO: https://cieloazul310.github.io/gatsby-starter-typescript-material-ui/

## Features

- TypeScript
- Material-UI
- Mobile friendlly responsive UI layout
- Hold App State
- Dark Mode

## Getting Started

### install

```sh
gatsby new ${your_project} gatsby-starter-aoi-theme
```

or

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

## Use Aoi Layout

### ${your_project}/src/pages/index.tsx

```tsx
import Layout from 'gatsby-theme-aoi/src/layout/';

function IndexPage() {
  <Layout>
    <Typography variant="h3" component="h2">
      Welcome to $your_project
    </Typography>
  </Layout>
}
export default IndexPage;
```

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
│       ├── AppStateContext.tsx
│       ├── reducer.ts
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
