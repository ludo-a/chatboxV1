import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAggZcOJW3ahOernFtba45ZfYX7nn-kZZo",
    authDomain: "chatbox-app-8c07b.firebaseapp.com",
    databaseURL: "https://chatbox-app-8c07b-default-rtdb.europe-west1.firebasedatabase.app",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base

// {
//     "rules": {
//       ".read": "now < 1623189600000",  // 2021-6-9
//       ".write": "now < 1623189600000",  // 2021-6-9
//     }
// }