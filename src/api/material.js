import request from "@/utils/request";

export function createMaterial(data) {
  return request({
    url: "/v1/material",
    method: "post",
    data
  });
}

export function getMaterialList(params) {
  return request({
    url: "/v1/material",
    method: "get",
    params
  });
}

export function getImportantLevel() {
  return request({
    url: "/v1/material/importantLevel",
    method: "get"
  });
}
