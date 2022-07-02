
import { Link } from "react-router-dom";
import './footer.css';
import { BsFillAwardFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='footer'>
      <i className='footer-icon'><BsFillAwardFill size={30} /></i>
      <div><Link to='/about'><span className='footer-text'>About</span></Link></div>
      <div><Link to='/contactus'><span className='footer-text'>Contact Us</span></Link></div>
      <div><Link to='/help'><span className='footer-text'>Help</span></Link></div>
    </footer>
  );
}
 
export default Footer;