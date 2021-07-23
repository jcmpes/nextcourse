const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  images: {
    domains: ['final-project-web-x.s3.amazonaws.com', 'localhost'],
    loader: "imgix",
    path: ""
  }
})
