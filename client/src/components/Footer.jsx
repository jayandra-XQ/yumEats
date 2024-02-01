import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'


const Footer = () => {
    return (
        <div className="m-w-[1520px] m-auto px-4 py-2 bg-[#24262b]">
            <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
                <div>
                    <h1 className='w-full text-3xl font-bold text-orange-500'>YumEats</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iure ducimus nobis quaerat sapiente accusamus suscipit nulla maxime libero a.
                    </p>

                    <div className="flex justify-between md:w-[75%] my-6">
                        <FaFacebookSquare size={30} />
                        <FaInstagram size={30} />
                        <FaTwitterSquare size={30} />
                        <FaGithubSquare size={30} />
                        <FaDribbbleSquare size={30} />
                    </div>
                </div>

                <div className="lg:col-span-2 flex justify-between mt-6">
                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm '>New York</li>
                            <li className='py-2 text-sm '>India</li>
                            <li className='py-2 text-sm '>USA</li>
                            <li className='py-2 text-sm '>Germany</li>

                        </ul>
                    </div>


                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm '>Norway</li>
                            <li className='py-2 text-sm '>Canada</li>
                            <li className='py-2 text-sm '>UK</li>
                            <li className='py-2 text-sm '>Netherland</li>

                        </ul>
                    </div>


                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm '>Argentina</li>
                            <li className='py-2 text-sm '>Pakistan</li>
                            <li className='py-2 text-sm '>Japan</li>
                            <li className='py-2 text-sm '>China</li>

                        </ul>
                    </div>

                    <div>
                        <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                        <ul>
                            <li className='py-2 text-sm '>Argentina</li>
                            <li className='py-2 text-sm '>Pakistan</li>
                            <li className='py-2 text-sm '>Japan</li>
                            <li className='py-2 text-sm '>China</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer