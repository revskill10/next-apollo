//const not_now = !process.env.NOW_REGION
//const mobile_host = not_now ? 'm.ihs.edu.vn' : process.env.MOBILE_HOST
module.exports = {
  'process.env.NOW_REGION': process.env.NOW_REGION,
  'process.env.NODE_ENV': process.env.NODE_ENV,
}
