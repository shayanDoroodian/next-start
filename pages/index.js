import st from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<div className={st.mainHome}>
			<div className={st.homeBox}>
				<h1>HELLO</h1>
				<h2>Im Shayan</h2>
				<p>I created this sample website using coinstate api</p>
				<p>
					I have tried to use Next.js in this project and making some routes and
					SSR.
				</p>
				<p>Hope you enjoy it :)</p>

				<Link href='/coinList' className={st.btnBox}>
					See Coins
				</Link>
			</div>
		</div>
	);
}
