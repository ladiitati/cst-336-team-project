function displayTimeOption() {
  let maxTime = 24;
  var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  
  for(var i = 0;i<maxTime;i++) {
    $("#rTime").append(`<option value ="${nums[i]}">${nums[i]}</option>`);
  }
}

$('#prodTab').ready(async function(){

let url ='https://itcdland.csumb.edu/~milara/ajax/promo/products.php' ;
let response = await fetch(url);
var data = await response.json();
console.log(data);

var random = Math.floor(Math.random() * data.length);
var random2 = Math.floor(Math.random() * data.length);

while(random2 == random)
{
  random2 = Math.floor(Math.random() * data.length);
}

$('#prodTab').append(`<tr>
<td>${data[random].productName}</td>
<td id = 'price1'>${data[random].price}</td>
<td><input type='text' id = 
'quant1' value = "${data[random].qty}" ></td>
<td id = "p1">${data[random].qty * data[random].price}</td>
</tr>`);

$('#prodTab').append(`<tr>
<td>${data[random2].productName}</td>
<td id="price2">${data[random2].price}</td>
<td><input type='text'  id = 
'quant2' value=${data[random2].qty}></td>
<td id = "p2">${data[random2].qty * data[random2].price}</td>
</tr>

<tr>
<td>Discount</td>
<td></td>
<td></td>
<td id = 'dis'></td>
</tr>.

<tr>
<td>Shipping</td>
<td></td>
<td></td>
<td id = 'shipTotal'></td>
</tr>


<td>Subtotal</td>
<td></td>
<td></td>
<td id="subtotal"> ${(data[random].qty * data[random].price) + (data[random2].qty * data[random2].price)} </td>
</tr>

<td>Total</td>
<td></td>
<td></td>
<td id="total">
</td>
</tr>
`);

//on load show default price without shipping/discount
//  var p1 = parseInt($('#p1').text());
// var p2 = parseInt($('#p2').text());

// $('#subtotal').text = (p1+p2);
console.log(random);


// needs to be only two random not all
  // data.forEach(function(i){
  //     $('#prodTab').append(`<tr>
  //     <td>${i.productName}</td>
  //     <td>${i.price}</td>
  //     <td>${i.qty}</td>
  //     <td>${i.qty * i.price}</td>
  //     </tr>`);
  // });


});

$("#ship").ready(async function(){
 
$("#ship").append(`<option value =7>Regular delivery: $7.00</option>`);
$("#ship").append(`<option  value =20>Three-Day delivery: $20.00</option>`);
$("#ship").append(`<option  value =25>Next-day delivery: $25.00</option>`);

});

$(document).on("change","#ship",function(){
 var shipResponse = parseInt($("#ship").val());
console.log(shipResponse);
$("#shipTotal").text(shipResponse);
var subtotal = parseInt($("#subtotal").text());
$('#total').text((subtotal+shipResponse));

});



$(document).on('change','#quant1',function(){
 
  //alert($('#quant1').val());
  var q = $('#quant1').val();
  var p = parseInt($('#price1').text());

  $('#p1').text($('#quant1').val()*$('#price1').text());

  var p1 = parseInt($('#p1').text());
  var p2 = parseInt($('#p2').text());
  $('#subtotal').text(p1+p2);
});

$(document).on('change','#quant2',function(){
 
  //alert($('#quant1').val());
  var q = $('#quant2').val();
  var p = parseInt($('#price2').text());
 
  //$('#p1').text($('#quant2').val()*$('#price2').text());
  $('#p2').text(p*q);
  var p1 = parseInt($('#p1').text());
  var p2 = parseInt($('#p2').text());
  $('#subtotal').text(p1+p2);
  
});

// $('#quant2').change(async function(){

// });

$('#apply').on('click',async function(){

var promo = $('#promo').val();

let url =`https://itcdland.csumb.edu/~milara/ajax/promo/promoCode.php?promoCode=${promo}`;
let response = await fetch(url);
let data = await response.json();
console.log(data);


var p1 = parseInt($('#p1').text());
var p2 = parseInt($('#p2').text());
var ship = parseInt($('#ship').val());
$('#dis').text(data.discount /100 * (p1+p2));
var dis = parseInt($('#dis').text());
$('#subtotal').text((p1+p2)-dis);
var subtotal = parseInt($("#subtotal").text());
$('#total').text(subtotal + ship);

 });
