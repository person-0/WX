import request from './request.js';

const token = wx.getStorageSync('token');
/**
 * 
 * @param {String} code 
 */
async function getToken(code){

  let res = await request.post('/api/v2/member/login', { code });

  if(res.error !== ''){
    return wx.showModal( {title: '提示', content: res.error, showCancel: false, } );
  } 

  wx.setStorageSync('token', res.data.token);
  return res.data.token;
}

/**
 * 
 * @param {Object} params 
 */
async function setUserInfo(params){

  let res = await request.post('/api/v2/member/memberinfo', params, {
      'token': wx.getStorageSync('token'),
  });

  if(res.error !== ''){
    return wx.showModal( {title: '提示', content: res.error, showCancel: false, } );
  }

  return res.data;

}

async function setPhone(params){

  let res = await request.post('/api/v2/member/telephone', params, {
      'token': wx.getStorageSync('token'),
  });

  if(res.error !== ''){
    return wx.showModal( {title: '提示', content: res.error, showCancel: false, } );
  }

  return res.data.telephone;

}

async function getUserInfo(params){
  
  let res = await request.get('/api/v2/member/memberinfo', params, {
      'token': wx.getStorageSync('token'),
  });

  return res.error !== '' ? wx.showModal({ title: '提示', content: res.error, showCancel: false, }) : res.data;
}

// Address
// 省市区数据
async function getAddressInfo(params){
  
  let res =await request.get('/api/v2/admin/area', params);

  if(res.error !== ''){
    return wx.showModal( {title: '提示', content: res.error, showCancel: false, } );
  }

  return res.data;
  
}

async function setAddress(params){

  let res = await request.post('/api/v2/member/address', params, {
      'token': wx.getStorageSync('token'),
  });

  if(res.error !== ''){
    return wx.showModal( {title: '提示', content: res.error, showCancel: false, } );
  }

  return res.data;
}
// 
/**
 * 
 * 获取地址列表或默认地址
 * @param {Object} params 
 * page, limit, address_is_default
 */
async function getAddressList(params){

  let res = await request.get('/api/v2/member/address', params, {
      'token': wx.getStorageSync('token'),
  });

  if(res.error !== ''){
    return wx.showModal( {title: '提示', content: res.error, showCancel: false, } );
  }

  return res.data;
}

async function updateAddress(id, params){

  let res = await request.put('/api/v2/member/address/' + id, params, {
      'token': wx.getStorageSync('token'),
  });

  if(res.error !== ''){
    return wx.showModal( {title: '提示', content: res.error, showCancel: false, } );
  }

  return res.data;
}

async function deleteAddress(id){
  let res = await request.delete('/api/v2/member/address/' + id, null, {
      'token': wx.getStorageSync('token'),
  });

  if(res.error !== ''){
    return wx.showModal( {title: '提示', content: res.error, showCancel: false, } );
  }

  return res.data;
}

// home
async function getBanner(){
  let res = await request.get('/api/v2/member/banner', null, {
      'token': wx.getStorageSync('token'),
  });

  if(res.error !== ''){
    return wx.showModal({ title: '提示', content: res.error, showCancel: false, });
  }

  return res.data;

}

async function getActive(params){
  let res = await request.get('/api/v2/member/activity', params, {
      'token': wx.getStorageSync('token'),
  });

  return res.error !== '' ? wx.showModal({ title: '提示', content: res.error, showCancel: false, }) : res;
}

async function getSeckill(params){
  let res = await request.get('/api/v2/member/seckill', params, {
      'token': wx.getStorageSync('token'),
  });

  return res.error !== '' ? wx.showModal({ title: '提示', content: res.error, showCancel: false, }) : res;
}

// food
async function getStoreClass(params){

  let res = await request.get('/api/v2/member/storeclass', params, {
      'token': wx.getStorageSync('token'),
  });

  return res.error !== '' ? wx.showModal({ title: '提示', content: res.error, showCancel: false, }) : res.data;
}

async function getStoreList(params){

  let res = await request.get('/api/v2/member/store', params, {
      'token': wx.getStorageSync('token'),
  });

  return res.error !== '' ? wx.showModal({ title: '提示', content: res.error, showCancel: false, }) : res;

}

async function getStore(id, params){

  let res = await request.get(`/api/v2/member/storeinfo/${id}`, null, {
      'token': wx.getStorageSync('token'),
  });

  return res.error !== '' ? wx.showModal({ title: '提示', content: res.error, showCancel: false, }) : res.data;

}

async function getGoods(id, params){

  let res = await request.get(`/api/v2/member/goodscommon/${id}`, params, {
      'token': wx.getStorageSync('token'),
  });

  return res.error !== '' ? wx.showModal({ title: '提示', content: res.error, showCancel: false, }) : res.data;
}

async function getPayMethod(id, params){

  let res = await request.get(`/api/v2/member/payment/${id}`, params, {
      'token': wx.getStorageSync('token'),
  });

  return res.error !== '' ? wx.showModal({ title: '提示', content: res.error, showCancel: false, }) : res.data;
}

// shoppingCart
async function addCart(params){

  let res = await request.post('/api/v2/member/cart', params, {
      'token': wx.getStorageSync('token'),
  });

  return res.error !== '' ? wx.showModal({ title: '提示', content: res.error, showCancel: false, }) : res.data;
}

async function getCartList(params){

  let res = await request.get('/api/v2/member/cart', params, {
      'token': wx.getStorageSync('token'),
  });

  return res.error !== '' ? wx.showModal({ title: '提示', content: res.error, showCancel: false, }) : res.data;
}

async function updateCart(id, params){
  
  let res = await request.put(`/api/v2/member/cart/${id}`, params, {
      'token': wx.getStorageSync('token'),
  });

  return res.error !== '' ? wx.showModal({ title: '提示', content: res.error, showCancel: false, }) : res.data;
}

async function deleteCart(id, params){
  
  let res = await request.delete(`/api/v2/member/cart/${id}`, params, {
      'token': wx.getStorageSync('token'),
  });

  return res.error !== '' ? wx.showModal({ title: '提示', content: res.error, showCancel: false, }) : res.data;
}

// my
async function getOrderList(params){

  let res = await request.get('', params, {
    'token': wx.getStorageSync('token'),
  });

  return res.error !== '' ? wx.showModal({ title: '提示', content: res.error, showCancel: false, }) : res.data;
}

async function getOrderInfo(id, params){

  let res = await request.get('', params, {
    'token': wx.getStorageSync('token'),
  });

  return res.error !== '' ? wx.showModal({ title: '提示', content: res.error, showCancel: false, }) : res.data;
}

async function getCommentList(params){

  let res = await request.get('', params, {
    'token': wx.getStorageSync('token'),
  });

  return res.error !== '' ? wx.showModal({ title: '提示', content: res.error, showCancel: false, }) : res.data;

}

export default {
  getToken,
  setUserInfo,
  setPhone,
  getUserInfo,
  getAddressInfo, // address
  setAddress,
  getAddressList,
  updateAddress,
  deleteAddress,
  getBanner, // home
  getActive,
  getSeckill,
  getStoreList, // food
  getStoreClass,
  getStore,
  getGoods,
  getPayMethod,
  addCart, // shoppingCart
  getCartList,
  updateCart,
  deleteCart,
  getOrderList,
  getOrderInfo,
  getCommentList,
}