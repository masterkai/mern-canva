import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyComponent from "./pages";

function App() {
const router = createBrowserRouter([
    { path: '/', element: <MyComponent /> },
]);

  return <RouterProvider router={router} />;
}

export default App
