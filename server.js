"use strict";

const DIR = __dirname
//加载所需要的模块
let http = require('http');
let url = require('url');
let fs = require('fs');
let path = require('path');
let cp = require('child_process');

//创建服务
let httpServer = http.createServer(processRequest);

let port = 8080;

//指定一个监听的接口
httpServer.listen(port, function () {
    console.log(`app is running at port:${port}`);
    console.log(`url: http://localhost:${port}`);
    cp.exec(`explorer http://localhost:${port}`, function () {});
});

//响应请求的函数
function processRequest(request, response) {
    //mime类型
    let mime = {
        "css": "text/css",
        "gif": "image/gif",
        "html": "text/html",
        "ico": "image/x-icon",
        "jpeg": "image/jpeg",
        "jpg": "image/jpeg",
        "js": "text/javascript",
        "json": "application/json",
        "pdf": "application/pdf",
        "png": "image/png",
        "svg": "image/svg+xml",
        "swf": "application/x-shockwave-flash",
        "tiff": "image/tiff",
        "txt": "text/plain",
        "wav": "audio/x-wav",
        "wma": "audio/x-ms-wma",
        "wmv": "video/x-ms-wmv",
        "xml": "text/xml"
    };

    //request里面切出标识符字符串
    let requestUrl = request.url;
    //url模块的parse方法 接受一个字符串，返回一个url对象,切出来路径
    let pathName = url.parse(requestUrl).pathname;

    //对路径解码，防止中文乱码
    pathName = decodeURI(pathName);

    //解决301重定向问题，如果pathname没以/结尾，并且没有扩展名
    if (!pathName.endsWith('/') && path.extname(pathName) === '') {
        pathName += '/';
        let redirect = "http://" + request.headers.host + pathName;
        response.writeHead(301, {
            location: redirect
        });
        //response.end方法用来回应完成后关闭本次对话，也可以写入HTTP回应的具体内容。
        response.end();
    }

    //获取资源文件的绝对路径
    let filePath = path.resolve(DIR + pathName);
    console.log(filePath);
    //获取对应文件的文档类型
    //我们通过path.extname来获取文件的后缀名。由于extname返回值包含”.”，所以通过slice方法来剔除掉”.”，
    //对于没有后缀名的文件，我们一律认为是unknown。
    let ext = path.extname(pathName);
    ext = ext ? ext.slice(1) : 'unknown';

    //未知的类型一律用"text/plain"类型
    let contentType = mime[ext] || "text/plain";

    fs.stat(filePath, (err, stats) => {
        if (err) {
            response.writeHead(404, {
                "content-type": "text/html"
            });
            response.end("<h1>404 Not Found</h1>");
        }
        //没出错 并且文件存在
        if (!err && stats.isFile()) {
            readFile(filePath, contentType);
        }
        //如果路径是目录
        if (!err && stats.isDirectory()) {
            let html = "<head><meta charset = 'utf-8'/></head><body><ul>";
            //读取该路径下文件
            fs.readdir(filePath, (err, files) => {
                if (err) {
                    console.log("读取路径失败！");
                } else {
                    //做成一个链接表，方便用户访问
                    let flag = false;
                    for (let file of files) {
                        //如果在目录下找到index.html，直接读取这个文件
                        if (file === "index.html") {
                            readFile(filePath + (filePath[filePath.length - 1] == '/' ? '' : '/') + 'index.html', "text/html");
                            flag = true;
                            break;
                        };
                        html += `<li><a href='${file}'>${file}</a></li>`;
                    }
                    if (!flag) {
                        html += '</ul></body>';
                        response.writeHead(200, {
                            "content-type": "text/html"
                        });
                        response.end(html);
                    }
                }
            });
        }

        //读取文件的函数
        function readFile(filePath, contentType) {
            response.writeHead(200, {
                "content-type": contentType
            });
            //建立流对象，读文件
            let stream = fs.createReadStream(filePath);
            //错误处理
            stream.on('error', function () {
                response.writeHead(500, {
                    "content-type": contentType
                });
                response.end("<h1>500 Server Error</h1>");
            });
            //读取文件
            stream.pipe(response);
        }
    });
}