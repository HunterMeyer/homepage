const Cosmic = require('cosmicjs')()
const bucket = Cosmic.bucket({
  slug: process.env.VUE_APP_COSMIC_BUCKET,
  read_key: process.env.VUE_APP_COSMIC_READ_KEY,
  write_key: process.env.VUE_APP_COSMIC_WRITE_KEY
})
console.log(process.env)
module.exports = bucket
