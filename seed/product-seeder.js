var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ibexMarket');


var products = [
    // actual data I want to write in the dadabase
    new Product({
        imagePath: 'https://media1.calvinklein.com/images/20190522/slim-1.jpg',
        title: 'Slim fit white non-iron twill shirt',
        description: 'Classic Fit: updated take on a classic silhouette with relaxed fit across the shoulders, chest, armhole, and sleeves with a shaped waist. Classic Fit is similar to a Relaxed or Regular Fit',
        price: 56.12
    }),
    new Product({
        imagePath: 'https://www.haggar.com/dw/image/v2/BBND_PRD/on/demandware.static/-/Sites-master-catalog-haggar/default/dw3d6096fb/images/hi-res/HW00080_100.jpg?sw=2000&sh=2000&sm=fit',
        title: 'BUTTONED DOWN Men\'s Slim Fit French Cuff Dress Shirt, Supima Cotton Non-Iron, Spread-Collar',
        description: 'Made to last from mid-weight 100% cotton fabric, ideal for year-round wear.',
        price: 44.98
    }),
    new Product({
        imagePath: 'https://target.scene7.com/is/image/Target/GUEST_6e929081-6d3a-481f-85e8-80ed71152fd5',
        title: 'Van Heusen Men\'s Dress Shirt Fitted Poplin Solid',
        description: 'Long-sleeve stretch poplin non-iron dress shirt featuring spread collar and pocket at ches',
        price: 39.90
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIHvVyCVejTF3l3b1qXJgu8G3uU29klIcgh0afN8Wqio68Dz4k',
        title: 'Calvin Klein Men\'s Dress Shirt Slim Fit Non Iron Herringbone',
        description: 'Made to last from mid-weight 100% cotton fabric, ideal for year-round wear.',
        price: 79.12
    }),
    new Product({
        imagePath: 'https://media1.calvinklein.com/fit-guides/2017/08/dress-shirts-fitguide_2.jpg',
        title: 'Esabel.C Men\'s Dress Shirts Long Sleeve Regular Fit ',
        description: 'Luxury Supima cotton with a lightweight finish; straight back yoke with center box pleat',
        price: 45.39
    }),
    new Product({
        imagePath: 'https://media1.calvinklein.com/images/20190522/slim-1.jpg',
        title: 'Van Heusen Men\'s Dress Shirt Regular Fit Flex Collar Solid',
        description: 'Long-sleeve pinpoint oxford non-iron dress shirt featuring button-down collar, offered with or without pocket at chest',
        price: 43.74
    }),

];

var done = 0;

// loop throgh as long as we have products
for (var i=0; i< products.length; i++ ){
     products[i].save(function(err, res){
         done++;
         if (done === products.length){
             exit();
         }

     });
}


function exit(){
    mongoose.disconnect();
}

