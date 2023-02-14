// iphone price(Part).....


function updateIphoneNumber(isIncrease){
    
    const iphoneNumberFiled =document.getElementById('iphone-number-field');
    const iphoneNumberString =iphoneNumberFiled.value;
    const previousIphoneNumber=parseInt(iphoneNumberString);
    
    let newIphoneNumber;
    
    if(isIncrease==true)
    {
        newIphoneNumber= previousIphoneNumber + 1 ;
    }
    else{
       newIphoneNumber = previousIphoneNumber -1;
    }
    
    iphoneNumberFiled.value= newIphoneNumber;
    
    return newIphoneNumber;
    
    }



// iphone plus......


function updateIphoneTotal(newIphoneNumber){

    const iphoneTotalPrice = newIphoneNumber * 1219;
    const iphoneTotalElement = document.getElementById('iPhone-total');
    iphoneTotalElement.innerText=iphoneTotalPrice;
}



document.getElementById('btn-iphone-plus').addEventListener('click',function(){

   const newIphoneNumber = updateIphoneNumber(true);

   updateIphoneTotal(newIphoneNumber);
})


// iphone minus ...........

document.getElementById('btn-iphone-minus').addEventListener('click',function(){


    const newIphoneNumber = updateIphoneNumber(false);
   
    updateIphoneTotal(newIphoneNumber);

})

