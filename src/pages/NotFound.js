import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        Go to <NavLink to="/">HomePage</NavLink>.
      </p>
    </div>
  );
}
