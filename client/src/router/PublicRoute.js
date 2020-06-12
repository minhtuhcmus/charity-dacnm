import { checkAuth } from '_utils/helpers'
import directRoute from './directRoute'
import { PAGE_TYPE } from '_constants'
const PublicRoute = directRoute(() => checkAuth(), PAGE_TYPE.PUBLIC, '/')
export default PublicRoute