import { Navbar, Nav } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Navbar className='navbar navbar-expand-lg d-print-none mb-3 z-[20] fixed w-full' expand="lg">
      <div className='container-xl bg-white fixed top-0 h-14 w-full'>
        <div className='bg-white top-0 h-14 lg:pr-[38rem]  right-0 fixed'></div>
        <div className='border-t fixed top-14 border-gray-300 w-full z-[1] left-0 '></div>
      <div className='navbar-brand pr-14'>
        <Link href="/" className='no-underline text-black hover:no-underline'>Leberkasrechner Investors</Link>
      </div>
      <button onClick={handleShow} className="navbar-toggle-btn  fixed right-4 font-bold">
      <span className="navbar-toggler-icon"></span>

      </button>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-0">
        <ul className="navbar-nav leberkas-navbar w-full z-40 " >
                <li className={`nav-item ${router.pathname == "/" ? "active" : ""}`}>
                  <Link className={`nav-link ${router.pathname == "/" ? "active" : ""}`} href="/">
                    Home
                  </Link>
                </li>
                <li className={`nav-item ${router.pathname == "/team" ? "active" : ""}`}>
                  <Link className={`nav-link ${router.pathname == "/team" ? "active" : ""}`} href="/team">
                    Team
                  </Link>
                </li>
                <li className={`nav-item ${router.pathname == "/vision" ? "active" : ""}`}>
                  <Link className={`nav-link ${router.pathname == "/vision" ? "active" : ""}`} href="/vision">
                    Vision
                  </Link>
                </li>
                <div className='line'></div>
                </ul>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
          <Offcanvas show={show} onHide={handleClose} placement='top' className="w-full h-full">
          <Offcanvas.Header closeButton>
               <p className=' font-bold text-[1.3rem]  pr-14'>
        Leberkasrechner Investors
      </p>
          </Offcanvas.Header>
          <ul className="ml-1 text-[1.3rem] w-full z-40 " >
                <li className={`nav-item ${router.pathname == "/" ? "active" : ""}`}>
                  <Link className={`nav-link ${router.pathname == "/" ? "active" : ""}`} href="/">
                    Home
                  </Link>
                </li>
                <li className={`nav-item ${router.pathname == "/team" ? "active" : ""}`}>
                  <Link className={`nav-link ${router.pathname == "/team" ? "active" : ""}`} href="/team">
                    Team
                  </Link>
                </li>
                <li className={`nav-item ${router.pathname == "/vision" ? "active" : ""}`}>
                  <Link className={`nav-link ${router.pathname == "/vision" ? "active" : ""}`} href="/vision">
                    Vision
                  </Link>
                </li>
                </ul>
        </Offcanvas>
</>  
  );
}
