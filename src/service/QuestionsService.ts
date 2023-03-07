import axios from 'axios'

const API_URL = `https://opentdb.com/api.php?`

export const QuestionsService = {
  async getQuestions(amount = 1): Promise<any> {
    return axios.get(API_URL, {
      params: {
        amount,
      },
    })
  },
}
