
import { useNavigate } from 'react-router-dom';
import '../../stylePages.css';
import icon from '../../../test.svg';

const ContactUs = () => {
  let navigate = useNavigate();

  return (
    <div className='page'>
      <h1 className='pageTitle'>
        <img src={icon} className='pageIcon' alt='icon' />
        Contact Us 
      </h1>
      <button onClick={() => navigate(-1)}>Go back</button>
      <p>Contact Us</p>
    </div>
  )
}

export default ContactUs;