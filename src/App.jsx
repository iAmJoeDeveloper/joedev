import { Home } from './Pages/Home'

function App() {
	return (
		<>
			<div className='bg-gradient-to-r from-gray-800 to-black relative w-full z-10'>
				<img
					src='img/officebg.jpg'
					alt=''
					className='w-full h-full bg-cover bg-center absolute opacity-10 -z-10'
				/>

				<Home className='z-0' />
			</div>
		</>
	)
}

export default App

//bg-gradient-to-r from-black to-indigo-500 bg-opacity-90

//bg-[url("https://tailwindcomponents.com/gradient-generator/assets/header.a6837f08.webp")] w-full bg-cover bg-center
