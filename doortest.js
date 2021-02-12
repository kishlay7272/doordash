var axios = require('axios');
var data = '{"credentials":{"password":"3739","email":"4124187161bu@ipad.doordash.com"}}';
let token;
async function getToken() {
  try {
    let config = {
      method: 'post',
      url: 'https://identity.doordash.com/api/v1/auth/token',
      headers: {
        'Authorization': 'Ft98fOkQwIcAAAAAAAAAANmMvfQvWUg8AAAAAAAAAACimJeZMkWvEwAAAAAAAAAA',
        'User-Agent': 'DoordashMerchant/2.61.1 (Android 8.1.0; unknown Custom Phone)',
        'X-Device-Id': '418a448c7dd7a5be',
        'X-Correlation-Id': '57102645-e08d-45cc-a6a6-a5f8c5b1ec00',
        'Content-Type': 'application/json; charset=UTF-8',
        'Content-Length': '76',
        'Host': 'identity.doordash.com',
        'Connection': 'close',
        'Accept-Encoding': 'gzip, deflate',
        'X-NewRelic-ID': 'XAUEWF5SGwEJV1ZRDgEE',
        'Cookie': 'dd_device_id_2=dx_a80138056180477d91faf475d13923f1; dd_device_id=dx_391c52cf8cea48e599b897eb990490fe; __cfduid=d4adcb8a9901b0958080b468449805fb11612432482; __cfduid=d0097d7c5bc2bd15284c899bfc8ca504b1613043461; __cf_bm=f81ea22a3b36afdc9d77b69f4ee57e057addfe98-1613114189-1800-Adi13lfPwviWKglP4sxyduNEdy3g03cxHZXAw7pWXvAdOYn0nrM54rYnA25DmrA/p4U6Nd/2GP2Y2eUHb9/aulE='
      },
      data: data
    };

    let response = await axios(config)
    return (response.data.token.token);
  } catch (error) {
    console.log(error);
  }

}

async function getOrders(token) {
  try {

    let config = {
      method: 'get',
      url: 'https://merchant-mobile-bff.doordash.com/v1/active_orders/1108572?auto_confirm=false',
      headers: {
        'Authorization': 'JWT ' + token,
        'Cookie': 'dd_device_id_2=dx_a80138056180477d91faf475d13923f1; dd_device_id=dx_391c52cf8cea48e599b897eb990490fe; __cfduid=d0097d7c5bc2bd15284c899bfc8ca504b1613043461; __cf_bm=c22eaa7c8601845686d24bb5b0ed9f04342e5639-1613127946-1800-AeTYGSGiFY0xb0i1OzrwtBIcb/weujW70GXBgsInE28DrMnQ0LxDAmxQi9PNXokZdWE2e7ped1zOT9HNAFp2U5I='
      }
    };

    let response = await axios(config)
    console.log(response.data)
  } catch (error) {
    console.log(error);
  }

}
async function run() {
  let token = await getToken();
  console.log(token);
  setInterval(getOrders(token),60000);
}
run();


