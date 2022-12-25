/**
 * Очищает обеъект от полей содержащих null и undefined
 * возвращает новый объект
 * @param {*} obj 
 * @returns 
 */
const clearObject  = (obj) => {
  return Object.fromEntries(Object.entries(obj).filter(([key, value]) => {
    return value !== null && value !== undefined
  }))
}

export default clearObject
