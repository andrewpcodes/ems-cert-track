import './header.css';
import { BsFillAwardFill } from 'react-icons/bs';

function Header() {
  return (
    <div className='header'>
      <span className='icon' ><BsFillAwardFill size={40} /></span>
      <header className='text'>EMS Certification Tracking</header>
    </div>
  );
}
 
export default Header;