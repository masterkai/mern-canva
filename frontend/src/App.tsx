import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages";
import Layout from "./pages/Layout.tsx";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Templates from "./components/Templates";
import CreateDesign from "./components/CreateDesign";
import Main from "./pages/Main.tsx";
import { token_decode } from "./utils";

const userInfo = token_decode(localStorage.getItem("canva_token"));
function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: userInfo ? <Layout /> : <Index />,
			children: [
				{ path: "/", element: <Home /> },
				{ path: "/projects", element: <Projects /> },
				{ path: "/templates", element: <Templates /> },
			],
		},
		{
			path: "/design/create",
			element: <CreateDesign />,
		},
		{
			path: "/design/:design_id/edit",
			element: <Main />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
