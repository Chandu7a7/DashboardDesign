import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Categories,
  CreateCategory,
  CreateProduct,
  CreateOrder,
  CreateUser,
  EditProduct,
  EditCategory,
  EditOrder,
  EditReview,
  Landing,
  Products,
  Orders,
  Users,
  Reviews,
  CreateReview,
  Login,
  Register,
  
} from "./pages";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
      {
        path: "/",
        element: <Landing />,
      },
     
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/create-product",
        element: <CreateProduct />,
      },
      {
        path: "/products/:id",
        element: <EditProduct />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/categories/create-category",
        element: <CreateCategory />,
      },
      {
        path: "/categories/:id",
        element: <EditCategory />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/orders/create-order",
        element: <CreateOrder />,
      },
      {
        path: "/orders/1",
        element: <EditOrder />,
      },

      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/create-user",
        element: <CreateUser />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/reviews/create-review",
        element: <CreateReview />,
      },
      {
        path: "/reviews/:id",
        element: <EditReview />,
      },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
