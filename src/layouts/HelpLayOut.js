import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayOut() {
  return (
    <div className="help-layout">
      <h2>Website help</h2>
      <p>loream</p>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
