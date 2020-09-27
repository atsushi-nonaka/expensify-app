import * as firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/database'
import 'firebase/storage'
import moment from 'moment'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database as default }

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     })

// database.ref('expenses').push({
//     description: 'Gum',
//     note: 'This is Gum',
//     amount: 1500,
//     createdAt: moment(0).unix()
// })


// database.ref('notes/-MHurtvAzmFT6RMmtfmF').remove()
// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native'
// })


// database.ref().on('value', (snapshot) => {
//     const data = snapshot.val()
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
// })

// database.ref().update({
//     name: 'Nana Hatakenaka',
//     age: 27
// })

// fetch
// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data', 0)
//     })

//追加機能
// database.ref().set({
//     name: 'Atsushi Nonaka',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Rakus'
//     },
//     isSingle: true,
//     location: {
//         city: 'Fujisawa',
//         country: 'Japan'
//     }
// }).then(() => {
//     console.log('date is saved')
// }).catch((e) => {
//     console.log('This failed', e)
// })

// //更新機能
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seatle'
// })

// database.ref('isSingle').set(null)
//削除機能
// database.ref('isSingle').remove()
//         .then(() => {console.log('data is removed')})
//         .catch(() => {console.log('This failed')})

// database.ref('age').set(27)
// database.ref('location/city').set('Kanagawa')
// database.ref('attributes').set({
//     height: 173.0,
//     weight: 60.5
// }).then(() => {
//     console.log('date is saved')
// }).catch((e) => {
//     console.log('Error desu: ', e)
// })


