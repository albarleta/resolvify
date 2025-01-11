import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../components/Login";
import SignUpPage from "../components/Signup";
import { Layout } from "../layout/layout";
import MessageChat from "../components/Chat";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <LoginPage />
            },{
                path: '/signup',
                element: <SignUpPage />
            }, {
                path: "/message",
                element: <MessageChat />
            }
        ]
    },
]);