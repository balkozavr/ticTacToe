import './Button.scss';
export const Button = ({btnType, ...props}) => {
	return (
		<button className={`btn ${btnType}`} {...props}></button>
	);
}
