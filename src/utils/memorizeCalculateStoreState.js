import { objectComparator } from './objectComparator'

const store = {}

export function memorizeCalculateStoreState (key, object) {
  if (!store[key]) {
    store[key] = object

    return object
  }

  console.time(`Comporator executing time`)
  const result = objectComparator(object, store[key])
  console.timeEnd(`Comporator executing time`)

  if (!result) {
    store[key] = object
  } else {
    object = store[key]
  }

  return object
}