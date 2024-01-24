import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
function CityItem({ city }) {
	const formatDate = (date) =>
		new Intl.DateTimeFormat("en", {
			day: "numeric",
			month: "long",
			year: "numeric",
			weekday: "long",
		}).format(new Date(date));

	const { cityName, emoji, date, id, position } = city;
	return (
		<Link
			className={styles.cityItem}
			to={`${id}?lat=${position.lat}&lng=${position.lng}`}
		>
			<li>
				<span className={styles.emoji}>{emoji}</span>
				<h3>{cityName}</h3>
				<time className={styles.date}>{formatDate(date)}</time>
				<button className={styles.deleteBtn}>&times;</button>
			</li>
		</Link>
	);
}

export default CityItem;
