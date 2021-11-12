import 'bootstrap/dist/css/bootstrap.css';

export default function NavBar() {
    return (
        <ul class="nav shadow-sm py-2 px-3 nav-pills nav-justified bg-light sticky-top">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#rap">
            Rap
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#pop">
            Pop
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#edm">
            Edm
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#r&b">
            R&B
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#rock">
            Rock
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#latin">
            Latin
            </a>
        </li>
        </ul>
    );
}
