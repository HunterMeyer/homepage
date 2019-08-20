import config from './config'
const Cosmic = require('cosmicjs')()

const bucket = Cosmic.bucket({
  slug: config.COSMIC_BUCKET,
  read_key: config.COSMIC_READ_KEY,
  write_key: config.COSMIC_WRITE_KEY
})

module.exports = bucket
