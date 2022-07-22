import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ title, category, image, price }) {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick}>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={image} alt={`${title} cover`} />
			<span className="debordement">{title}</span>
			
		</li>
	)
}

export default PlantItem
