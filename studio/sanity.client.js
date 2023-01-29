const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: `${projectId}`,
  dataset: `${dataset}`,
  apiVersion: Date(), // use current UTC date - see "specifying API version"!
  token: `${token}`, // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
  withCredentials: true,
  ignoreBrowserTokenWarning: true
})

export default client