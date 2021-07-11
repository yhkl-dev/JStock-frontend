import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/v1/user/login',
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
    url: '/v1/user/logout',
    method: 'post'
  })
}

export function getUserList() {
  return request({
    url: '/v1/user',
    method: 'get'
  })
}

export function CreateUser(data) {
  return request({
    url: '/user',
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
