import { API_URL } from './settings'

const fromApiResponseToTypes = apiResponse => {
  const { results = [] } = apiResponse
  return results
}

export default async function getTypes () {
  const resp = await fetch(`${API_URL}type`)
  const apiResponse = await resp.json()
  return fromApiResponseToTypes(apiResponse)
};
