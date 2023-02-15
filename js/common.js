function getTextElementValueById(elementId){

    const iphoneTotalElement=document.getElementById(elementId);
    const currentIphoneTotalString = iphoneTotalElement.innerText;
    const currentIphoneTotal =parseInt(currentIphoneTotalString);
    return currentIphoneTotal;
    
    
    }
    
    function calculateSubTotal(){
        // total calculate
      
        const currentIphoneTotal = getTextElementValueById('iPhone-total');
        const caseTotalElement =getTextElementValueById('case-total');
    
        const currentSubTotal = currentIphoneTotal + caseTotalElement;
        const subTotalElement = document.getElementById('sub-total');
         subTotalElement.innerText= currentSubTotal;
    
    }
    