import Nav from './Nav';
import style from '../styles/layout.module.css';
const Layout = ({ children }) => {
	return (
		<div className={style.mainContainer}>
			{' '}
			<Nav></Nav>
			{children}
		</div>
	);
};

export default Layout;
