var imSourcea1= require('../contents/htmlpages/pic.png')
var imSourcea2= require('../contents/htmlpages/digestion.png')
var imSourcea3= require('../contents/htmlpages/disease.png')
var dSys = require('../contents/htmlpages/digestive_system.html')
var digestion = require('../contents/htmlpages/digestion.html')
var disease = require('../contents/htmlpages/ge_system.html')

var homeData = [
    {
        "key":"a1",
        "name":"Digestive System",
        "imageS": imSourcea1 ,
        "desc":"All products ",
        "details": dSys,
    },
    {
        "key":"a2",
        "name":"Digestion",
        "imageS": imSourcea2 ,
        "desc":"Human digestive ",
        "details": digestion,
    },
    {
        "key":"a3",
        "name":"Disese of GE system",
        "imageS": imSourcea3 ,
        "desc":"Overall ",
        "details": disease,
    },  
]
export default homeData;