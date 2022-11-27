import Client from './api'

export const GetDocuments = async () => {
  try {
    const res = await Client.get('/feed')
    return res.data
  } catch (error) {
    throw error
  }
}