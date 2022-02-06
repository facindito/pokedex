import { API_URL } from './settings'

const fromApiResponseToTypes = apiResponse => {
  const { results = [] } = apiResponse
  return results
}

export default async function getTypes () {
  return await fetch(`${API_URL}type`)
    .then(resp => resp.json())
    .then(fromApiResponseToTypes)
};
