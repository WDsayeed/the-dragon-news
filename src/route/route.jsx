import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLout from "../layout/NewsLout";
import News from "../Pages/News/News/News";
import LoginLayout from "../layout/loginLayout";
import Login from "../Pages/login/login/Login";
import Register from "../Pages/login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Pages/Terms/Terms";

const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:'/',
        element: <Navigate to="/category/0"></Navigate>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element: <Register></Register>
      },
      {
        path:'terms',
        element:<Terms></Terms>
      }
    ]
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
     
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
      },
    ],
  },
  {
    path: "news",
    element: <NewsLout></NewsLout>,
    children: [
      {
        path: ":id",
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
      },
    ],
  },
]);
export default router;
