import { checkAuth } from '_utils/helpers'
import directRoute from './directRoute'
import { PAGE_TYPE } from '_constants'
const AuthRoute = directRoute(() => !checkAuth(), PAGE_TYPE.AUTH, '/')
export default AuthRoute