const localStorage = window.localStorage;
const cart_btn = document.getElementsByClassName('btn-cart');

eventListeners();

function eventListeners() {
  window.addEventListener("load", function () {
    let carts = GetCartsFromStorage();
    document.getElementById('cart-count').innerText = carts.length;

    let page = this.window.location.pathname;

    if (page == '/detail.html') FillDetailTable();
    if (page == '/index.html') FillDetailTable();

    for (let i = 0; i < cart_btn.length; i++) cart_btn[i].addEventListener('click', AddCart);
  })
}

function AddCart(e) {
  let id = e.target.name;
  let price = parseInt(document.getElementById('p-price-' + id).innerText.split(' ')[0]);
  let count = parseInt(document.getElementById('p-count-' + id).value);

  let cart = {
    product_name: document.getElementById('p-name-' + id).innerText,
    product_price: price,
    product_count: count,
    total_Price: price * count
  }
  AddCartsToStorage(cart);

  ShowAlert();
}


function GetCartsFromStorage() {
  let carts;

  if (localStorage.getItem("carts") === null) carts = [];
  else carts = JSON.parse(localStorage.getItem("carts"));

  return carts;
}

function AddCartsToStorage(data) {
  let carts = GetCartsFromStorage();
  carts.push(data);
  localStorage.setItem("carts", JSON.stringify(carts));

  document.getElementById('cart-count').innerText = carts.length;
}
function DeleteCartFromStorage(id) {
  let carts = GetCartsFromStorage();

  carts.splice(id, 1);

  localStorage.setItem("carts", JSON.stringify(carts));
  document.getElementById('cart-count').innerText = carts.length;

  FillDetailTable();
}

function ShowAlert() {
  $('#success-alert').show();
  setTimeout(function () { $('#success-alert').hide(); }, 1000);

}

function GetDetailPage() {
  window.location.href = './detail.html';
}

function GetShoppingCartPage() {
  window.location.href = './index.html';
}

function FillDetailTable() {
  let html = '';
  let carts = GetCartsFromStorage();

  for (let i = 0; i < carts.length; i++) {
    html += '<tr>' +
      '<td>' + carts[i].product_name + '</td>' +
      '<td>' + carts[i].product_price + '</td>' +
      '<td>' + carts[i].product_count + '</td>' +
      '<td>' + carts[i].total_Price + '</td>' +
      '<td><i class ="fas fa-trash delete" onclick="DeleteCartFromStorage(' + i + ')"></i></td>' +
      '</tr>';

    document.getElementById('cart-detail').innerHTML=html;
    

  }
}





// !!! Mouse fotoğrafın üstüne gelince müzik çalması  !!!!
 



function playMusic1() {
  document.getElementById("muzik-1").play();
}

function stopMusic1() {
  document.getElementById("muzik-1").pause();
  document.getElementById("muzik-1").currentTime = 0;
}

function playMusic2(){
  document.getElementById("muzik-2").play();
}

function stopMusic2() {
  document.getElementById("muzik-2").pause();
  document.getElementById("muzik-2").currentTime = 0;
}

function playMusic3(){
  document.getElementById("muzik-3").play();
}

function stopMusic3() {
  document.getElementById("muzik-3").pause();
  document.getElementById("muzik-3").currentTime = 0;
}

function playMusic4(){
  document.getElementById("muzik-4").play();
}

function stopMusic4() {
  document.getElementById("muzik-4").pause();
  document.getElementById("muzik-4").currentTime = 0;
}

function playMusic5(){
  document.getElementById("muzik-5").play();
}

function stopMusic5() {
  document.getElementById("muzik-5").pause();
  document.getElementById("muzik-5").currentTime = 0;
}

function playMusic6(){
  document.getElementById("muzik-6").play();
}

function stopMusic6() {
  document.getElementById("muzik-6").pause();
  document.getElementById("muzik-6").currentTime = 0;
}

document.getElementById("kart").addEventListener("mouseover", function(event){
  if(event.target.tagName === "IMG"){
    if(event.target.getAttribute("src") === "./img/image-4.jpg"){
      playMusic1();
    } else if(event.target.getAttribute("src") === "./img/image-6.jpg") {
      playMusic2();
    } else if(event.target.getAttribute("src") === "./img/image-slap.jpg") {
      playMusic3();
    } else if(event.target.getAttribute("src") === "./img/r&b.jpg") {
      playMusic4();
    } else if(event.target.getAttribute("src") === "./img/metal (2).jpg") {
      playMusic5();
    } else if(event.target.getAttribute("src") === "./img/hiphop.jpg") {
      playMusic6();
    }
  }
});

document.getElementById("kart").addEventListener("mouseout", function(event){
  if(event.target.tagName === "IMG"){
    if(event.target.getAttribute("src") === "./img/image-4.jpg"){
      stopMusic1();
    } else if(event.target.getAttribute("src") === "./img/image-6.jpg") {
      stopMusic2();
    } else if(event.target.getAttribute("src") === "./img/image-slap.jpg") {
      stopMusic3();
    } else if(event.target.getAttribute("src") === "./img/r&b.jpg") {
      stopMusic4();
    } else if(event.target.getAttribute("src") === "./img/metal (2).jpg") {
      stopMusic5();
    } else if(event.target.getAttribute("src") === "./img/hiphop.jpg") {
      stopMusic6();
    }
  }
});


