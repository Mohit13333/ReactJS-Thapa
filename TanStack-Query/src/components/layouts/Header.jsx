import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="shadow-md">
  <div className="container mx-auto max-w-screen-xl py-4 px-6 flex justify-between items-center">
    <div>
      <NavLink to="/">
        <img
          src="/th.jpeg"
          alt="Excellence logo"
          className="max-w-[50px] rounded-full"
        />
      </NavLink>
    </div>
    <nav>
      <ul className="flex space-x-8 text-lg font-medium text-blue-600">
        <li>
          <NavLink
            to="/"
            className="hover:text-blue-800 transition duration-300"
          >
            Home
          </NavLink>
        </li>
        {/* <li> */}
          {/* <NavLink
            to="/trad"
            className="hover:text-blue-800 transition duration-300"
          >
            About
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/trad"
            className="hover:text-blue-800 transition duration-300"
          >
            FetchOld
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rq"
            className="hover:text-blue-800 transition duration-300"
          >
            FetchRq
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
</header>

  )
}

export default Header
