const fetch = require('node-fetch')

async function Fetch() {
  try{
    const res = await fetch('https://api.douban.com/v2/movie/1291843');
    console.log(res)
  }catch(err) {
    console.log(err)
  }
}
Fetch()
// async function getData() {
//   try{
//     let res = await Fetch();
//     console.log(res.json())
//   }catch(err) {
//     console.log(err)
//   }
// }

// getData()

