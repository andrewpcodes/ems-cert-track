import { Link } from "react-router-dom";
import { setFlagsFromString } from "v8";
import '../stylePages.css';
import icon from '../../pagetitle-icon.svg';

function Recertification() {
  return (
    <div className='page'>
      <h1 className='pageTitle'> 
        <img src={icon} className='pageIcon' alt='icon' />
        Starting Your Recertification
      </h1>
      <div className='image-container-large'>
        <img src="recert.jpg" className='image' alt='somestockguy' />
        <div className='overlay'>
          <div className='caption'></div>
        </div>
      </div>
      <div>
        <article className='article'>
          <h1> Recertification by Exam</h1>
          <p className='paragraph'>
            {" "}
            Starting your recertification can be as easy as taking an exam
            without having to do continuing education. All that is needed is
            to complete a recertfcation by Exam application and to pay an exam
            fee. You are allowed one attempt between a year prior to your
            expiration date and your expiration date.
          </p>
          <h1>Continuing Education</h1>
          <p className='paragraph'>
            The EMT National Continued Competency Program (NCCP) requires 40
            total hours of continuing education. There are three components in
            education that are required to reach the 40 hours. A national
            component, a local/state component, and a individual component
          </p>
          <h1>National Component: 20 hours</h1>
          <p className='paragraph'>
            The National Component is 20 hours of continuing education that is
            required for EMTs to complete. EMTs are able to use up to a
            maxiumum of 7 hours of distrubitibe education. Examples include
            online courses, jounral articles, and videos.{" "}
          </p>

          <table className='table'>
            <tr className='row'>
              <td className='cell'><h3> Local/State component - 10 Hours </h3></td>
              <td className='cell'><h3> Individual Component - 10 Hours </h3></td>
            </tr>
            <tr className='row'>
              <td className='cell'><h3> Airway/Respiration/Ventilation - 1.5 Hours </h3></td>
              <td className='cell'><h3> Medical - 6 Hours </h3></td>
            </tr>
            <tr className='row'>
              <td className='cell'><h3> Operations - 5 Hours </h3></td>
              <td className='cell'><h3> Cardiovascular - 6 Hours </h3></td>
            </tr>
          </table>
        </article>
      </div>
    </div>
  );
}

export default Recertification;
