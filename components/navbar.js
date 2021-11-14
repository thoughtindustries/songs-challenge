import 'bootstrap/dist/css/bootstrap.css';

export default function NavBar() {
    return (
        <ul id="scrollspy" className="nav shadow-sm py-2 px-3 nav-pills nav-justified bg-light sticky-top">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#rap">
                Rap
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#pop">
                Pop
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#edm">
                Edm
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#r&b">
                R&B
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#rock">
                Rock
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#latin">
                Latin
                </a>
            </li>
        </ul>
    );
}
