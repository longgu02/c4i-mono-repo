import { NavLink } from 'react-router';

export function AppNav() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about" end>
        About
      </NavLink>
      <NavLink to="/chat" end>
        Chat
      </NavLink>
      <NavLink to="/milestone" end>
        Milestone
      </NavLink>
    </nav>
  );
}
