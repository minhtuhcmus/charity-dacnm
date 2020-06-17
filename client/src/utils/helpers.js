export const checkAuth = () => {
  return true
}

export const convertErrorYup = error => {
  if (error.name !== 'ValidationError') {
    return error
  }

  let errors = {}
  error.inner.forEach(err => {
    if (!errors[err.path]) {
      errors[err.path] = err.message
    }
  })

  return errors
}