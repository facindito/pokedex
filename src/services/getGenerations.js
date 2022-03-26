import { API_URL } from './settings'

const fromApiResponseToTypes = apiResponse => {
  const { results = [] } = apiResponse
  return results
}

export default async function getGenerations () {
  const resp = await fetch(`${API_URL}generation`)
  const apiResponse = await resp.json()
  return fromApiResponseToTypes(apiResponse)
};
