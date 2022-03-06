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

## Architecture

The ProShop app consists of two micro-frontends which are separate web apps
deployed at two different ports:

1. Catalog App: Displays the product catalog and allows the user to add products
   to the cart.
2. Cart App: Displays the cart and allows the user to manage it, i.e. add,
   delete and update items). Once the user is happy with the cart, they can
   place an order. (Note that this is a very simplified checkout process - there
   is no provision for collecting shipping and/or payment information.)

- Both micro-frontends talk to a GraphQL API called the `proshop-api`.
- Both micro-frontends share a common UI library called `ui-lib`.

## Development Build

Clone a fresh copy of the repo:

```sh
git clone https://github.com/nareshbhatia/proshop-nx.git
cd proshop-nx
```

Create environment variables for local development. To do this, create a file at
the root of your repo called `.env.local` and add the following variables to it.

```
NX_API_PORT=8080
NX_API_URL=http://localhost:8080
```

> Note: This file should not be checked into git. It is already added to
> .gitignore.

Now follow the steps below:

```sh
# For a better developer experience, install the Nx CLI globally
npm install -g nx

# Install workspace dependencies
npm install

# Run the web apps and the GraphQL back-end
nx run-many --target=serve --all
```

Open two tabs in your browser and point them to the following URLs:

1. http://localhost:3001/catalog: Catalog app home page
2. http://localhost:3002/cart: Cart app home page

## Production Build

First, build your app for production:

```sh
nx run-many --target=build --all --configuration=production
```

Then run the app in production mode:

```sh
nx run-many --target=serve --all --configuration=production
```

Open two tabs in your browser and point them to the following URLs:

1. http://localhost:3001/catalog: Catalog app home page
2. http://localhost:3002/cart: Cart app home page

## Building Docker images

> Note: If you have not installed Docker Desktop, install it now. See
> instructions [here](https://www.docker.com/get-started).

Find your machine's IP address on the local network (not the external Internet
address). For the instructions below, we will use 192.168.86.247 as the IP
address, please replace it with yours when you run through these steps.

> Note that this is a hack for catalog and cart containers to hit the GraphQL
> API and for the reverse-proxy to hit catalog and cart apps. Connecting to
> http:localhost from within the containers gives an ECONNREFUSED error!
> Docker's networking does not understand that we are referring to the machine's
> localhost and not the container's localhost.

```sh
ipconfig getifaddr en1 # for Mac
ipconfig /all          # for Windows
```

Before building docker images, edit `proxy/default.conf` and replace
`192.168.86.247` with your machine's IP address.

Now follow the steps below:

```sh
# Build docker images
docker build -f infrastructure/Dockerfile.api -t nareshbhatia/proshop-nx-api:1.0.0 .
docker build -f infrastructure/Dockerfile.catalog -t nareshbhatia/proshop-nx-catalog:1.0.0 .
docker build -f infrastructure/Dockerfile.cart -t nareshbhatia/proshop-nx-cart:1.0.0 .
docker build -f infrastructure/Dockerfile.proxy -t nareshbhatia/proshop-nx-proxy:1.0.0 .

# Verify that the images were created on the local machine
docker images -a

# Run the images
docker run -d --name proshop-nx-api -p 8080:8080 nareshbhatia/proshop-nx-api:1.0.0
docker run -d --name proshop-nx-catalog -p 3001:3001 -e NX_API_URL=http://192.168.86.247:8080 nareshbhatia/proshop-nx-catalog:1.0.0
docker run -d --name proshop-nx-cart -p 3002:3002 -e NX_API_URL=http://192.168.86.247:8080 nareshbhatia/proshop-nx-cart:1.0.0
docker run -d --name proshop-nx-proxy -p 80:80 -e CATALOG_URL=http://192.168.86.247:3001/catalog -e CART_URL=http://192.168.86.247:3001/cart nareshbhatia/proshop-nx-proxy:1.0.0
```

Run the application by hitting the reverse proxy at http://localhost/catalog.
You should be able to navigate from the catalog to the cart and back.

If all this works push your images to Docker Hub

```sh
docker login -u nareshbhatia --password-stdin
docker push nareshbhatia/proshop-nx-api:1.0.0
docker push nareshbhatia/proshop-nx-catalog:1.0.0
docker push nareshbhatia/proshop-nx-cart:1.0.0
docker push nareshbhatia/proshop-nx-proxy:1.0.0
```

## Running ProShop using Docker Compose

> Note: In the current setup, the client-side is not able to access Proshop API.
> Cart icon will not show up, and also you can't add items to the cart. (See
> issue #1).

```sh
docker-compose -f infrastructure/docker-compose.yaml up --detach
```

Run the application by hitting the reverse proxy at http://localhost/catalog.
You should be able to navigate from the catalog to the cart and back.

After testing, you can shut down Docker Compose using the command below:

```sh
docker-compose -f infrastructure/docker-compose.yaml down
```

## Running ProShop in a Kubernetes cluster

> Note: This does not work currently.

> Note: If you have not installed minikube, install it now. See instructions
> [here](https://minikube.sigs.k8s.io/docs/start/). Also you should have
> installed Docker Desktop (see instructions above).

- Start minikube

```sh
minikube start --driver docker
```

- Now apply YAML files to the minikube instance to deploy Proshop components:

```sh
kubectl apply -f infrastructure/k8s-api-config.yaml # ConfigMap
kubectl apply -f infrastructure/k8s-api.yaml        # API deployment & service
kubectl apply -f infrastructure/k8s-catalog.yaml    # Catalog app deployment & service
kubectl apply -f infrastructure/k8s-cart.yaml       # Cart app deployment & service
```

You can now run apps inside minikube:

```sh
minikube service catalog-service # terminal 1
minikube service cart-service    # terminal 2
```

Note that the terminals need to remain open for the webapp to run. Control-C
will stop the respective app.

## Help

Visit the [Nx Documentation](https://nx.dev) to learn more.
