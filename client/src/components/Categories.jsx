import { categories } from '../data/data'

const Categories = () => {
    return (
        <div className="m-auto m-w-[1520px] px-4 py-4">
            <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Trending Categories</h1>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2">
                {
                    categories.map((item) => {
                        return (
                            <div key={item.id} className="flex justify-center p-4 hover:scale-105 duration-300">
                                <img src={item.image} alt={item.name}
                                    className='object-cover rounded-xl w-40 h-10 cursor-pointer shadow-xl'
                                />
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Categories