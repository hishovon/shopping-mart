
function updateCaseNumber(isIncrease){
    
const caseNumberFiled =document.getElementById('case-number-field');
const caseNumberString =caseNumberFiled.value;
const previousCaseNumber=parseInt(caseNumberString);

let newCaseNumber;

if(isIncrease==true)
{
    newCaseNumber= previousCaseNumber + 1 ;
}
else{
   newCaseNumber = previousCaseNumber -1;
}

caseNumberFiled.value= newCaseNumber;

return newCaseNumber;

}

// for (plus) button


function updateCaseTotal(newCaseNumber){


    const caseTotalPrice = newCaseNumber  * 59;
const  caseTotalElement =document.getElementById('case-total');
caseTotalElement.innerText= caseTotalPrice;

}

document.getElementById('btn-case-plus').addEventListener('click',function(){

const newCaseNumber= updateCaseNumber(true);

updateCaseTotal(newCaseNumber);
calculateSubTotal();

})

// for (minus) button

document.getElementById('btn-case-minus').addEventListener('click',function(){


    const newCaseNumber= updateCaseNumber(false);

updateCaseTotal(newCaseNumber);
calculateSubTotal();


})




