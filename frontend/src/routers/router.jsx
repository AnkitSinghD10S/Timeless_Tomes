import { createBrowserRouter } from "react-router-dom";
import App  from "../App"
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path:"/",
            element: <Home/>
        },
        {
            path:"/orders",
            element: <h1>Order</h1>
        },
        {
            path:"/about",
            element: <h1>About</h1>
        },
        {
            path:"/cart",
            element: <h1>Cart</h1>
        }
    ]
  },
]);

export default router;