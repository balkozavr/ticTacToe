import './CheckBox.scss';

export const CheckBox = ({ onChange, children }) => {
  return (
    <div className='checkbox-container'>
      <input type="checkbox" id='checkbox' onChange={onChange}/>
      <label htmlFor="checkbox">{children}</label>
    </div>
  );
};
