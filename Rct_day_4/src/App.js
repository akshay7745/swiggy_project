import React from "react";
import ReactDOM from "react-dom/client";
import * as obj from "./components/Header";

/*
 *  here * is showing that import all components from that directory and I am storing all them in obj object
 * so while using it I can destructure it and use any where but keep in mind all exports should be named export
 * from that directory
 *******************************
 */
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Contact from "./components/Contact";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantData from "./components/RestaurantData";
import Profile from "./components/ClassComponent";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import store from "./utils/store";
const { Header, Title } = obj;
const About = lazy(() => import("./components/About"));
const App = () => {
  return (
    <Provider store={store}>
      <div className="relative">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading... please wait</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
        // in children never use /demo because the react will think like it is a new path
        // like url/demo and we have create chidren of contact so we directly write name of path
        children: [
          { path: "demo", element: <Profile name="Akshay Patil" num={108} /> },
        ],
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantData />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
