var axios = require('axios');
var data = '{"credentials":{"password":"Samarth16","email":"dwoksaustin@digi-prex.com"}}';

var config = {
  method: 'post',
  url: 'https://identity.doordash.com/api/v1/auth/token',
  headers: { 
    'Authorization': 'Ft98fOkQwIcAAAAAAAAAANmMvfQvWUg8AAAAAAAAAACimJeZMkWvEwAAAAAAAAAA', 
    'User-Agent': 'DoordashMerchant/2.61.1 (Android 8.1.0; unknown Custom)', 
    'X-Device-Id': '418a448c7dd7a5be', 
    'X-Correlation-Id': '4662c329-b614-46b0-b7ce-e24d3fb50c3a', 
    'Content-Type': 'application/json; charset=UTF-8', 
    'Content-Length': '76', 
    'Host': 'identity.doordash.com', 
    'Connection': 'close', 
    'Accept-Encoding': 'gzip, deflate', 
    'X-NewRelic-ID': 'XAUEWF5SGwEJV1ZRDgEE', 
    'Cookie': 'dd_device_id_2=dx_a80138056180477d91faf475d13923f1; dd_device_id=dx_391c52cf8cea48e599b897eb990490fe; __cfduid=d4adcb8a9901b0958080b468449805fb11612432482; __cfduid=d0097d7c5bc2bd15284c899bfc8ca504b1613043461; __cf_bm=c17727077a1f607f0f313bbd8e9b0fcd6706b740-1614312330-1800-Aa4VUZSuIDIEA8auQ/e07FoNPEJk8kFeBLB0bI+nXqL54KeI97LzomPA31fHuS5JGi/uFFmCwoxVmfXSOuy/+vA='
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});



// var axios = require('axios');
// var dbConn_mongo = require('./mongo');
// var mongoose = require("mongoose");
// var morgan = require("morgan");
// const URI = "mongodb+srv://gkchusky:gkcHusky@gkc.b2f0o.mongodb.net/test?retryWrites=true&w=majority";
// mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then((db) => console.log("DB connected"))
//     .catch((err) => console.error(err));
// const { Schema } = mongoose;
// const OrderSchema = new Schema({}, { strict: false });
// var devices = mongoose.model("devices", OrderSchema);

// var data = '{"credentials":{"password":"Samarth16","email":"dwoksaustin@digi-prex.com"}}';
// let token;
// let syncingTime=180;
// async function delay(time) {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {

//           resolve();
//       }, time * 1000);
//   })
// }
// async function getToken() {
//   try {
//     let config = {
//       method: 'post',
//       url: 'https://identity.doordash.com/api/v1/auth/token',
//       headers: {
//         'Authorization': 'Ft98fOkQwIcAAAAAAAAAANmMvfQvWUg8AAAAAAAAAACimJeZMkWvEwAAAAAAAAAA',
//         'User-Agent': 'DoordashMerchant/2.61.1 (Android 8.1.0; unknown Custom Phone)',
//         'X-Device-Id': '418a448c7dd7a5be',
//         'X-Correlation-Id': '57102645-e08d-45cc-a6a6-a5f8c5b1ec00',
//         'Content-Type': 'application/json; charset=UTF-8',
//         'Content-Length': '76',
//         'Host': 'identity.doordash.com',
//         'Connection': 'close',
//         'Accept-Encoding': 'gzip, deflate',
//         'X-NewRelic-ID': 'XAUEWF5SGwEJV1ZRDgEE',
//         'Cookie': 'dd_device_id_2=dx_a80138056180477d91faf475d13923f1; dd_device_id=dx_391c52cf8cea48e599b897eb990490fe; __cfduid=d4adcb8a9901b0958080b468449805fb11612432482; __cfduid=d0097d7c5bc2bd15284c899bfc8ca504b1613043461; __cf_bm=f81ea22a3b36afdc9d77b69f4ee57e057addfe98-1613114189-1800-Adi13lfPwviWKglP4sxyduNEdy3g03cxHZXAw7pWXvAdOYn0nrM54rYnA25DmrA/p4U6Nd/2GP2Y2eUHb9/aulE='
//       },
//       data: data
//     };

//     let response = await axios(config)
//     return (response.data.token.token);
//   } catch (error) {
//     console.log(error);
//   }

// }

// async function getOrders(token) {
//   try {

//     let config = {
//       method: 'get',
//       url: 'https://merchant-mobile-bff.doordash.com/v1/active_orders/1108572?auto_confirm=false',
//       headers: {
//         'Authorization': 'JWT ' + token,
//         'Cookie': 'dd_device_id_2=dx_a80138056180477d91faf475d13923f1; dd_device_id=dx_391c52cf8cea48e599b897eb990490fe; __cfduid=d0097d7c5bc2bd15284c899bfc8ca504b1613043461; __cf_bm=c22eaa7c8601845686d24bb5b0ed9f04342e5639-1613127946-1800-AeTYGSGiFY0xb0i1OzrwtBIcb/weujW70GXBgsInE28DrMnQ0LxDAmxQi9PNXokZdWE2e7ped1zOT9HNAFp2U5I='
//       }
//     };

//     let response = await axios(config);
//     let data=[response.data];
//     console.log(response.data)
//     devices.insertMany(
    
//       [data])

//   } catch (error) {
//     console.log(error);
//   }

// }
// async function run() {
//   let token = await getToken();
// //   while(true)
// //   {
// //    await getOrders(token); 
// //    await delay(syncingTime);
// //   }
// }
// run();

