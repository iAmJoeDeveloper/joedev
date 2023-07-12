import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const handleDragStart = (e) => e.preventDefault()

const items = [
	<img
		className='h-[50px]'
		src='./../../public/img/fotoperfil.png'
		onDragStart={handleDragStart}
		role='presentation'
		key={1}
	/>,
	<img
		src='./../../public/img/fotoperfil.png'
		onDragStart={handleDragStart}
		role='presentation'
		key={2}
	/>,
	<img
		src='./../../public/img/fotoperfil.png'
		onDragStart={handleDragStart}
		role='presentation'
		key={3}
	/>,
]

const Gallery = () => {
	return <AliceCarousel mouseTracking items={items} />
}

export { Gallery }
