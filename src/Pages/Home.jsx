import { BrowserRouter, Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaFolder, FaFolderOpen, FaFileDownload } from 'react-icons/fa'
import { images } from '../techlogos.js'
import { motion } from 'framer-motion'

const Home = () => {
	return (
		<div className='relative'>
			<div>
				{/* Folders */}
				<div className='text-white w-full h-[200px] absolute flex justify-end'>
					<motion.div
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
						drag
						dragConstraints={{ top: -50, left: -1650, right: 100, bottom: 700 }}
						dragElastic={0}
						dragMomentum={false}
						className='flex flex-col justify-center items-center cursor-pointer'
					>
						<FaFolder className='text-4xl' />
						<small>Portfolio</small>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						drag
						dragConstraints={{ top: -50, left: -1750, right: 0, bottom: 700 }}
						dragElastic={0}
						dragMomentum={false}
						className='group p-10 mr-10 flex flex-col justify-center items-center cursor-pointer'
					>
						<FaFileDownload className='text-[#FFE100] text-4xl mb-1' />
						<small>Download CV</small>
					</motion.div>
				</div>

				{/* //Profile */}
				<div className='flex flex-col items-center justify-center w-full h-screen'>
					<div id='container' className='flex flex-col justify-center items-center w-full h-screen'>
						<motion.img
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.9 }}
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
								<motion.div
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
									key={item.id}
									className={`py-4 px-2 w-[54px] h-auto  ${item.classes}`}
								>
									<img src={item.image} alt='' className='' />
								</motion.div>
							))}
					</div>
				</div>
			</div>
		</div>
	)
}

export { Home }
