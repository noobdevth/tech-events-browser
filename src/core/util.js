export function truncate(text, len = 100, elipsis = '...') {
  if (text.length > len) {
    return text.substr(0, len - elipsis.length) + elipsis
  }

  return text
}

export const quote = text => `“${text.trim()}”`
