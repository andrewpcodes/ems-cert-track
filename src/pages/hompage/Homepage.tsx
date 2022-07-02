import '../stylePages.css';
import icon from '../../pagetitle-icon.svg';

function Homepage() {
  return (
    <div className='page'>
      <h1 className='pageTitle'>
        <img src={icon} className='pageIcon' alt='icon' />
        Welcome 
      </h1>
      <p className='pageText'>
        Here is some test text
      </p>
      <div className='image-container'>
        <img src='burningmonk.jpg' className='image' alt='monk' />
        <div className='overlay'>
          <div className='caption'>
            A monk self-immolates in protest. (Vietnam - May 8, 1963)
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
