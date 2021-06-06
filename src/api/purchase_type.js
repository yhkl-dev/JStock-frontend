import request from '@/utils/request'

export function getPurchaseTypeList() {
  return request({
    url: '/purchase_type',
    method: 'get'
  })
}
