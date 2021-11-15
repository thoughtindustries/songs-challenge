import { useState, useRef, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { debounce } from '../helpers/debouncer';
import { NavStateContext } from '../helpers/navStateContext';

const fixedNavStyles = (visible) => ({
    transition: 'all .2s ease-in-out',
    position: 'fixed',
    top: visible ? 0 : '-60px',
    zIndex: 100,
    height: '60px'
})

const genreClassName = (activeGenre, name) => `w-25 justify-content-center d-flex align-items-center text-decoration-none ${activeGenre === name ? 'bg-primary text-white' : ''} rounded h-100`

const NavBar = () => {
    const navRef = useRef()
    const { activeGenre, setActiveGenre } = useContext(NavStateContext)
    const [navFixed, setNavFixed] = useState(false);
    const [offset, setOffset] = useState();

    useEffect(() => {
        setOffset(navRef.current.offsetTop)
    }, [])

    const handleScroll = debounce(() => {
        const scrollPos = window.pageYOffset;

        if (scrollPos >= offset) {
            setNavFixed(true)
        } else {
            setNavFixed(false)
        }
    }, 1);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [handleScroll])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 shadow-sm" style={navFixed ? { ...fixedNavStyles(navFixed) } : { height: '60px', position: 'absolute' }} ref={navRef} id="nav">
            <div className="container-fluid h-100 d-flex align-items-stretch" style={{ margin: '0 5%' }}>
                <a href="#raps" className={genreClassName(activeGenre, 'rap')} onClick={(e) => setActiveGenre(e.target.name)} name="rap">
                    Rap
                </a>
                <a href="#pops" className={genreClassName(activeGenre, 'pop')} name="pop" onClick={(e) => setActiveGenre(e.target.name)}>
                    Pop
                </a>
                <a href="#edms" className={genreClassName(activeGenre, 'edm')} name="edm" onClick={(e) => setActiveGenre(e.target.name)}>
                    Edm
                </a>
                <a href="#r&bs" className={genreClassName(activeGenre, 'r&b')} name="r&b" onClick={(e) => setActiveGenre(e.target.name)}>
                    R&B
                </a>
                <a href="#rocks" className={genreClassName(activeGenre, 'rock')} name="rock" onClick={(e) => setActiveGenre(e.target.name)}>
                    Rock
                </a>
                <a href="#latins" className={genreClassName(activeGenre, 'latin')} name="latin" onClick={(e) => setActiveGenre(e.target.name)}>
                    Latin
                </a>
            </div>
        </nav>
    )
}

export default NavBar
