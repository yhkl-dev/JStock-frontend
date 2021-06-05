import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export function getUserList() {
  return request({
    url: '/users',
    method: 'get'
  })
}

export function CreateUser(data) {
  return request({
    url: '/users',
    method: 'post',
    data
  })
}

export function DeleteUser(id) {
  return request({
    url: '/users/' + id,
    method: 'delete'
  })
}

export function UpdateUser(data) {
  return request({
    url: '/users/' + data.id,
    method: 'put',
    data
  })
}
