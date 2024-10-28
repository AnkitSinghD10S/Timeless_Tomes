import { createBrowserRouter } from "react-router-dom";
import App  from "../App"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path:"/",
            element: <h1>Home</h1>
        },
        {
            path:"/order",
            element: <h1>Order</h1>
        },
        {
            path:"/about",
            element: <h1>About</h1>
        }
    ]
  },
]);

export default router;