import Link from 'next/link';
import { Navbar, Container } from 'react-bootstrap';
import Image from 'next/image'

import logo from "../img/WK.png"

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Image src={logo} width={40} height={40} />
                <Link passHref href="/">

                    <a className="navbar-brand light">
                        Wiki<span className='highlight'>Tech</span>
                    </a>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Navigation;