import fecha from 'fecha'

export function truncate(text, len = 100, elipsis = '...') {
  if (text.length > len) {
    return text.substr(0, len - elipsis.length) + elipsis
  }

  return text
}

export const quote = text => `“${text.trim()}”`

export function dateParser(dateObj) {
  if (!dateObj || !dateObj.date || !dateObj.month || !dateObj.year) return null
  return fecha.parse(
    `${dateObj.date} ${dateObj.month} ${dateObj.year}`,
    'D M YYYY',
  )
}
