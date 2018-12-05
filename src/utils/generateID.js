export function generate_id () {
  function s4 () {
    return Math.floor((1 + Math.random()) * 0x10000)
  }

  return s4() + s4() + s4()
}