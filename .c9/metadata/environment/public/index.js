{"filter":false,"title":"index.js","tooltip":"/public/index.js","undoManager":{"mark":40,"position":40,"stack":[[{"start":{"row":0,"column":0},"end":{"row":1,"column":34},"action":"insert","lines":["'use strict'","const express = require('express')"],"id":1}],[{"start":{"row":1,"column":34},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["c"]},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["o"]},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["n"]},{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":["s"]},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["t"]}],[{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":[" "],"id":3},{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["a"]},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["p"]},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["p"]}],[{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":[" "],"id":4}],[{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"remove","lines":[" "],"id":5},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"remove","lines":["p"]}],[{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["p"],"id":6}],[{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":[" "],"id":7},{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["="]}],[{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":[" "],"id":8},{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["e"]},{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["x"]},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["p"]},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["r"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["e"]},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["s"]},{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["s"]}],[{"start":{"row":2,"column":19},"end":{"row":2,"column":21},"action":"insert","lines":["()"],"id":9}],[{"start":{"row":2,"column":21},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":10}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":12},"action":"remove","lines":["'use strict'"],"id":11},{"start":{"row":2,"column":21},"end":{"row":3,"column":0},"action":"insert","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["a"]},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["p"]},{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["p"]},{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":["."]},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["l"]},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["i"]},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["s"]},{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["t"]},{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["e"]},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["n"]}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":12},"action":"insert","lines":["()"],"id":12}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["8"],"id":13},{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["0"]},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["8"]},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["0"]}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":16},"action":"remove","lines":["const app = express()","app.listen(8080)"],"id":15},{"start":{"row":3,"column":0},"end":{"row":4,"column":16},"action":"insert","lines":["const app = express()","app.listen(8080)"]}],[{"start":{"row":3,"column":0},"end":{"row":4,"column":16},"action":"remove","lines":["const app = express()","app.listen(8080)"],"id":16},{"start":{"row":2,"column":0},"end":{"row":3,"column":16},"action":"insert","lines":["const app = express()","app.listen(8080)"]}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":3},"action":"insert","lines":["// "],"id":17},{"start":{"row":3,"column":0},"end":{"row":3,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":1,"column":34},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":18}],[{"start":{"row":2,"column":0},"end":{"row":8,"column":0},"action":"insert","lines":["app.use(express.static('public')) //folder , iar fct transmite ce se afla in el ","app.get('/ping',(req,res)=>{","    res.status(200).send('pong')","    ","})","",""],"id":19}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":24},"action":"remove","lines":["// const app = express()"],"id":20}],[{"start":{"row":1,"column":34},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":21}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":24},"action":"insert","lines":["// const app = express()"],"id":22}],[{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"remove","lines":["/"],"id":23},{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"remove","lines":["/"]},{"start":{"row":1,"column":34},"end":{"row":2,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":1,"column":34},"end":{"row":1,"column":35},"action":"remove","lines":[" "],"id":24},{"start":{"row":1,"column":34},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":11,"column":2},"end":{"row":11,"column":3},"action":"remove","lines":[" "],"id":25},{"start":{"row":11,"column":1},"end":{"row":11,"column":2},"action":"remove","lines":["/"]},{"start":{"row":11,"column":0},"end":{"row":11,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["'use strict'",""],"id":26}],[{"start":{"row":0,"column":12},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":27}],[{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"remove","lines":["c"],"id":30},{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"remove","lines":["i"]},{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"remove","lines":["l"]},{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"remove","lines":["b"]},{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"remove","lines":["u"]},{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"remove","lines":["p"]}],[{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["s"],"id":31},{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":["e"]},{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["r"]},{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["v"]},{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["e"]},{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"remove","lines":["r"],"id":32},{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"remove","lines":["e"]},{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"remove","lines":["v"]},{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"remove","lines":["r"]},{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"remove","lines":["e"]},{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"remove","lines":["s"]}],[{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["p"],"id":33},{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":["u"]},{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["b"]},{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["l"]},{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["i"]},{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["v"]}],[{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"remove","lines":["v"],"id":34}],[{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["c"],"id":35}],[{"start":{"row":5,"column":29},"end":{"row":5,"column":30},"action":"remove","lines":["g"],"id":36},{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"remove","lines":["n"]},{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"remove","lines":["o"]},{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"remove","lines":["p"]}],[{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"insert","lines":["o"],"id":37},{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"insert","lines":["c"]},{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"insert","lines":["r"]},{"start":{"row":5,"column":29},"end":{"row":5,"column":30},"action":"insert","lines":["."]},{"start":{"row":5,"column":30},"end":{"row":5,"column":31},"action":"insert","lines":["h"]}],[{"start":{"row":5,"column":31},"end":{"row":5,"column":32},"action":"insert","lines":["t"],"id":38},{"start":{"row":5,"column":32},"end":{"row":5,"column":33},"action":"insert","lines":["m"]},{"start":{"row":5,"column":33},"end":{"row":5,"column":34},"action":"insert","lines":["l"]}],[{"start":{"row":5,"column":33},"end":{"row":5,"column":34},"action":"remove","lines":["l"],"id":39},{"start":{"row":5,"column":32},"end":{"row":5,"column":33},"action":"remove","lines":["m"]},{"start":{"row":5,"column":31},"end":{"row":5,"column":32},"action":"remove","lines":["t"]},{"start":{"row":5,"column":30},"end":{"row":5,"column":31},"action":"remove","lines":["h"]},{"start":{"row":5,"column":29},"end":{"row":5,"column":30},"action":"remove","lines":["."]},{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"remove","lines":["r"]},{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"remove","lines":["c"]},{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"remove","lines":["o"]}],[{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"insert","lines":["p"],"id":40},{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"insert","lines":["o"]},{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"insert","lines":["n"]},{"start":{"row":5,"column":29},"end":{"row":5,"column":30},"action":"insert","lines":["g"]}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":5},"action":"remove","lines":["const"],"id":41}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["l"],"id":42},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["e"]},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["t"]}],[{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"remove","lines":["t"],"id":43},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"remove","lines":["e"]},{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"remove","lines":["l"]}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["c"],"id":44},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["o"]},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["n"]},{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":["s"]},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["t"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":2,"column":5},"end":{"row":2,"column":5},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1589226978685,"hash":"70f12a24bb55876a31eacb9aaca79d856e7815bf"}