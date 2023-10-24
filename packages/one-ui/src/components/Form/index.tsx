import { Input } from '..';
import './styles.scss';

interface FormProps {
  title?: string;
  subTitle?: string;
}

/**
 * User Modal component
 */
export const Form = ({
  title,
  subTitle
}: FormProps) => {

  return (
    <div className="container">
      <div className="title">
        <h1>{title}</h1>
        <h2>{subTitle}</h2> 
      </div> 
      <div className="data">
        <div className="input">
          <Input type='text' placeholder='Email' name='email' size='large'></Input>
        </div>
        <div className="input">
          <Input type='password' placeholder='Password' name='password' size='large'></Input>
        </div>
        <div className="checkbox">
          <input className='checkbox' type="checkbox"></input><span>Remember Me</span>
        </div>
      </div>
    </div> 
  );
};
