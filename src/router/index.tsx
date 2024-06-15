import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Home from "@/views/Home";
const FirstPage = lazy(() => import("@/views/FirstPage"))
const SecondPage = lazy(() => import("@/views/SecondPage"))

const routes = [
    {
        path: "/",
        element: <Navigate to="/home" />
    },
    {
        path: "/home",
        element: <Home />,
        children: [
            {
                path: "first",
                element: <FirstPage />
            },
            {
                path: "second",
                element: <SecondPage />
            }
        ]
    },
    {
        path: "*",
        element: <Home />
    }
]

export default routes