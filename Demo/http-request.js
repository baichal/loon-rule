/*
在获得一个http请求时触发,js Demo模板，可根据需要适当删除。
*/

var all = $request;   //获取请求的全部内容
var url = $request.url;   //获取请求URL
var method = $request.method;   //请求方法
var headers = $request.headers;   //获取请求头
var body = $request.body;   //获取请求的body

console.log("打印日志");

$done();
/*
$done({});
$done({});
*/
