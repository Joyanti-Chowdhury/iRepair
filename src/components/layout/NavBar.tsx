import {NavLink} from 'react-router-dom';
import { Button } from '../ui/button';

const NavBar = () => {
    return (
        <header className='bg-red-500 h-16 '>
         <nav className='w-full max-w-[1200px] mx-auto bg-green-500'>
         <span>iRepair</span>
          <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
           <Button>
           <NavLink to="/login">Login</NavLink>
           </Button>
          </ul>
         </nav>
        </header>
    );
};

export default NavBar;