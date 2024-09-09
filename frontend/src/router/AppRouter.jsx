import App from "@/App";
import { CreatePage } from "@/pages/CreatePage";
import { ListPage } from "@/pages/ListPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <ListPage />
            },
            {
                path: "/create",
                element: <CreatePage />,
            }, 
        ]
    }, 
    
]);

export default router;