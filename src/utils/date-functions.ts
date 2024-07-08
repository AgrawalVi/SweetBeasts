const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

// Format the date as "Month, Day, Year"
export const formatDate = (date: Date) => {
  console.log('formatDate', date)
  const newDate = new Date(date)
  const month = months[newDate.getMonth()]
  const day = newDate.getDate()
  const year = newDate.getFullYear()
  return `${month} ${day}, ${year}`
}
