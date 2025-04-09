

function backhome() {
    window.location.href = "./productpage.html"
}


let cartstorage = JSON.parse(localStorage.getItem("productdatas"))
console.log(cartstorage);




function getCartData(){

  let cart_count = 0
  let total = 0
    
    document.getElementById("cartData").innerHTML = cartstorage.map((v,i)=>{

        // console.log(v);

     cart_count += v.quantity
     console.log(cart_count);
     
        let quantity_price = v.quantity * v.price
        console.log(quantity_price);
        total += quantity_price 
        
        document.getElementById("totalid").innerHTML =total
        return ` <div id="cartcontainer1">
        
           <div id="cartcontainer">
            <div id="cartbigimg">
          <img id="cart-ori-sideimg" src="${v.image}" class="card-img-top1" alt="...">
          </div>
          <div id="cart-content1">
            <p class="card-title">${v.name}</p>
            <h6>${v.sub_name}</h6>
        
            <h4 class="card-text">MRP ₹ ${v.price.toFixed(2)}</h4>
            <p>inclusive of all taxes*</p>
            <p>Dial Color : Black</p>
            <button class="btn1c" id="btn1" onclick="incre(${v.id},1)">+</button>
            <button class="btn1c" id="btn1" onclick="">${v.quantity}</button>
            <button class="btn1c" id="btn1" onclick="incre(${v.id},-1)">-</button>
          
          </div>
           <div id="cart-del">
            <button class="btn1c" id="btn1" onclick="del(${v.id})"><span><i class="fa-solid fa-xmark"></i></span></button>
          
            </div>
           </div>

            <div id="summarydiv"> 
     <table>
          <thead>
   
      <th>  Order Summary ( items)</th>
 
</thead>
   <tbody id=""tabbody>
   <tr>
    <td>Order value</td>
    <td>₹.${v.price.toFixed(2)}</td>
  </tr><br/>
  <tr>
    <td>Shipping</td>
    <td style="color: green;">Free</td>
  </tr><br/>
  <tr>
    <td>Coupon Discount</td>
    <td>-₹.${(v.price.toFixed(2)/100)*10}</td>
  </tr><br/>
  <tr>
    <td><b>Grand Total</b></td>
    <td>₹. <span id="totalid"></span></td>
  </tr></tbody>
     </table>
  
    </div>
        </div>`
        }).join("")   
        document.getElementById("cartlength").innerHTML = cart_count
}

getCartData()


function del(itemid) {
    // console.log(itemid);
    cartstorage = cartstorage.filter(function(v,i){
        return v.id!==itemid
    })
    localStorage.setItem("productdatas", JSON.stringify(cartstorage))

    getCartData()
}


function incre(id, num) {
    console.log(id, num );
    let item = cartstorage.find((v,i)=>{
        // console.log(item);
        
        return v.id === id
    })
    

    if (item) {
        item.quantity += num
        console.log(item);
        
        if (item.quantity<1) {
            item.quantity-=num
            console.log(item)
        }
        getCartData()
        localStorage.setItem("productdatas", JSON.stringify(cartstorage))

    }

}


