import { useState, useEffect } from 'react';
import './styles.scss';
import { Button } from '..';

interface InputProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What type of input is it?
   */
  type?: 'text' | 'password';
  /**
   * Should input have a label text?
   */
  label?: string;
  /**
   * Descriptive string to describe input value
   */
  placeholder?: string;
  /**
   * Unique input identifier
   */
  name?: string;
  /**
   * How large should the Input be?
   */
  size?: 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  primary = false,
  type = 'text',
  label,
  placeholder,
  name,
  size = 'medium'
}: InputProps) => {

  
  // Input type state
  const [inputType, setInputType] = useState(type);
  
  // Listen for external changes
  useEffect(() => {
    setInputType(type);
  }, [type]);

  // Toggle password type
  const togglePassVisibility = () => {
    setInputType(current => (
      current === 'text' ? 'password' : 'text'
    ));
  };
  
  const mode = primary ? '--primary' : '--secondary';

  return (
    <div className='input-container'>
      {label && <label className={['input-label', `--${size}`].join(' ')} htmlFor={name}>{label}</label>}
      <div className='pass-container'>
        <input
          type={inputType}
          className={['input-styled', `--${size}`, mode].join(' ')}
          placeholder={placeholder}
          name={name}
        />
        { type === 'password' &&
          <Button onClick={togglePassVisibility}>
            { inputType === 'text' ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>
            }
          </Button>
        }
      </div>
    </div>
  );
};

