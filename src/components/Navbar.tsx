import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Біографія</Link></li>
      <li><Link to="/projects">Проекти</Link></li>
      <li><Link to="/contacts">Контакти</Link></li>
    </ul>
  </nav>
);

export default Navbar;
