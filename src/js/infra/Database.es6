const DB_NAME = 'test_db'
const LATEST_VERSION = 2


class Database {
  constructor() {
    this.db = null
  }

  open(metadata) {
    return new Promise((resolve, reject) => {
      const req = window.indexedDB.open(DB_NAME, LATEST_VERSION)

      req.onsuccess = (e) => {
        console.log('open indexedDB succeeded !!')
        console.log(e)
        this.db = e.target.result
        resolve(this.db)
      }

      req.onerror = (e) => {
        console.log('open indexedDB failed...')
        reject(e)
      }

      req.onupgradeneeded = (e) => {
        const { oldVersion, newVersion } = e
        const { result, transaction } = e.target

        this.db = result

        metadata.migrate(this.db, transaction, oldVersion, newVersion)
      }
    })
  }

  save(obj) {
    const storeName = obj.constructor.storeName
    const json = obj.toJS()

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([storeName], 'readwrite')

      transaction.oncomplete = (e) => {
        console.log('save transaction completed !!')
        resolve(e)
      }

      transaction.onerror = (e) => {
        console.error('save transaction failed...')
        reject(e)
      }

      const objectStore = transaction.objectStore(storeName)
      const putRequest = objectStore.put(json)

      putRequest.onsuccess = (e) => {
        console.log('put request succeeded !!')
      }

      putRequest.onerror = (e) => {
        console.error('put request failed...')
        console.error(e)
      }
    })
  }

  get(obj) {
    const storeName = obj.constructor.storeName

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([storeName])

      transaction.oncomplete = (e) => {
        console.log('get transaction completed !!')
      }

      transaction.onerror = (e) => {
        console.error('get transaction failed...')
        reject(e)
      }

      const objectStore = transaction.objectStore(storeName)
      const getRequest = objectStore.get(obj[obj.constructor.keyPath])

      getRequest.onsuccess = (e) => {
        console.log('get request succeeded !!')
        resolve(e.target.result)
      }

      getRequest.onerror = (e) => {
        console.error('get request failed...')
      }
    })
  }

  delete(obj) {
    const storeName = obj.constructor.storeName

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([storeName], 'readwrite')

      transaction.oncomplete = (e) => {
        console.log('delete transaction completed !!')
        resolve(e)
      }

      transaction.onerror = (e) => {
        console.error('delete transaction failed...')
        reject(e)
      }

      const objectStore = transaction.objectStore(storeName)
      const delRequest = objectStore.delete(obj[obj.constructor.keyPath])

      delRequest.onsuccess = (e) => {
        console.log('delete request succeeded !!')
      }

      delRequest.onerror = (e) => {
        console.error('delete request failed...')
      }
    })
  }
}


export class Metadata {
  constructor() {
    this.models = []
  }

  register(model) {
    this.models.push(model)
  }

  migrate(db, transaction, oldVersion, newVersion) {
    for(const model of this.models) {
      const { storeName, keyPath, indexes } = model
      let objectStore = null

      if(!db.objectStoreNames.contains(storeName)) {
        console.log(`create objectStore:${storeName}`)
        objectStore = db.createObjectStore(storeName, { keyPath })
      } else {
        objectStore = transaction.objectStore(storeName)
      }

      for(const [name, keys, options] of indexes) {
        if(!objectStore.indexNames.contains(name)) {
          objectStore.createIndex(name, keys, options)
          console.log(`create index ${storeName}/${name}`)
        }
      }
    }
  }
}

export default new Database()
