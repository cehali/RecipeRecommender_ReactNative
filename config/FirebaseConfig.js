import * as Firebase from 'firebase'

let _database = null

const initFirebase = () => {
  const config = {
    apiKey: "AIzaSyCq4Pbu-ru3IzfVjTZCzHlHNZjPACvLADw",
    authDomain: "reciperecommender-2ff6b.firebaseapp.com",
    databaseURL: "https://reciperecommender-2ff6b.firebaseio.com",
    projectId: "reciperecommender-2ff6b",
    storageBucket: "reciperecommender-2ff6b.appspot.com",
    messagingSenderId: "679739068935"      
  }
  Firebase.database.enableLogging(true)
  Firebase.initializeApp(config)
}

export const getDatabase = () => {
  if (!_database) {
      initFirebase()
      _database = Firebase.database()
  }
  return _database
}