import request from 'superagent'

export function getKicks () {
  return request
    .get('/api/v1/shoes')
    .then(res => {
      return res.body
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
    })
}
