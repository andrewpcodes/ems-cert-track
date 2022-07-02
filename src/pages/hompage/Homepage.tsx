import '../stylePages.css';
import icon from '../../test.svg';

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
      <img src='burningmonk.jpg' className='monk' alt='monk' />
    </div>
  );
}

export default Homepage;
