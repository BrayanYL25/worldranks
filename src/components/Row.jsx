import { Link } from 'react-router-dom'

export default function Row ({ img, alt, name, population, area, region }) {
  const dynamicPath = `${name}`

  return (
    <tr className='text-smoke'>
      <td className='flex justify-center my-3'>
        <Link to={dynamicPath}>
          <img
            src={img}
            alt={alt}
            className='w-[100px] h-auto rounded-lg my-0'
          />
        </Link>
      </td>
      <td className='w-[20%] align-top text-center text-base py-6'>{name}</td>
      <td className='align-top text-center text-base py-6'>{population}</td>
      <td className='align-top text-center text-base py-6 hidden xxs:table-cell'>
        {area}
      </td>
      <td className='align-top text-center text-base py-6 hidden xs:table-cell'>
        {region}
      </td>
    </tr>
  )
}
