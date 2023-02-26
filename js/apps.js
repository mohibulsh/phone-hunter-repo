const phonesLoad = async(phoneData)=>{
    const phoneUrl =`https://openapi.programming-hero.com/api/phones?search=${phoneData}`
    const res =await fetch(phoneUrl);
    const data =await res.json();
    phoneDisplay(data.data)
}

const phoneDisplay = phones=>{
    const mainContainer = document.getElementById('main-containe');
    mainContainer.innerText = '';
    phones = phones.slice(0,20);
    const noPhone = document.getElementById('no-phone');
    if(phones.length === 0){
        noPhone.classList.remove('d-none')
    } else{
        noPhone.classList.add('d-none');
    }
    phones.forEach(phone =>{
        const creatDiv = document.createElement ('div');
         creatDiv.classList.add ('col');
         creatDiv.innerHTML =`
         <div class="card h-100 p-4">
         <img src="${phone.image}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${phone.phone_name}</h5>
           <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           <button type="button" class="btn btn-primary">more details</button>
         </div>
       </div>
         `
          mainContainer.appendChild(creatDiv);
    })
    // stop the spinng loader
    toggoleSpinner(false);
}

document.getElementById('search-btn').addEventListener('click',function(){
       const searchField = document.getElementById('search-field');

    //    start the spinnig loading
    toggoleSpinner(true);

       const searchFieldValue =searchField.value ;
       phonesLoad(searchFieldValue);
})

// enter input search
document.getElementById('search-field').addEventListener("keypress", function(event) {
    const searchField = document.getElementById('search-field');
    if (event.key === "Enter") {
         //    start the spinnig loading
    toggoleSpinner(true);

    const searchFieldValue =searchField.value ;
    phonesLoad(searchFieldValue);

    }
});

const toggoleSpinner = isLoading =>{
    const spinngLoader = document.getElementById('spinner-load');

    if(isLoading){
        spinngLoader.classList.remove('d-none')
    }
      else{
        spinngLoader.classList.add('d-none')
      }
}
phonesLoad('iphone')