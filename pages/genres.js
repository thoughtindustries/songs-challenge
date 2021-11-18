import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Genres from '../components/genres';
import NavBar from '../components/navbar';

export default function GenresPage() {
  const [active, setActive] = useState('')

  return (
    <main >
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Songs</h1>
            <p className="lead text-muted">Songs are what move us</p>
          </div>
        </div>
      </section>
      <div className="bg-light" >
        <NavBar active={active}/>
        <div className="mx-4 position-relative" data-bs-spy="scroll" data-bs-target="#scrollspy" data-bs-offset="0" tabIndex="0" >
          <Genres active={active} setActive={setActive}/>
        </div>
      </div>
    </main>
  );
}
