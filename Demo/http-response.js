/*
在获得一个http响应时触发,js Demo模板，可根据需要适当删除。
*/

//http请求信息

var all = $request;   //获取请求的全部内容
var url = $request.url;   //获取请求URL
var method = $request.method;   //请求方法
var headers = $request.headers;   //获取请求头
var body = $request.body;   //获取请求的body


//http响应信息

var all2 = $response;   //获取响应的全部内容
var status = $response.status;   //响应状态
var headers = $response.headers;   //响应头
var body2 = $response.body;   //获取响应中的body




console.log("打印日志");

$done();
/*
$done({});
$done({});
*/
