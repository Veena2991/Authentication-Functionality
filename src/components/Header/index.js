// Write your JS code here
import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="nav-menu">
    <Link to="/" className="nav-link">
      <li>Home</li>
    </Link>
    <Link to="/about" className="nav-link">
      <li>About</li>
    </Link>
  </ul>
)

export default withRouter(Header)
