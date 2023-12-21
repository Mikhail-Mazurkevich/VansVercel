import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 max-container"
    >
      <div
      className="flex flex-1 flex-col">
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-indigo-600'> Super </span>
          <span className='text-indigo-600'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Explore Vans' Super Quality collection – where style meets precision. Unmatched comfort and durability in every piece, a testament to our commitment to excellence.</p>
        <p className="mt-6 lg:max-w-lg info-text">Our commitment to precision and excellence guarantees your satisfaction.</p>
        <div className="mt-11">
          <a href="#_" class="relative px-5 py-2 font-medium text-white group">
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12   bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700  group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
            <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8  translate-y-10 bg-purple-600 -rotate-12"></span>
            <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10   translate-y-8 bg-purple-400 -rotate-12"></span>
            <span class="relative">Button Text</span>
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
          <img 
          src={shoe8} 
          alt="shoe8" 
          width={570}
          height={520}
          className="object-contain"
          />
      </div>
    </section>
  )
}

export default SuperQuality