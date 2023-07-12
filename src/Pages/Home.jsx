import { BrowserRouter, Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaFolder, FaFolderOpen, FaFileDownload } from 'react-icons/fa'
import { images } from '../techlogos.js'

const Home = () => {
	return (
		<div className='relative'>
			{/* Folders */}
			<div className='text-white w-full h-[200px] absolute flex justify-end'>
				<div className='flex flex-col justify-center items-center cursor-pointer'>
					<FaFolder className='text-4xl hover:text-5xl mb-1' />
					<small>Portfolio</small>
				</div>
				<div className='group p-10 flex flex-col justify-center items-center cursor-pointer'>
					<FaFileDownload className='text-[#FFE100] text-4xl mb-1' />
					<small>Download CV</small>
				</div>
			</div>

			{/* //Profile */}
			<div className='flex flex-col items-center justify-center w-full h-screen'>
				<div id='container' className='flex flex-col justify-center items-center w-full h-screen'>
					<img
						src='/img/fotoperfil.png'
						alt='Foto de Perfil'
						className='w-48 h-48 rounded-full object-cover'
					/>
					<h1 className='text-3xl font-sans font-bold text-white text-4xl'>JoeDev</h1>
					<p className='font-sans text-white'>Frontend Developer</p>
					{/* Social Media */}
					<div className='group flex p-2'>
						<BrowserRouter>
							<Link to='https://www.linkedin.com/in/joe-dev/' target='_blank' className='pr-2 '>
								<FaLinkedin className='text-white text-3xl hover:text-[28px] hover:text-[#FFE100]' />
							</Link>
							<Link to='https://www.instagram.com/joedev.js/' target='_blank' className='pr-2 '>
								<FaInstagram className='text-white text-3xl hover:text-[28px] hover:text-[#FFE100]' />
							</Link>
						</BrowserRouter>
					</div>
				</div>
				{/* Gallery */}
				<div className='flex justify-center items-center w-1/3 absolute bottom-0 bg-gray-700 rounded-lg mb-6'>
					{images &&
						images.map((item) => (
							<div
								key={item.id}
								className={`py-4 px-2 w-[54px] h-auto hover:w-[48px] ${item.classes}`}
							>
								<img src={item.image} alt='' className='' />
							</div>
						))}
				</div>
			</div>
		</div>
	)
}

export { Home }
