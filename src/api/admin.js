import request from '@/utils/request'

//notice
  export function getNotice_api(data) {
    return request({
      url: '/api/v1/admin/affiche',
      method: 'get',
      params: data
    })
  }
  export function addNotice_api(data) {
    return request({
      url: '/api/v1/admin/affiche',
      method: 'post',
      data
    })
  }
//manageShop
  export function getPostionList_api(data) {
    return request({
      url: '/api/v1/admin/area',
      method: 'get',
      params: data
    })
  }

  export function getIndustryList_api(data) {
    return request({
      url: '/api/v1/admin/storeclass',
      method: 'get',
      params: data
    })
  }

  export function addShop_api(data) {
    return request({
      url: '/api/v1/admin/store',
      method: 'post',
      data
    })
  }
  export function editShop_api(data) {
    return request({
      url: '/api/v1/admin/store',
      method: 'put',
      data
    })
  }
  export function getShop_api(data) {
    return request({
      url: '/api/v1/admin/store',
      method: 'get',
      params: data
    })
  }
  export function upDownShop(data) {
    return request({
      url: '/api/v1/admin/storeinfo',
      method: 'put',
      data
    })
  }
// manageSevice=>industryList
  export function addIndustry_api(data) {
    return request({
      url: '/api/v1/admin/storeclass',
      method: 'post',
      data
    })
  }
  export function deleteIndustry_api(data) {
    return request({
      url: '/api/v1/admin/storeclass',
      method: 'delete',
      data
    })
  }
  export function editIndustry_api(data) {
    return request({
      url: '/api/v1/admin/storeclass',
      method: 'put',
      data
    })
  }
  // 已有
  // export function getIndustryList_api(data) {
  //   return request({
  //     url: '/api/v1/admin/storeclass',
  //     method: 'get',
  //     params:data
  //   })
  // }
// auth
  export function getAuthList_api(data) {
    return request({
      url: '/api/v1/admin/admin',
      method: 'get',
      params: data
    })
  }
  export function deleteAuth_api(data) {
    return request({
      url: '/api/v1/admin/admin',
      method: 'delete',
      data: data
    })
  }
  export function addAuth_api(data) {
    return request({
      url: '/api/v1/admin/admin',
      method: 'post',
      data: data
    })
  }
  export function editAuth_api(data) {
    return request({
      url: '/api/v1/admin/admin',
      method: 'put',
      data: data
    })
  }
// 
  // ---------------------
export function fetchList(query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}