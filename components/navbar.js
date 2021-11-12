import 'bootstrap/dist/css/bootstrap.css';

export default function NavBar() {
    return (
        <ul class="nav shadow-sm nav-pills nav-justified bg-light sticky-top">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
            Rap
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">
            Pop
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">
            Edm
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">
            R&B
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">
            Rock
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">
            Latin
            </a>
        </li>
        </ul>
    );
}
