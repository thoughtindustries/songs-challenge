import 'bootstrap/dist/css/bootstrap.css';
import Genres from '../components/genres';
import NavBar from '../components/NavBar';
import NavState from '../helpers/navStateContext';

export default function GenresPage() {
  return (
    <main className="w-100"> 
    <NavState> 
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Songs</h1>
            <p className="lead text-muted">Songs are what move us</p>
          </div>
        </div>
      </section>
        <NavBar />
      <div className="bg-light">
        <Genres />
      </div>
      </NavState>
    </main>
  );
}
