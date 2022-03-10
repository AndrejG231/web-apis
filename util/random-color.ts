/**
 * Generate random dark color #
 */
export const randomColor = () => {
  var color = "#"
  for (var i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10)
  }
  return color
}

/**
 * takes @param {object of objects}, and maps color property to every 1st level nested object
 */
export const withRandomColor = <Items extends Record<string, object>>(
  items: Items
) => {
  type Colored = { [K in keyof Items]: Items[K] & { color: string } }

  return Object.entries(items).reduce(
    (acc, [key, item]): Colored => ({
      ...acc,
      [key]: { ...item, color: randomColor() },
    }),
    {} as Colored
  )
}
