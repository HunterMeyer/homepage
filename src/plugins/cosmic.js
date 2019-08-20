const Cosmic = require('cosmicjs')()

const bucket = Cosmic.bucket({
  slug: process.env.VUE_COSMIC_BUCKET,
  read_key: process.env.VUE_COSMIC_READ_KEY,
  write_key: process.env.VUE_COSMIC_WRITE_KEY
})

module.exports = bucket
