import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('token')
  if (jwtToken === undefined) {
    return <Redirect to="/" />
  }
  return <Route {...props} />
}

export default ProtectedRoute