module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/demo_vue_compoent" : "/",
  presets: [
    '@vue/app'
  ]
}
