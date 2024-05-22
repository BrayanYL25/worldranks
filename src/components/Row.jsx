import { Link } from 'react-router-dom'

export default function Row ({ img, alt, name, population, area, region }) {
  const dynamicPath = `${name}`

  return (
    <tr className='text-smoke'>
      <td className='flex justify-center'>
        <Link to={dynamicPath}>
          <img src={img} alt={alt} className='w-[80px] rounded-lg my-3' />
        </Link>
      </td>
      <td className='text-center text-base'>{name}</td>
      <td className='text-center text-base'>{population}</td>
      <td className='text-center text-base'>{area}</td>
      <td className='text-center text-base'>{region}</td>
    </tr>
  )
}
