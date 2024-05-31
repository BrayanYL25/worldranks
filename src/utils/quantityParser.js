export default function quantityParser(quantity) {
    return String(quantity)
        .split('')
        .reverse()
        .map((el, index) => {
            if (index%3 === 0 && index !== 0) {
                return el + ','
            }
            return el
        })
        .reverse()
        .join('')
}
