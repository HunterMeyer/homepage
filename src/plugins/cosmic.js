import config from './config'
const Cosmic = require('cosmicjs')()

const bucket = Cosmic.bucket({
  slug: config.VUE_COSMIC_BUCKET,
  read_key: config.VUE_COSMIC_READ_KEY,
  write_key: config.VUE_COSMIC_WRITE_KEY
})

module.exports = bucket
