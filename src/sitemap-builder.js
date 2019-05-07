require('babel-register')

const router = require('./Routes').default
const Sitemap = require('../').default

new Sitemap(router).build('https://my-site.ru').save('./sitemap.xml')
