import axios from 'axios'
import constants from '@/constants'

const url = `${constants.apiUrl}/tags`

class TagsServices {
  static async getTags() {
    return await axios.get(url, (res, err) => {
      if (res) {
        return res
      } else {
        return err
      }
    })
  }
}

export default TagsServices
