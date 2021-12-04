let http = require("http")
let concatstream = require("concat-stream")

http.get(process.argv[2], (res) => {

    res.on("error", console.error)
    res.on("data", (data) => {

    })
    res.pipe(concatstream((data) => {
        console.log(data.toString().length)
        console.log(data.toString())
    }))
})
