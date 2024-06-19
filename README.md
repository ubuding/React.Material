# React.Material

> A modular front-end framework

### Modules

> Divide all by module

```text
├─moduleName
    ├─components # Use via @/[module]/components
    │    XComponent
    │       - index.tsx
    │       - style.scss # if you need, Don't forget to style isolate
    │    ...
    ├─images # Use via @/[module]/images
    ├─locales # Translation files, lazy loading has been implemented
    │    en.json
    │    zh.json
    ├─pages
    │     - index.tsx
    │     - style.scss
    │     - page1.tsx
    │    ...
    ├─route.ts # Routing configuration files, automatic integration has been implemented
    ├─service.ts # Interface Request, Use via `@/[module]/service`
    ├─store.ts # State Management, Use via `@/[module]/store`
```

### Path Aliases

```text
  "@": path.resolve(__dirname, "../src/modules"),
  "#": path.resolve(__dirname, "../src/components"),
  layout: path.resolve(__dirname, "../src/layout"),
  style: path.resolve(__dirname, "../src/style"),
  assets: path.resolve(__dirname, "../src/assets"),
  i18n: path.resolve(__dirname, "../src/i18n.ts"),
  request: path.resolve(__dirname, "../src/request.ts"),
```

### Route Configuration

> You can use the integrated routing table to achieve the routing you want

```text
export default [
  {
    path: "/module",
    Component: lazy(() => import("@/[module]/pages")),
    # You can add any data when you need to process the route
    ...
    children: [
      {
        path: "",
        Component: lazy(() => import("@/[module]/pages/page1.tsx"))
        ...
      },
      ...
    ],
  },
];
```

### Directory Structure

```text
├─public
    ├─iconfont
    ├─fonts
    ├─images
    ...
├─src
    ├─assets
    ├─components
    ├─constant
    ├─layout
    ├─modules
    ├─style
    ├─utils
     ...
```
