import Token from 'js/models/Token'
import Database, {Metadata} from './Database'


let metadata = new Metadata()

export default async function initializeDatabase() {
  metadata.register(Token)
  await Database.open(metadata)
}
