






function backhome() {
    window.location.href = "./home.html"
}

function cartfile(){
  window.location.href = "./cartfile.html"
  }

let getproduct = JSON.parse(localStorage.getItem("selectproducts")) || []
// console.log(getproduct);


let cart_count = JSON.parse(localStorage.getItem("productdatas"))
console.log(cart_count);



// let cartcount = 0

document.getElementById("newpage").innerHTML = getproduct.map((v,i)=> {
    // console.log(v.side_image.image1);
    
// cartcount += v.quantity/


    return ` <div id="card">
      <div id="sideimg">
        <div>
        <img id="sideimg-${i}" src="${v.side_image.image1}" class="card-img-top" alt="..."  onclick="getsideimg(${i})">
        </div>
          <div>
        <img id="sideimg-${i}" src="${v.side_image.image2}" class="card-img-top" alt="..." onclick="getsideimg(${i})">
        </div>
          <div>
        <img id="sideimg-${i}" src="${v.side_image.image3}" class="card-img-top" alt="..." onclick="getsideimg(${i})">
        </div>
          <div>
        <img id="sideimg-${i}" src="${v.side_image.image4}" class="card-img-top" alt="..." onclick="getsideimg(${i})">
        </div>
          <div>
        <img id="sideimg-${i}" src="${v.side_image.image5}" class="card-img-top" alt="..." onclick="getsideimg(${i})">
        </div>
      
      </div>

          <div id="bigimg">
        <img id="ori-sideimg" src="${v.image}" class="card-img-top1" alt="...">
        </div>
        <div id="content1">
          <p class="card-title">${v.name}</p>
          <h6>${v.sub_name}</h6>

          <h4 class="card-text">MRP ₹ ${v.price.toFixed(2)}</h4>
          <p>inclusive of all taxes*</p>
          <p>Dial Color : Black</p>
          <div>
          <button class="btn1c" id="btn1" onclick="addcart(${i})"><span>ADD TO CART </span></button>
          <button id="btn1"><span>BUY NOW</span></button>
          </div>

          <div id="offdiv">
          <div id="leftimg"><img id="offimg1" src="./extraimages/Neemans_d_cart.webp" alt="" /></div>
          <div id="rightimg"><b>Partner Offers </b><br/><p> Get 10% OFF* On Your Successful Order. <U>T&C</U></p></div>
          </div> <br/>

        
        </div>
      </div>`
}).join("")


let cartstorage = JSON.parse(localStorage.getItem("productdatas")) ||[]

function addcart(ind) {
  // console.log(getproduct[ind]);


  let item = getproduct[ind]
  console.log(item);

  if (cartstorage.some((v)=> v.id === item.id)) {
    alert ("Added in Cart")
    return;
  }
  
  cartstorage.push(item)
  console.log(cartstorage);
  
  localStorage.setItem("productdatas", JSON.stringify(cartstorage))
  window.localStorage.href = "./cartfile.html"

 

}





















//    let maincart = JSON.parse(localStorage.getItem("selectproducts1")) ||   []
   
// function addcart(ind){
//   // console.log("hi",ind);
  
//   let item = getproduct[ind]
//   console.log(item);

//   if(maincart.some((v)=> v.id === item.id)){
//     alert("already added");
//     return;
//   }
//   maincart.push(item)
//   localStorage.setItem("selectproducts1", JSON.stringify(maincart))
// //  window.location.href = "./cartdata.html" 


// }




// function getData(){

// let total = 0
// let cart_count = 0


  
//   document.getElementById("cartData").innerHTML = maincart.map((v,i)=>{
//       console.log(v.side_image.image1);

// let quantity_price = v.quantity * v.price
// console.log(quantity_price);
// total +=quantity_price
// // console.log(total);
// cart_count +=v.quantity
// console.log(cart_count);

// document.getElementById("totalid").innerHTML = total




//    return `<div id = "container1">
   
  
//   <div id="content1a">
//    <img id="ori-img" src="${v.image}" class="card-img-top1" alt="...">
//    </div>
//    <div id="content2">
//     <p class="card-title">${v.name}</p>
//     <h6>${v.sub_name}</h6>
   
//     <h4 class="card-text">MRP ₹ ${v.price.toFixed(2)}</h4>
//     <div>
//     <button class = "increbtn" onclick = "incre(${v.id},1)"> +</button>
//     <button class = "increbtn" onclick = "">${v.quantity}</button>
//     <button class = "increbtn" onclick = "incre(${v.id},-1)"> -</button>
    
// </div>

//     <button id="btn1" onclick="delData(${v.id})">Delete </button>
//      <p>your current product(s) total is: ₹. ${quantity_price} </p>
   
//    </div>
   
   
//    </div>`
    
//   }).join("")
//   // document.getElementById("cartlength").innerHTML = cart_count

// }
// getData()



// function getsideimg(ind) {
//     document.getElementById("ori-sideimg").src = document.getElementById(`sideimg-${ind}`).src
//     console.log(ind)
// }

