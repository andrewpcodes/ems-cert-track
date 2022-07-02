import { useNavigate } from 'react-router-dom';
import '../../stylePages.css';
import icon from '../../../pagetitle-icon.svg';

const About = () => {
  let navigate = useNavigate();

  return (
    <div className='page'>
      <h1 className='pageTitle'>
          <img src={icon} className='pageIcon' alt='icon' />
          About 
      </h1>
      <button onClick={() => navigate(-1)}>Go back</button>
      <p>About</p>
    </div>
  )
}

export default About;