import axios from "axios"

export default class Services {
  static async get(params) {
    try {
      const response = await axios.get(params)
      return response.data
    } catch (e) {
      return e
    }
  }

  static async post(url, params) {
    try {
      const response = await axios.post(url, params)
      return response.data
    } catch (e) {
      return {
        sucesso: false,
        error: e,
      }
    }
  }

  static async put(url, params) {
    try {
      const response = await axios.put(url, params)
      return response.data
    } catch (e) {
      return {
        sucesso: false,
        error: e,
      }
    }
  }

  static async delete(params) {
    try {
      const response = await axios.delete(params)
      return response.data
    } catch (e) {
      return e
    }
  }
}
