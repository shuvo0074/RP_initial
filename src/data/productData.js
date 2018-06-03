var imSourcea1= require('../contents/productImages/ancotil.png')
var imSourcea2= require('../contents/productImages/alverin.png')
var imSourcea3= require('../contents/productImages/antif.png')
var imSourcea4= require('../contents/productImages/antipro.png')
var imSourcea5= require('../contents/productImages/antiplet.png')
var imSourcea6= require('../contents/productImages/artiflex.png')

var prod = require('../contents/htmlpages/product.html')

var productsData = [
    {
        "key":"a1",
        "name":"Products1 ",
        "desc":" Pharmaceuticals .",
        "imageS": imSourcea1 ,
        "details": prod,

    },
    {
        "key":"a2",
        "name":"Products2",
        "desc":"Human ",
        "imageS": imSourcea2 ,
        "details": prod,

    },
    {
        "key":"a3",
        "name":"Products3",
        "desc":" quiz",
        "imageS": imSourcea3 ,
        "details": prod,

    },
    {
        "key":"a4",
        "name":"Products4",
        "desc":" Rangs limited",
        "imageS": imSourcea4 ,
        "details": prod,

    },
    {
        "key":"a5",
        "name":"Products5",
        "desc":"this app",
        "imageS": imSourcea5 ,
        "details": prod,

    },
    {
        "key":"a6",
        "name":"Products6",
        "desc":"Help",
        "imageS": imSourcea6 ,
        "details": prod,

    },    
]
export default productsData;