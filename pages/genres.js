import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Genres from '../components/genres';
import NavBar from '../components/navbar';

// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//   target: '#scrollspy'
// })
// style={{overflowY: "scroll", height: "max-content"}}
export default function GenresPage() {
  // (function() {
  //   'use strict';
  
  //   var section = document.querySelectorAll(".section");
  //   var sections = {};
  //   var i = 0;
  
  //   Array.prototype.forEach.call(section, function(e) {
  //     sections[e.id] = e.offsetTop;
  //   });
  
  //   window.onscroll = function() {
  //     var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
  //     for (i in sections) {
  //       if (sections[i] <= scrollPosition) {
  //         document.querySelector('.active').setAttribute('class', ' ');
  //         document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
  //       }
  //     }
  //   };
  // })();
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
