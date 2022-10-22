import { useRouter } from 'next/router';
import style from '../../styles/singleCoin.module.css';

const CoinList = ({ data }) => {
	const route = useRouter();
	const item = data.coins.find((item) => item.id === route.query.coinId);

	return (
		<div className={style.mainSingleCoin}>
			<div className={style.singleCoinDesc}>
				<img src={item.icon} alt='' />

				<h1>{item.name}</h1>
				<p>availableSupply : {item.availableSupply}</p>
				<p>marketCap : {item.marketCap}</p>
				<p>rank : {item.rank}</p>
				<p>totalSupply : {item.totalSupply}</p>
				<p>
					website : <a href={item.websiteUrl}>{item.websiteUrl}</a>
				</p>
				<p>{item.price} $</p>
			</div>
		</div>
	);
};

export async function getServerSideProps() {
	const res = await fetch('https://api.coinstats.app/public/V1/coins');
	const data = await res.json();
	return {
		props: {
			data: data,
		},
	};
}
export default CoinList;
