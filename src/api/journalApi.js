import axios from 'axios'

const journalApi = axios.create({
  baseURL: 'https://vue-demos-ff350-default-rtdb.firebaseio.com/'
})

// console.log( process.env.NODE_ENV )

export default journalApi