const { createServer } = require("http");
const httpProxy = require("http-proxy");
const express = require("express");
const { parse } = require("url");
const next = require("next");
const cors = require('cors');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const proxy = httpProxy.createProxyServer();
const sendError = function(res, err) {
	return res.status(500).send({
		 error: err,
		 message: "An error occured in the proxy"
	});
};

const target = "http://localhost:3001";

app.prepare()
.then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    // error handling
    proxy.on("error", function (err, req, res) {
	    sendError(res, err);
    });

    const enableCors = function(req, res) {
      if (req.headers['access-control-request-method']) {
        res.setHeader('access-control-allow-methods', req.headers['access-control-request-method']);
      }
    
      if (req.headers['access-control-request-headers']) {
        res.setHeader('access-control-allow-headers', req.headers['access-control-request-headers']);
      }
    
      if (req.headers.origin) {
        res.setHeader('access-control-allow-origin', req.headers.origin);
        res.setHeader('access-control-allow-credentials', 'true');
      }
    };

    // set header for CORS
    proxy.on("proxyRes", function(proxyRes, req, res) {
	    enableCors(req, res);
    });
    

    switch (pathname) {
      case "/":
        app.render(req, res, "/", query);
        break;

      case "/login":
        app.render(req, res, "/login", query);
        break;

      case "/api/login.js":
        proxy.web(req, res, { target }, error => {
          console.log("Error!", error);
        });
        break;

      case "/profile":
        app.render(req, res, "/profile", query);
        break;

      case "/api/profile.js":
        proxy.web(req, res, { target }, error => console.log("Error!", error));
        break;

      default:
        handle(req, res, parsedUrl);
        break;
    }
  }).listen(3000, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});