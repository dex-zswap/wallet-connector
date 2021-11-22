
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./wallet-connector.cjs.production.min.js')
} else {
  module.exports = require('./wallet-connector.cjs.development.js')
}
