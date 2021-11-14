import 'bootstrap/dist/css/bootstrap.css';
import Genres from '../components/genres';
import NavBar from '../components/navbar';

// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//   target: '#scrollspy-navbar'
// })
// style={{overflowY: "scroll", height: "max-content"}}
export default function GenresPage() {
  return (
    <main className="position-relative">
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Songs</h1>
            <p className="lead text-muted">Songs are what move us</p>
          </div>
        </div>
      </section>
      <div className="bg-light" >
        <NavBar />
        <div className="mx-4" data-bs-spy="scroll" data-bs-target="#scrollspy" data-bs-offset="0" tabindex="0">
          <Genres />
        </div>
      </div>
    </main>
  );
}
