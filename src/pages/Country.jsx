import Header from '../components/Header'
import { useLoaderData, Link } from 'react-router-dom'

const parseCountry = (borders) => {
  return borders
    ?.filter(Boolean)
    .map(borderCountry => ({
      name: borderCountry.name.common,
      flag: borderCountry.flags.png,
      altFlag: borderCountry.flags.alt
    }))
}

export default function Country () {
  const country = useLoaderData()
  console.log(country.borders)
  const borders = parseCountry(country.borders)

  return (
    <main className='min-h-screen bg-midnight font-vietnampro'>
      <Header />
      <section className='w-[50%] pt-4 pb-10 mx-auto bg-midnight rounded-xl relative bottom-10 border-[0.2px] border-graphite flex flex-col items-center mb-5'>
        <img src={country.img} alt='Pais' className='w-[200px] mx-auto relative bottom-[50px] rounded-xl' />
        <h2 className='text-smoke text-2xl mt-[-30px]'>{country.name}</h2>
        <h3 className='text-smoke'>{country.oficial}</h3>

        <div className='flex text-smoke justify-around gap-7 my-3'>
          <div className='text-sm flex rounded-lg gap-2 py-2 px-4 bg-stone'>
            <p>Population</p>
            <p>{country.population}</p>
          </div>

          <div className='text-sm flex rounded-lg gap-2 py-2 px-4 bg-stone'>
            <p>Area(km<sup>2</sup>)</p>
            <p>{country.area}</p>
          </div>
        </div>

        <div className='w-[100%]'>
          <div className='flex justify-between px-3 py-5 border-t border-graphite'>
            <p className='text-graphite text-sm font-semibold'>Capital</p>
            <p className='text-smoke text-sm'>{country.capital}</p>
          </div>

          <div className='flex justify-between px-3 py-5 border-t border-graphite'>
            <p className='text-graphite text-sm font-semibold'>Subregion</p>
            <p className='text-smoke text-sm'>{country.subregion}</p>
          </div>

          <div className='flex justify-between px-3 py-5 border-t border-graphite'>
            <p className='text-graphite text-sm font-semibold'>Language</p>
            <p className='text-smoke text-sm'>{Object.values(country.languages).join(', ')}</p>
          </div>

          <div className='flex justify-between px-3 py-5 border-t border-graphite'>
            <p className='text-graphite text-sm font-semibold'>Currencies</p>
            <p className='text-smoke text-sm'>{country.currencies[Object.entries(country.currencies)[0][0]].name}</p>
          </div>

          <div className='flex justify-start items-center px-3 py-5 border-t border-graphite gap-3'>
            {
              borders && borders.map((border, index) => (
                <Link key={index} to={`/worldranks/${border.name}`}>
                  <img src={border.flag} alt={border.alt} className='w-[60px] rounded-md' />
                  <h5 className='text-xs text-center my-1 text-graphite font-semibold'>{border.name}</h5>
                </Link>
              ))
            }
          </div>
        </div>
      </section>
    </main>
  )
}
