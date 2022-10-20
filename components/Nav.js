import Link from 'next/link';
import style from '../styles/nav.module.css';
const Nav = () => {
	return (
		<div className={style.navbar}>
			<ul className={style.ulClass}>
				<li className={style.liClass}>
					<Link href='/'>home</Link>
				</li>
				<li className={style.liClass}>
					<Link href='/coinList'>coins</Link>
				</li>
				<li className={style.liClass}>
					<Link href='/contact'>contact</Link>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
