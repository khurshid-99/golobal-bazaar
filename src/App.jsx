import React from "react";
import { About, Home, NotFound } from "./components";
import { Route, Routes } from "react-router";
import AppLayOut from "./components/AppLayOut";

export const App = () => {

  


  return (
    <Routes>
      <Route path="/" element={<AppLayOut />}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};



// const routers = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     children: [
//       { path: "/", element: <App /> },
//       { path: "/privacy", element: <Privacy /> },
//       { path: "/terms", element: <Terms /> },
//       { path: "/contact", element: <Contact /> },
//       { path: "/about", element: <AboutUs /> },

//       { path: "*", element: <ThisPageIs404 /> },
//     ],
//   },
// ]);
