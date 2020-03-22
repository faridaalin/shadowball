

const buttonAdd = document.querySelector('.add')
const buttonSubstract = document.querySelector('.subtract')
const qtyInput = document.querySelector('.qty-input')

const btnCart = document.querySelector('.btn-cart')
const modal = document.querySelector('.modal')
const removeModal = document.querySelector('#removeModal')

const quantity = document.querySelector('.quantity')
const selectSize = document.querySelector('.select-size')

const size = document.querySelector('#size')

// Add remove qty
buttonAdd.addEventListener('click', () => {
    const addedQty = qtyInput.value = Number(qtyInput.value) + 1
});

buttonSubstract.addEventListener('click', () => {
    const removedQty = qtyInput.value = Number(qtyInput.value) - 1
});


//Show modal if size and qty is selected
function validateFieldSize()  {
    if(!Number(size.options[size.selectedIndex].value) > 0) {
       selectSize.style.borderColor = "tomato";
    
    } else {
        selectSize.style.borderColor = "transparent";
    
    }
}
function validateFieldQty() {

    if(!Number(qtyInput.value) > 0) {
        console.log('QTY field: add border')
        quantity.style.borderColor = "tomato";
      
    } else {
        console.log('QTY field: valid')
        quantity.style.borderColor = "transparent";
        
    }

}

const cartIcon = document.querySelector('.itemNumber');
btnCart.addEventListener('click', () => { 
    if(Number(qtyInput.value) > 0 && Number(size.options[size.selectedIndex].value) > 0) {
        modal.style.display = "block"
        cartIcon.style.display = "block"
        document.querySelector('.itemNumber span').textContent = Number(qtyInput.value);
        validateFieldSize()  
        validateFieldQty() 

    } else {
        modal.style.display = "none"
        validateFieldSize()  
        validateFieldQty() 
    }

})



removeModal.addEventListener('click', () => { modal.style.display = "none"})


const smallProductImgUl = document.querySelector('.small-product-images-ul')
const imgList = smallProductImgUl.children;

for(let i = 0; i < imgList.length; i++) {
    const thumbImg = imgList[i];    
    thumbImg.addEventListener('click', () => {
        document.querySelector('.big-product-image img').src = event.target.src;

    })
   
}


// tab
const productTabLink = document.querySelectorAll('.product-tab-link');
const tabContent = document.querySelectorAll('.tab-content')

for(let i = 0; i < productTabLink.length; i++) {
  productTabLink[i].addEventListener('click', () => {
    removeActiveClass(productTabLink)

    const tabDataValue = productTabLink[i].dataset.target;

    tabContent.forEach(content => {

        content.style.display = "none"


        if(tabDataValue === content.id) {
           content.style.display = "block"
            event.target.classList.add("link-active")
        } else {
            content.style.display = "none"
        }
    });

  })
}

function removeActiveClass(tabLink) {
    productTabLink.forEach(removeActive => {
        removeActive.className = removeActive.className.replace('link-active', '')
    })
}