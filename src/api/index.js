import axios from 'axios'
import isp from './isp'

const ispApi = isp(axios)

export { ispApi }