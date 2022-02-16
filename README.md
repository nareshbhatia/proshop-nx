# ProShop Nx

A sample eCommerce app to show best practices in web development using Nx.

![Home Page](assets/screenshot-home.png)

## Tech Stack
- [Nx](https://nx.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [GraphQL](https://graphql.org/)
- [Apollo GraphQL](https://www.apollographql.com/)
- [Material UI](https://mui.com/)

## Development Build

```sh
# For a better developer experience, install the Nx CLI globally
npm install -g nx

# Install workspace dependencies
npm install

# Run the web app and the GraphQL back-end
nx run-many --target=serve --all
```

Point your browser to http://localhost:4200/ to bring up the home page.

## Production Build

First, build your app for production:

```sh
nx run-many --target=build --all --configuration=production
```

Then run the app in production mode:

```sh
nx run-many --target=serve --all --configuration=production
```

## Help

Visit the [Nx Documentation](https://nx.dev) to learn more.
