import { checkAuth } from '_utils/helpers'
import directRoute from './directRoute'
import { PAGE_TYPE } from '_constants'
const PrivateRoute = directRoute(() => checkAuth(), PAGE_TYPE.PRIVATE, '/login')
export default PrivateRoute