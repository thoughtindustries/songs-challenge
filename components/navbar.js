import 'bootstrap/dist/css/bootstrap.css';

export default function NavBar({active}) {
    return (
        <nav id="scrollspy" className="sticky-top">
        <ul className="nav shadow-sm py-2 px-3 nav-pills nav-justified bg-light ">
            <li className="nav-item">
                <a className={`nav-link ${active === 'rap' ? 'active': ''}`} aria-current="page" href="#rap">
                Rap
                </a>
            </li>
            <li className="nav-item">
                <a className={`nav-link ${active === 'pop' ? 'active': ''}`} href="#pop">
                Pop
                </a>
            </li>
            <li className="nav-item">
                <a className={`nav-link ${active === 'edm' ? 'active': ''}`} href="#edm">
                Edm
                </a>
            </li>
            <li className="nav-item">
                <a className={`nav-link ${active === 'r&b' ? 'active': ''}`} href="#r&b">
                R&B
                </a>
            </li>
            <li className="nav-item">
                <a className={`nav-link ${active === 'rock' ? 'active': ''}`} href="#rock">
                Rock
                </a>
            </li>
            <li className="nav-item">
                <a className={`nav-link ${active === 'latin' ? 'active': ''}`} href="#latin">
                Latin
                </a>
            </li>
        </ul>
        </nav>
    );
}
