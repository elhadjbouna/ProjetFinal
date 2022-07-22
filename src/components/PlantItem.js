import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ title, category, image, price }) {
	return (
		<li className='lmj-article-item' onClick={() => handleClick}>
			<span className='lmj-article-item-price'>{price}€</span>
			<img className='lmj-article-item-cover' src={image} alt={`${title} cover`} />
			<span className="debordement">{title}</span>
			
		</li>
	)
}

export default PlantItem
