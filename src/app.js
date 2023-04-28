const url =
  'http://61.246.34.128:7779/api/SearchLeadData?userid=abhinav.singh%40dayibpl.com&phoneno=9958735482'
const get = async () => {
  const res = await fetch(url, { mode: 'no-cors', method: 'POST' })
  const data = await res.json()
  console.log(data)
}
get()
