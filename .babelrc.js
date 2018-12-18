const env = require('./env')
const babelConfig = require('kms-web-config/lib/lib/babel')
module.exports = babelConfig(env)
