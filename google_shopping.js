var data = require("./products.json");

var items = data['items'];


// Write your solutions below


//-------------#1---------------

//1.) The kind of results you're are dealing are shopping#products. Go through the items and find all results that have kind of shopping#product. 
//How many are there? Where else is this count information stored in the search results?

// var count = 0;
// for (var i = 0; i < data['items'].length; i++){
// 	if (items[i].kind === 'shopping#product'){
// 		count++;
// 	}
// }

// console.log(count);


//---answer---

// 25


//--------------#2---------------

//2.) Find all items with a backorder availability in inventories.


// var count = 0;
// for (var i = 0; i < data['items'].length; i++){
// 	if (data.items[i].product.inventories[0].availability === "backorder"){
// 		count++;
// 		console.log(data.items[i].product.author.name)
// 	}
// }

// console.log(count)


//----answer----

// // Adorama Camera
// // CDW
// // 2


//-------------#3------------------


//3.) Find all items with more than one image link.


// var count = 0;
// for (var i = 0; i < data['items'].length; i++){
// 	if (data.items[i].product.images.length > 1){
// 		count++;
// 		console.log(data.items[i].product.title)
// 	}
// }

// console.log(count)

//------answer-----


// console.log(count);

// Nikon D800 SLR Digital Camera Body
// Nikon 1 S1 10.1 Mp Digital Camera - Red (w/ 11-27.5mm And Vr 30-110mm Lenses)
// Canon Eos 6d Digital Camera With Canon 24-105mm F/4.0l Is Usm Af Lens , Usa
// Sony Alpha NEX-3N Mirrorless Digital Camera with 16-50mm Lens (Black)
// Nikon  D7100 Body 24.1-megapixel Digital Camera
// Canon Eos Rebel T3i Digital Camera With Ef-s 18-55mm Is Ii Lens Kit Usa
// 6



//-------------#4------------------

// 4.) Find all canon products in the items (careful with case sensitivity).


// var count = 0;
// for (var i = 0; i < data['items'].length; i++){
// 	if (data.items[i].product.brand.toLowerCase() === "canon"){
// 		count++;
// 		console.log(data.items[i].product.title)
// 	}
// }



// console.log(count)



//Canon PowerShot SX50 HS 12.1MP Digital Camera
// PowerShot SX50 HS Compact Digital Camera
// Canon Eos M Ultra Compact Mirrorless Digital Camera Double Lens Kit Silver Japan
// Canon Eos Rebel T4i - Digital Camera - Slr - 18.0 Mpix - 3 X Optical Zo 6558b003
// Canon Eos 6d Digital Camera With Canon 24-105mm F/4.0l Is Usm Af Lens , Usa
// Canon EOS Rebel T1i (500d) SLR Digital Camera Kit with Canon 18-5 ...
// Canon Eos Rebel T3i Digital Camera With Ef-s 18-55mm Is Ii Lens Kit Usa
// 7

//-------------#5------------------

//5.) Find all items that have product author name of "eBay" and are brand "Canon".

// var count = 0;
// for (var i = 0; i < data['items'].length; i++){
// 	if (data.items[i].product.brand.toLowerCase() === "canon" && data.items[i].product.author.name.indexOf("eBay") !== -1){
// 		count++;
// 		console.log(data.items[i].product.title)
// 	}
// }

	// Canon Eos M Ultra Compact Mirrorless Digital Camera Double Lens Kit Silver Japan
	// Canon Eos Rebel T4i - Digital Camera - Slr - 18.0 Mpix - 3 X Optical Zo 6558b003
	// Canon Eos 6d Digital Camera With Canon 24-105mm F/4.0l Is Usm Af Lens , Usa
	// Canon Eos Rebel T3i Digital Camera With Ef-s 18-55mm Is Ii Lens Kit Usa



//-------------#6------------------

// / 6.) Print all the products with their brand, price, and a image link


// 	var count = 0;
// for (var i = 0; i < data['items'].length; i++)
// {
// 		console.log("Brand: " + data.items[i].product.brand)
// 		console.log("Price: " + data.items[i].product.inventories[0].price)
// 		console.log("Image Link: " + data.items[i].product.images[0].link)




// 		Brand: Nikon
// Price2796.95
// Image Link: http://lghttp.22373.nexcesscdn.net/80A650/Magento/media/catalog/product/n/i/nikon_1_d800_main.jpg
// Brand: Sony
// Price648
// Image Link: http://content.abt.com/media/images/products/l_DSCRX100B.jpg
// Brand: Sony
// Price898
// Image Link: http://www.adorama.com/images/large/ISOSLTA77V.jpg
// Brand: Canon
// Price429.99
// Image Link: http://www.meijer.com/assets/product_images/styles/xlarge/1000947_013803157192_A_400.jpg
// Brand: Canon
// Price430
// Image Link: http://cdn.ritzcamera.com/graphics/products/6-27/641161027.jpg
// Brand: Lytro
// Price399.99
// Image Link: http://img1.targetimg1.com/wcsstore/TargetSAS/img/p/14/24/14246552_120914023000.jpg
// Brand: Nikon
// Price653.49
// Image Link: http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/PVQAAOxyY9VRLPD2/%24T2eC16ZHJHgE9n0yG+FPBRLPD1ZQ9Q%7E%7E60_1.JPG?set_id=8800005007
// Brand: Sony
// Price899.99
// Image Link: http://www.primotronix.com/tron/images2/not_image_available.gif
// Brand: Panasonic
// Price529.95
// Image Link: http://www.abesofmaine.com/abeimg/psdmcfz200k.jpg
// Brand: Canon
// Price1599.95
// Image Link: http://i.ebayimg.com/00/s/NTI5WDgzOQ==/%24T2eC16Z,%21yEE9s5jGJZWBQW8+UBNfQ%7E%7E60_1.JPG?set_id=8800005007
// Brand: Canon
// Price956.99
// Image Link: http://i.ebayimg.com/00/s/NDgwWDY0MA==/z/gIoAAOxyVX1RtnP9/%24%28KGrHqVHJFYFGWZ7FSOoBRtnP9t61%21%7E%7E60_1.JPG?set_id=880000500F
// Brand: Nikon
// Price465
// Image Link: http://overstockdigital.com/ovcat/images/nkd3100.jpg
// Brand: Samsung
// Price749.99
// Image Link: http://i2.cc-inc.com/prod/9491000/9491708_xlg.jpg
// Brand: Canon
// Price2373.33
// Image Link: http://i.ebayimg.com/00/s/NzAwWDcwMA==/z/eS8AAOxyKsZRs4Lk/%24T2eC16R,%21%290E9s37F1sJBRs4Lkfi3Q%7E%7E60_1.JPG?set_id=8800005007
// Brand: Sony
// Price599.95
// Image Link: http://images.cameta.com/productimages/sony/digital/slr/nex-5r_18-55_black_kit01_70172_a.jpg
// Brand: Fuji
// Price499.99
// Image Link: http://webobjects2.cdw.com/is/image/CDW/2214449
// Brand: Sony
// Price448
// Image Link: http://images10.newegg.com/ProductImage/1A9-0005-00002-05.jpg
// Brand: Olympus
// Price549.99
// Image Link: http://i2.cc-inc.com/prod/9417000/9417075_xlg.jpg
// Brand: Nikon
// Price449.95
// Image Link: http://www.medicalartspress.com/images/products/catalog/enlarged/509824_ENL.JPG
// Brand: Nikon
// Price1196.95
// Image Link: http://i.ebayimg.com/00/s/OTQzWDEwMDA=/z/zaYAAOxyA4ZRQ249/%24T2eC16d,%21y0E9s2S7%29tsBRQ249qEB%21%7E%7E60_1.JPG?set_id=8800005007
// Brand: Pentax
// Price449.99
// Image Link: http://a248.e.akamai.net/pix.crutchfield.com/products/2013/6/815/h815MX1S-F.jpg
// Brand: Canon
// Price899.95
// Image Link: http://images.rakuten.com/PI/0/500/230027432.jpg
// Brand: Samsung
// Price749.99
// Image Link: http://accessories.us.dell.com/sna/images/products/large/A6805396.jpg
// Brand: Canon
// Price589.99
// Image Link: http://i.ebayimg.com/00/s/NTAwWDUwMA==/%24T2eC16Z,%21ysE9sy0i3R0BQ4c%21mQmKw%7E%7E60_1.JPG?set_id=8800005007
// Brand: Samsung
// Price697.99
// Image Link: http://www.buydig.com/assets/product/imagesnw250/BB1FC769518B4C75B3CED99F74F123CC.jpg
// ➜  google-shopping-conditionals-loops git:(master) ✗ node google_shopping.js
// Brand: Nikon
// Price: 2796.95
// Image Link: http://lghttp.22373.nexcesscdn.net/80A650/Magento/media/catalog/product/n/i/nikon_1_d800_main.jpg
// Brand: Sony
// Price: 648
// Image Link: http://content.abt.com/media/images/products/l_DSCRX100B.jpg
// Brand: Sony
// Price: 898
// Image Link: http://www.adorama.com/images/large/ISOSLTA77V.jpg
// Brand: Canon
// Price: 429.99
// Image Link: http://www.meijer.com/assets/product_images/styles/xlarge/1000947_013803157192_A_400.jpg
// Brand: Canon
// Price: 430
// Image Link: http://cdn.ritzcamera.com/graphics/products/6-27/641161027.jpg
// Brand: Lytro
// Price: 399.99
// Image Link: http://img1.targetimg1.com/wcsstore/TargetSAS/img/p/14/24/14246552_120914023000.jpg
// Brand: Nikon
// Price: 653.49
// Image Link: http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/PVQAAOxyY9VRLPD2/%24T2eC16ZHJHgE9n0yG+FPBRLPD1ZQ9Q%7E%7E60_1.JPG?set_id=8800005007
// Brand: Sony
// Price: 899.99
// Image Link: http://www.primotronix.com/tron/images2/not_image_available.gif
// Brand: Panasonic
// Price: 529.95
// Image Link: http://www.abesofmaine.com/abeimg/psdmcfz200k.jpg
// Brand: Canon
// Price: 1599.95
// Image Link: http://i.ebayimg.com/00/s/NTI5WDgzOQ==/%24T2eC16Z,%21yEE9s5jGJZWBQW8+UBNfQ%7E%7E60_1.JPG?set_id=8800005007
// Brand: Canon
// Price: 956.99
// Image Link: http://i.ebayimg.com/00/s/NDgwWDY0MA==/z/gIoAAOxyVX1RtnP9/%24%28KGrHqVHJFYFGWZ7FSOoBRtnP9t61%21%7E%7E60_1.JPG?set_id=880000500F
// Brand: Nikon
// Price: 465
// Image Link: http://overstockdigital.com/ovcat/images/nkd3100.jpg
// Brand: Samsung
// Price: 749.99
// Image Link: http://i2.cc-inc.com/prod/9491000/9491708_xlg.jpg
// Brand: Canon
// Price: 2373.33
// Image Link: http://i.ebayimg.com/00/s/NzAwWDcwMA==/z/eS8AAOxyKsZRs4Lk/%24T2eC16R,%21%290E9s37F1sJBRs4Lkfi3Q%7E%7E60_1.JPG?set_id=8800005007
// Brand: Sony
// Price: 599.95
// Image Link: http://images.cameta.com/productimages/sony/digital/slr/nex-5r_18-55_black_kit01_70172_a.jpg
// Brand: Fuji
// Price: 499.99
// Image Link: http://webobjects2.cdw.com/is/image/CDW/2214449
// Brand: Sony
// Price: 448
// Image Link: http://images10.newegg.com/ProductImage/1A9-0005-00002-05.jpg
// Brand: Olympus
// Price: 549.99
// Image Link: http://i2.cc-inc.com/prod/9417000/9417075_xlg.jpg
// Brand: Nikon
// Price: 449.95
// Image Link: http://www.medicalartspress.com/images/products/catalog/enlarged/509824_ENL.JPG
// Brand: Nikon
// Price: 1196.95
// Image Link: http://i.ebayimg.com/00/s/OTQzWDEwMDA=/z/zaYAAOxyA4ZRQ249/%24T2eC16d,%21y0E9s2S7%29tsBRQ249qEB%21%7E%7E60_1.JPG?set_id=8800005007
// Brand: Pentax
// Price: 449.99
// Image Link: http://a248.e.akamai.net/pix.crutchfield.com/products/2013/6/815/h815MX1S-F.jpg
// Brand: Canon
// Price: 899.95
// Image Link: http://images.rakuten.com/PI/0/500/230027432.jpg
// Brand: Samsung
// Price: 749.99
// Image Link: http://accessories.us.dell.com/sna/images/products/large/A6805396.jpg
// Brand: Canon
// Price: 589.99
// Image Link: http://i.ebayimg.com/00/s/NTAwWDUwMA==/%24T2eC16Z,%21ysE9sy0i3R0BQ4c%21mQmKw%7E%7E60_1.JPG?set_id=8800005007
// Brand: Samsung
// Price: 697.99
// Image Link: http://www.buydig.com/assets/product/imagesnw250/BB1FC769518B4C75B3CED99F74F123CC.jpg

}





	









