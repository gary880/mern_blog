
import './App.css'
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  redirect
} from "react-router-dom";
import Navbar from './components/nav';
import ErrorPage from './pages/error-page';
import Profile from './pages/profile';
import Posts from './pages/posts';
import PostPage from './pages/post-page';
import Editor from './pages/editor';
import LoginPage from './pages/login';
import EditPost from './pages/editPost';
import { AuthProvider } from './auth';

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader: () => AuthProvider.isAuthenticated,
    Component: Layout,
    children: [
      {
        index: true,
        Component: Posts,
        errorElement: <ErrorPage />,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: `post/:id`,
        Component: PostPage,
      },
      {
        path: "editor",
        loader: portectedLoader,
        Component: Editor,
      },
      {
        path: "editor/:id",
        loader: portectedLoader,
        Component: EditPost,
      },
      {
        path: "login",
        Component: LoginPage,
      },

    ],
  },
]);


function App() {
  return (<RouterProvider router={router} />);
}

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function portectedLoader() {
  if (!AuthProvider.isAuthed) {
    return redirect("/");
  }
  return null;
}

export default App
