import { list } from "postcss";
import Link from "../Link/Link";
import { FaBeer } from 'react-icons/fa'


const NavBar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/products', name: 'Products' },
        { id: 5, path: '/contact', name: 'Contact' }
      ];
      
    return (
        <nav>
            <FaBeer></FaBeer>
            <ul className="md:flex">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;