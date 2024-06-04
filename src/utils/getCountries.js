import quantityParser from './quantityParser'

export default async function getCountries () {
  try {
    const res = await fetch('https://countryinfoapi.com/api/countries')
    const countries = await res.json()

    return countries?.map(({ flag, name, population, region, area, subregion, languages, currencies, capital, borders, independent, unMember }) => ({
      id: crypto.randomUUID(),
      img: flag,
      alt: `${name}'s flag`,
      name,
      // oficial: name.official,
      population,
      capital,
      borders: borders?.map(border => countries?.find(({ fifa }) => fifa === border)),
      region,
      subregion,
      area: quantityParser(area),
      languages,
      currencies,
      independent,
      unMember
    }))
  } catch (error) {
    console.error(error)
  }
}
