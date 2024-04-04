import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="Layout">
    <h1>Ma super app</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about/Romain">About</Link>
        <Link to="/todos">Todos</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
