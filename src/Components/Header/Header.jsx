import {  NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <ul className="flex gap-5 justify-center items-center">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'mobiles'}>Mobiles</NavLink>
        <NavLink to={'laptops'}>Laptops</NavLink>
        <NavLink to={'users'}>Users</NavLink>
        <NavLink to={'users2'}>Users2</NavLink>
      </ul>
    </div>
  );
};

export default Header;
