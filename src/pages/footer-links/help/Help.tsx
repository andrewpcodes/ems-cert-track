
import { useNavigate } from 'react-router-dom';
import '../../stylePages.css';
import icon from '../../../test.svg';

const Help = () => {
  let navigate = useNavigate();

  return (
    <div className='page'>
      <h1 className='pageTitle'>
        <img src={icon} className='pageIcon' alt='icon' />
        Help 
      </h1>
      <button onClick={() => navigate(-1)}>Go back</button>
      <p>Help</p>
    </div>
  )
}

export default Help;
