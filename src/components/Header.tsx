import { Link } from 'react-router-dom';

export default function Header() {
  return <header className="site-header"><div className="wrap"><nav aria-label="Primary navigation">
    <Link className="location-mark" to="/" aria-label="Laiba Ayyaz home"><span className="location-dot" aria-hidden="true" />Vancouver, BC</Link>
    <div className="navlinks">
      <a href="/#work">Work</a><a href="/#expertise">Expertise</a><a href="/#experience">Experience</a><a href="/#reviews">Reviews</a>
      <a className="talk" href="mailto:lybaayaz5@gmail.com">Let's talk ↗</a>
    </div>
  </nav></div></header>;
}