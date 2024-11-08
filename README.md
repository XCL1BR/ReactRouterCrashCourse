# React Router Crash Course

This project is a comprehensive crash course on React Router, designed to understand key hooks and components like `useParams`, `useLoaderData`, `Outlet`, `Link`, and `NavLink`. React Router is a library for routing in React applications, enabling dynamic navigation and URL manipulation without refreshing the page.

## Table of Contents
- [Features Covered](#features-covered)
- [Detailed Explanation of Each Feature](#detailed-explanation-of-each-feature)
  - [useParams](#useparams)
  - [useLoaderData](#useloaderdata)
  - [Outlet](#outlet)
  - [Link / NavLink](#link--navlink)


## Features Covered

This crash course covers the following React Router features:

1. **useParams** - For accessing URL parameters.
2. **useLoaderData** - For fetching data before rendering a route.
3. **Outlet** - For rendering nested routes.
4. **Link / NavLink** - For client-side navigation between routes.

## Detailed Explanation of Each Feature

### `useParams`
The `useParams` hook is used to access dynamic URL parameters in a route. It's especially useful in cases where you need to identify which item to fetch based on an ID in the URL.

**Example:**
```jsx
// In a route like `/users/:userId`, useParams allows you to access `userId`
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { userId } = useParams();
  return <h2>User ID: {userId}</h2>;
}
```
## Usage Scenario: 
If you have a route /products/:productId, useParams can extract productId from the URL so you can fetch data specifically for that product.

### `useLoaderData`
The `useLoaderData` hook is a part of data loading APIs introduced in React Router v6.4. It enables you to load data before rendering a route component. This allows for better data-fetching patterns and more control over loading states.
```
// In the route configuration
import { useLoaderData } from 'react-router-dom';

function ProductDetail() {
  const product = useLoaderData();
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}

// Loading data before rendering the component
const routes = [
  {
    path: "products/:productId",
    element: <ProductDetail />,
    loader: async ({ params }) => {
      return fetch(`/api/products/${params.productId}`).then(res => res.json());
    },
  },
];
```
## Usage Scenario:
Use `useLoaderData` when you want to ensure data is available as soon as a route component renders, e.g., fetching details for a specific product before loading a product detail page

## Outlet
The `Outlet` component is used for rendering nested routes in a parent route. It acts as a placeholder for child routes, allowing for dynamic rendering of nested components based on the URL

```
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* Renders child routes */}
    </div>
  );
}

// Route configuration with nested routes
const routes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "analytics", element: <Analytics /> },
      { path: "reports", element: <Reports /> },
    ],
  },
];
```

## Usage Scenario:
In a dashboard layout, you may have a parent route for /dashboard with child routes for /dashboard/analytics and /dashboard/reports. Outlet will dynamically render the relevant component based on the nested route.

### Link / NavLink
The Link and NavLink components are used for navigation within your app without refreshing the page. NavLink is similar to Link, but it also provides styling for active links, making it ideal for navigation menus.

```
Example (Link):


import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```
```
Example (NavLink):


import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" activeClassName="active-link">Home</NavLink>
      <NavLink to="/about" activeClassName="active-link">About</NavLink>
    </nav>
  );
}
```
## Usage Scenario: 
Use Link for regular links within your app, while NavLink is suitable for navigation menus where you want to highlight the active link.
