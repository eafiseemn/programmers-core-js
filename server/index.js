// Node 환경용 (Browser에서는 에러날 수 있음)

// console.log(process.env.LANG);

const server = require("live-server");
const params = {
	host: "localhost",
	port: 3000,
	open: false,
	root: "./client",
};

server.start(params);
