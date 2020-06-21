import * as yup from 'yup'

export const loginValid = yup.object().shape({
  username: yup.string().required('Hãy nhập Username').min(8, "Username tối thiểu 8 ký tự"),
  password: yup.string().required('Hãy nhập Password').min(8, 'Password tối thiểu 8 ký tự')
})