import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Books from './components/Books'
import Catagories from './components/Catagories'
import NotFound from './components/NotFound'
function Layout() {
  return (
    <>
      <h1>Layout</h1>
      <Outlet />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
			<nav className="NavBar">
				<h1 className="main-header">Bookstore CMS</h1>
				<ul className="NavList">
					<li className="NavItem"><Link className="NavLink" to="/">Books</Link></li>
					<li className="NavItem"><Link className="NavLink" to="/catagories">Catagories</Link></li>
				</ul>
			</nav>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Books />} />
          <Route path="/catagories" element={<Catagories />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App