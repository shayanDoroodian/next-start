import { useRouter } from 'next/router';
import style from '../../styles/coinList.module.css';

const CoinList = ({ data }) => {
	const rout = useRouter();

	return (
		<>
			<div className={style.container}>
				{data.coins.map((coin) => (
					<div key={coin.id} className={style.container02}>
						<div className={style.glassmorphiccard}>
							<div className={style.contentBox}>
								<h3>{coin.name}</h3>
								<p>
									<img src={coin.icon} alt={coin.name} />
								</p>

								<span
									onClick={() => {
										rout.push(`/coinList/${coin.id}`);
									}}>
									Read More
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
export async function getStaticProps() {
	const res = await fetch('https://api.coinstats.app/public/V1/coins');
	const data = await res.json();

	return {
		props: {
			data: data,
		},
	};
}
export default CoinList;
