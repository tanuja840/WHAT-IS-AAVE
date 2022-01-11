const http = require('http');
const fs = require('fs');
const { json } = require('stream/consumers');


const port = 3339;
const index = fs.readFileSync('index.html')
const api = fs.readFileSync('./api.json')


const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(index);
    }
    else if(url == '/api'){
        res.end(api);
    }
    
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, () => {
    console.log(`Server running at http://${port}/`);
  });








async function getData() {
  const response = await fetch('http://localhost:3339/api');
  console.log(response);
  const data = await response.json();
  console.log(data);


var liquidity =[ {
  
  "liquidityRate_avg": 0.03150913206878064,
	"Month":"2014-01-01 13:12"
	
},
{
	"liquidityRate_avg": 0.03099128668613856,
	"Month":"2014-01-02 13:20"
},
{
	"liquidityRate_avg": 0.031547053664307,
	"Month":"2014-01-03 13:30"
},
{
	"liquidityRate_avg": 0.030997913667039,
	"Month":"2014-01-01 14:01"
},
{
	"liquidityRate_avg": 0.031087750515641638,
	"Month":"2014-01-01 14:10"
},
{
	"liquidityRate_avg": 0.031034187226499397,
	"Month":"2014-01-01 14:30"
},
{
	"liquidityRate_avg": 0.03112307927533224,
	"Month":"2014-01-01 14:40"
},
{
	"liquidityRate_avg": 0.03116782269509544,
	"Month":"2014-01-01 14:50"
},
{
	"liquidityRate_avg": 0.03196308703543164,
	"Month":"2014-01-01 15:00"
},
{
	"liquidityRate_avg": 0.03099258319811256,
	"Month":"2014-01-01 16:10"
},
{
	"liquidityRate_avg": 0.03147101496090792,
	"Month":"2014-01-01 16:20"
},
{
	"liquidityRate_avg": 0.031081221077113436,
	"Month":"2014-01-01 16:30"
},
{
	"liquidityRate_avg": 0.03135059620226532,
	"Month":"2014-01-01 13:10"
},
{
	"liquidityRate_avg": 0.03135305941954344,
	"Month":"2014-01-01 13:23"
},
{
	"liquidityRate_avg": 0.03126682828888092,
	"Month":"2014-01-01 13:01"
	},

 {
  
    "liquidityRate_avg":  0.03258968639174424,
    "Month":"2014-01-01T23:28:"
  },
  {
    "liquidityRate_avg": 0.045885403207179716,
    "Month":'19-08-2021T23:28'
  },
  {
    "liquidityRate_avg": 0.0309894594119316,
    "Month":"20-08-2021T23:28"
  },
  {
    "liquidityRate_avg": 0.03089730498400296,
    "Month":"21-08-T23:28"
  },
  {
    "liquidityRate_avg": 0.03108412166756976,
    "Month":"22-08-2021T23:28"
  },
  
  {
    "liquidityRate_avg": 0.031165897877885523,
    "Month":"23-08-2021T23:28"
  },
  
  {
    "liquidityRate_avg": 0.03156242931851868,
    "Month":"24-08-2021"
  },
  
  {
    "liquidityRate_avg": 0.0311651615756466,
    "Month":"25-08-2021"
  },
  
  {
    "liquidityRate_avg": 0.031236944532479997,
    "Month":"26-08-2021"
  },
  
  {
    "liquidityRate_avg": 0.031167141914980438,
    "Month":"27-08-2021"
  },
  
  {
    "liquidityRate_avg": 0.03113184489335676,
    "Month":"28-08-2021"
  },
  
  {
    "liquidityRate_avg": 0.03201474170251908,
    "Month":"29-08-2021"
  },
  
  {
    "liquidityRate_avg": 0.0311825272058316,
    "Month":"30-08-2021"
  },
  
  {
    "liquidityRate_avg": 0.031145777508984118,
    "Month":"01-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.03086690519262852,
    "Month":"02-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.03144130089123456,
    "Month":"03-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.031239406887511322,
    "Month":"04-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.03117327824552148,
    "Month":"05-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.031164900583079882,
    "Month":"06-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.030319998090434997,
    "Month":"07-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.0311797896404382,
    "Month":"08-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.03069334455215976,
    "Month":"09-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.03072727595647332,
    "Month":"10-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.03079279961155008,
    "Month":"11-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.03058228176640776,
    "Month":"12-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.029908088016252842,
    "Month":"13-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.030701864709728282,
    "Month":"14-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.030839398303312438,
    "Month":"15-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.030905716701093478,
    "Month":"16-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.03146427867452328,
    "Month":"17-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.0306995175316062,
    "Month":"18-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.030848862770660162,
    "Month":"19-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.030840616034626678,
    "Month":"20-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.03115770649079076,
    "Month":"21-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.03079294900751592,
    "Month":"22-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.031037457695078517,
    "Month":"23-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.030811806427288323,
    "Month":"24-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.031040321339928238,
    "Month":"25-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.03114150424598376,
    "Month":"26-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.03114766458393552,
    "Month":"27-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.0310873886507376,
    "Month":"28-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.03108582944530272,
    "Month":"29-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.03108164070311856,
    "Month":"30-09-2021"
  },
  
  {
    "liquidityRate_avg": 0.031155970532094,
    "Month":"01-10-2021"
  },
  
  {
    "liquidityRate_avg": 0.03049376159508012,
    "Month":"02-10-2021"
  },
  
  {
    "liquidityRate_avg": 0.03090339945933408,
    "Month":"03-10-2021"
  },
  
  {
    "liquidityRate_avg": 0.030967312441172762,
    "Month":"04-10-2021"
  },
  
  {
    "liquidityRate_avg": 0.030992495963019118,
    "Month":"05-10-2021"
  },
  
  {
    "liquidityRate_avg": 0.030683615193870122,
    "Month":"06-10-2021"
  },
  
  {
    "liquidityRate_avg": 0.030750822275842082,
    "Month":"07-10-2021"
  },
  
  {
    "liquidityRate_avg": 0.03115177392635568,
    "Month":"08-10-2021"
  },
  
  {
    "liquidityRate_avg": 0.0309217410054396,
    "Month":"09-10-2021"
  },
  
  {
    "liquidityRate_avg": 0.03082188163253292,
    "Month":"10-10-2021"
  },
  
  {
    "liquidityRate_avg": 0.03082146518081016,
    "Month":"11-10-2021"
  },
  
  {
    "liquidityRate_avg": 0.030418140405641402,
    "Month":"12-10-2021"
  },
  
  {
    "liquidityRate_avg": 0.030145774526007477,
    "Month":"13-10-2021"
  },
  {
    "liquidityRate_avg": 0.0307371695125446,
    "Month":"14-10-2021"
  },
  
  {
    "liquidityRate_avg": 0.029907759870533523,
    "Month":"15-10-2021"
  },
  {
    "liquidityRate_avg": 0.02978477946008712,
    "Month":"16-10-2021"
  },
  {
    "liquidityRate_avg": 0.030228059733407642,
    "Month":"17-10-2021"
  },
  {
    "liquidityRate_avg": 0.03514132944871416,
    "Month":"18-10-2021"
  },
  {
    "liquidityRate_avg": 0.03043952512305552,
    "Month":"19-10-2021"
  },
  {
    "liquidityRate_avg": 0.030416851961206918,
    "Month":"20-10-2021"
  },
  {
    "liquidityRate_avg": 0.030596946163588438,
    "Month":"21-10-2021"
    
  
  
  },
  {
    "liquidityRate_avg": 0.030541234706249403,
    "Month":"22-10-2021"
  },
  {
    "liquidityRate_avg": 0.03058351839743076,
    "Month":"23-10-2021"
  },
  {
    "liquidityRate_avg": 0.030365899217519397,
    "Month":"24-10-2021"
  },
  {
    "liquidityRate_avg": 0.030344241525067442,
    "Month":"25-10-2021"
  },
  {
    "liquidityRate_avg": 0.03043378054458504,
    "Month":"26-10-2021"
  },
  {
    "liquidityRate_avg": 0.03037042186300296,
    "Month":"27-10-2021"
  },
  {
    "liquidityRate_avg": 0.030574306050600603,
    "Month":"28-10-2021"
  },
  {
    "liquidityRate_avg": 0.03045128321298636,
    "Month":"29-10-2021"
  },
  {
    "liquidityRate_avg": 0.03045481976774808,
    "Month":"30-10-2021"
  },
  {
    "liquidityRate_avg": 0.03406965116844564,
    "Month":"31-10-2021"
  },
  {
    "liquidityRate_avg": 0.03035331979667244,
    "Month":"01-11-2021"
  },
  {
    "liquidityRate_avg": 0.03022432883999064,
    "Month":"02-11-2021"
  },
  {
    "liquidityRate_avg": 0.03025286830619496,
    "Month":"03-11-2021"
  },
  {
    "liquidityRate_avg": 0.03019497702198408,
    "Month":"04-11-2021"
  },
  {
    "liquidityRate_avg": 0.0300952948095216,
    "Month":"05-11-2021"
  },
  {
    "liquidityRate_avg": 0.030564762728247,
    "Month":"06-11-2021"
  },
  {
    "liquidityRate_avg": 0.03056822013377196,
    "Month":"07-11-2021"
  },
  {
    "liquidityRate_avg": 0.03011240830604904,
    "Month":"08-11-2021"
  },
  {
    "liquidityRate_avg": 0.03010307532363828,
    "Month":"09-11-2021"
  },
  {
    "liquidityRate_avg": 0.02991854395859508,
    "Month":"10-11-2021"
  },
  {
    "liquidityRate_avg": 0.030155496484401,
    "Month":"11-11-2021"
  },
  {
    "liquidityRate_avg": 0.030335935361991122,
    "Month":"12-11-2021"
  },
  {
    "liquidityRate_avg": 0.02973217112181144,
    "Month":"13-11-2021"
  },
  {
    "liquidityRate_avg": 0.02978433677714004,
    "Month":"14-11-2021"
  },
  {
    "liquidityRate_avg": 0.02987762436137736,
    "Month":"15-11-2021"
  },
  {
    "liquidityRate_avg": 0.03034906781014404,
    "Month":"16-11-2021"
  },
  {
    "liquidityRate_avg": 0.030594064009314238,
    "Month":"17-11-2021"
  },
  {
    "liquidityRate_avg": 0.02988621495620496,
    "Month":"18-11-2021"
  },
  {
    "liquidityRate_avg": 0.03017726686002672,
    "Month":"19-11-2021"
  },
  {
    "liquidityRate_avg": 0.03090899148377112,
    "Month":"20-11-2021"
  },
  {
    "liquidityRate_avg": 0.030291162615456124,
    "Month":"21-11-2021"
  },
  {
    "liquidityRate_avg": 0.029637533055389038,
    "Month":"22-11-2021"
  },
  {
    "liquidityRate_avg": 0.029977816299221877,
    "Month":"23-11-2021"
  },
  {
    "liquidityRate_avg": 0.02929593244960836,
    "Month":"24-11-2021"
  },
  {
    "liquidityRate_avg": 0.02996655151613796,
    "Month":"25-11-2021"
  },
  {
    "liquidityRate_avg": 0.03062852162823816,
    "Month":"26-11-2021"
  },
  {
    "liquidityRate_avg": 0.02904112189369332,
    "Month":"27-11-2021"
  },
  {
    "liquidityRate_avg": 0.029292971732956082,
    "Month":"28-11-2021"
  },
  {
    "liquidityRate_avg": 0.028447540400355117,
    "Month":"29-11-2021"
  },
  {
    "liquidityRate_avg": 0.030146973454008002,
    "Month":"30-11-2021"
  },
  {
    "liquidityRate_avg": 0.02970505160576604,
    "Month":"01-12-2021"
  },
  {
    "liquidityRate_avg": 0.028207466004705837,
    "Month":"02-12-2021"
  },
  {
    "liquidityRate_avg": 0.025187450852503082,
    "Month":"03-12-2021"
  },
  {
    "liquidityRate_avg": 0.02682732859765272,
    "Month":"04-12-2021"
  },
  {
    "liquidityRate_avg": 0.022343551632024478,
    "Month":"05-12-2021"
  },
  {
    "liquidityRate_avg": 0.02989637629078572,
    "Month":"06-12-2021"
  },
  {
    "liquidityRate_avg": 0.030552436166490723,
    "Month":"07-12-2021"
  },
  {
    "liquidityRate_avg": 0.03012815293485084,
    "Month":"08-12-2021"
  },
  {
    "liquidityRate_avg": 0.02984667615638748,
    "Month":"09-12-2021"
  },
  {
    "liquidityRate_avg": 0.02999382219760788,
    "Month":"10-12-2021"
  },
  {
    "liquidityRate_avg": 0.03032715455643924,
    "Month":"11-12-2021"
  },
  {
    "liquidityRate_avg": 0.02812139179074072,
    "Month":"12-12-2021"
  
  },
  {
    "liquidityRate_avg": 0.03079255812003108,
    "Month":"13-12-2021"
  },
  {
    "liquidityRate_avg": 0.0301418612928576,
    "Month":"14-12-2021"
  },
  {
    "liquidityRate_avg": 0.029157872865424563,
    "Month":"15-12-2021"
  },
  {
    "liquidityRate_avg": 0.029799822358068842,
    "Month":"16-12-2021"
  
}
]
console.log(liquidity);
var output=document.getElementById('output');
output.innerHTML=liquidity.liquidityRate_avg+''+liquidity.Month;
}