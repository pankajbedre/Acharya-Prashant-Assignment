import axios from 'axios'
import constants from '@/constants'

const url = `${constants.apiUrl}/faqs?language=hindi`

class FaqsServices {
  static async getFaqs() {
    return await axios.get(url, (res, err) => {
      if (res) {
        return res
      } else {
        return err
      }
    })
  }
}

export default FaqsServices
