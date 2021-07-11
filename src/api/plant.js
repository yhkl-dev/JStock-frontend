import request from '@/utils/request'

export function CreateMaterial(data) {
  return request({
    url: '/v1/plant',
    method: 'post',
    data
  })
}

export function getPlantList(data) {
  return request({
    url: '/v1/plant',
    method: 'get'
  })
}

export function getPlantTechList(params) {
  return request({
    url: '/v1/plant/plantTech',
    method: 'get',
    params
  })
}
