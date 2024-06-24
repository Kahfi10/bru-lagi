let products = null;
fetch('products.json')
   .then(response => response.json())
   .then(data => {
       products = data;
       showDetail()
   })
   function showDetail () {
       let detail = document.querySelector('.detail');
       let productId = new URLSearchParams(window.location.search).get('id');
       let thisProduct = products.filter(value => {
           return value.id == productId
       }) [0];
       if(!thisProduct){
           window.location.href = "/";
       }

       detail.querySelector('.image .img').src = thisProduct.image;
       detail.querySelector('.name').innerText = thisProduct.name;
       detail.querySelector('.price').innerText = '$' + thisProduct.price;
       detail.querySelector('.description').innerText = thisProduct.description;
   }
