import { API_URL } from './settings'

const fromApiResponseToTypes = apiResponse => {
  const { results = [] } = apiResponse
  return results
}

export default async function getGenerations () {
  return await fetch(`${API_URL}generation`)
    .then(resp => resp.json())
    .then(fromApiResponseToTypes)
};
