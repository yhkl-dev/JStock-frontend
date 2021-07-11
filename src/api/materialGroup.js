import request from '@/utils/request'

export function getMaterialGroupList(data) {
  return request({
    url: '/v1/materialGroup',
    method: 'get',
    data
  })
}

