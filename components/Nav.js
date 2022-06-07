import Genre from "./genre";
import { useState, useEffect, useRef} from "react";
import {GENRES} from './genres'
//found a npm module which links elements based on Id
import { Link } from "react-scroll";
export default function Nav() {
  //state which basically fixes the navbar sticky on scroll down
  const [fixed, setFix] = useState(false);
  //using useRef hook to identify the scroll intial 0 with no scroll
  const prevScrollY = useRef(0);
  
  useEffect(()=>{
    const setFixed =()=>{
      console.log("yyy",scrollY)
      if(prevScrollY.current < window.scrollY && !fixed){
        setFix(false)
      }
      if(prevScrollY.current > window.scrollY && fixed){
        setFix(true)
      }
}
  //added a event listen to identify the scroll  
  window.addEventListener("scroll",setFixed)
    return function unMount() {
      window.removeEventListener("scroll",setFixed, { passive: true });
    };
  })
   
  const linkItem = GENRES.map(item=> <Link activeClass = "active" className ="nav-link" smooth spy to={item}>{item[0].toLocaleUpperCase()}{item.slice(1)}</Link> )
  return (
    // Used Bootstrap sticky-top to stick the nav bar on scroll
  <nav class={!fixed ? "navbar sticky-top navbar-expand-lg navbar-light bg-light":"navbar navbar-expand-lg navbar-light bg-light"}>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        {/* //rendering the linkItem */}
      {linkItem}
      </div>
    </div>
  </div>
</nav>
);
    
   
}

