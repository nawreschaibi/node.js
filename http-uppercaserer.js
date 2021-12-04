let http = require("http")
let map = require("through2-map")

http.createServer((req, res) => {
    if (req.method == "POST") {
        req.pipe(map(chunk => {
            return chunk.toString().toUpperCase()
        })).pipe(res)
    }
}).listen(process.argv[2])

