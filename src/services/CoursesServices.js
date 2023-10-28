import axios from 'axios'
import constants from '@/constants'

const url = `${constants.apiUrl}/series/optuser/course-series-eeb9d3`

class CourseSeries {
  static async getCourseSeries() {
    return await axios.get(url, (res, err) => {
      if (res) {
        return res
      } else {
        return err
      }
    })
  }
}

export default CourseSeries
