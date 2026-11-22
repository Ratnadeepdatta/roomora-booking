
import React from 'react';
import { assets, cities } from '../assets/assets';
import heroImage from '../assets/heroImage.png';

const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen flex-col items-start justify-center
        bg-cover bg-center bg-no-repeat px-6 pt-24
        text-white md:px-16 lg:px-24 xl:px-32"
      style={{ backgroundImage: `url("${heroImage}")` }}
    >
      {/* Dark overlay for readable text */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full">
        <p className="mt-6 inline-block rounded-full bg-sky-500/70 px-4 py-2">
          The Ultimate Hotel Experience
        </p>

        <h1 className="mt-5 max-w-2xl text-3xl font-bold leading-tight
          md:text-5xl lg:text-6xl">
          Discover Your Perfect Gateway Destination
        </h1>

        <p className="mt-4 max-w-xl text-sm md:text-base">
          Unparalleled luxury and comfort await at the world's most
          exclusive hotels and resorts. Start your journey today.
        </p>

        <form
          className="mt-8 flex w-full max-w-5xl flex-col gap-4
            rounded-xl bg-white p-5 text-gray-700 shadow-xl
            md:flex-row md:items-end md:p-6"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="flex-1">
            <label htmlFor="destinationInput" className="block text-sm">
              Destination
            </label>
            <input
              list="destinations"
              id="destinationInput"
              type="text"
              placeholder="Where do you want to go?"
              required
              className="mt-2 w-full rounded border border-gray-300 px-3 py-2"
            />
            <datalist id="destinations">
              {cities.map((city, index) => (
                <option value={city} key={index} />
              ))}
            </datalist>
          </div>

          <div className="flex-1">
            <label htmlFor="checkIn" className="block text-sm">
              Check in
            </label>
            <input
              id="checkIn"
              type="date"
              required
              className="mt-2 w-full rounded border border-gray-300 px-3 py-2"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="checkOut" className="block text-sm">
              Check out
            </label>
            <input
              id="checkOut"
              type="date"
              required
              className="mt-2 w-full rounded border border-gray-300 px-3 py-2"
            />
          </div>

          <div className="w-full md:w-20">
            <label htmlFor="guests" className="block text-sm">
              Guests
            </label>
            <input
              id="guests"
              type="number"
              min="1"
              max="4"
              defaultValue="1"
              required
              className="mt-2 w-full rounded border border-gray-300 px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2
              rounded-lg bg-blue-600 px-6 py-3 text-white
              hover:bg-blue-700"
          >
            <img
              src={assets.searchIcon}
              alt=""
              className="h-5 w-5"
            />
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;



// import React from 'react'
// import { assets, cities } from '../assets/assets'
// import heroImage from '../assets/heroimage.png'

// export const Hero = () => {
//   return (
//     // <div className='flex flex-col items-start justify-center px-6 md:px-16 
//     // lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroimage.png")] 
//     // bg-no-repeat bg-cover bg-center h-screen'>
//     <div
//   style={{ backgroundImage: `url(${heroImage})` }}
//   className='flex flex-col items-start justify-center px-6 md:px-16 
//   lg:px-24 xl:px-32 text-white bg-no-repeat bg-cover bg-center h-screen'
// >
        
//         <p className='bg-[#49b9ff]/50 px-3.5 py-1 rounded-full mt-20'>
//         The Ultimate Hotelo Experience</p>
//         <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>
//             Discover Your Perfact Gateway Destination</h1>
//             <p className='max-w-130 mt-2 text-sm md:text-base'>
//                 Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.
// </p>
//  <form className='bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

//             <div>
//                 <div className='flex items-center gap-2'>
//                     <img src={assets.calenderIcon} alt="calender Icon" className='h-4'/>           
//                     <label htmlFor="destinationInput">Destination</label>
//                 </div>
//                 <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
//                 <datalist id='destinations'>
// {cities.map((city, index)=>(
//     <option value={city} key={index}/>
// ))}
//                 </datalist>
//             </div>

//             <div>
//                 <div className='flex items-center gap-2'>
//                     <img src={assets.calenderIcon} alt="calender Icon" className='h-4'/> 
//                     <label htmlFor="checkIn">Check in</label>
//                 </div>
//                 <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
//             </div>

//             <div>
//                 <div className='flex items-center gap-2'>
//                     <img src={assets.calenderIcon} alt="calender Icon" className='h-4'/> 
//                     <label htmlFor="checkOut">Check out</label>
//                 </div>
//                 <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
//             </div>

//             <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
//                 <label htmlFor="guests">Guests</label>
//                 <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
//             </div>

//             <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
//                 <img src={assets.searchIcon} alt="Search Icon" className='h-7'/> 
//                 <span>Search</span>
//             </button>
//         </form>
//     </div>
//   )
// }

// export default Hero