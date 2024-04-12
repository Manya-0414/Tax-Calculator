document.addEventListener('DOMContentLoaded',function() {
    const form=document.getElementById('taxform');
    const modal=document.getElementById('modal');
    const taxres=document.getElementById('results');
   
    
    form.addEventListener("submit",function(event){
event.preventDefault();
resetErrorIcons();


const grossval=parseFloat(document.getElementById('grossincome').value);
const extraval=parseFloat(document.getElementById('extraincome').value);
const age= document.getElementById('age').value;
const dedval=parseFloat(document.getElementById('deductions').value)||0;

let isError=false;

if(isNaN(grossval)){
  showErrorIcon('error1');
 isError=true;
}

if(isNaN(extraval)){
showErrorIcon('error2');
 isError=true;
}

if(age ==='' ){
    showErrorIcon('error3');
 isError=true;
}

if(isNaN(dedval)){
   showErrorIcon('error4');
 isError=true;
}

if(!isError){
 let taxincome = (grossval+extraval)-dedval;
 let taxrate = (age=== '<40')?0.3:(age==='>=40 & <60')?0.4 : 0.1;
 let tax=(taxincome>800000)?(taxincome-800000)*taxrate : 0;

taxres.textContent='Your overall income in Rupees will be  ' + tax.toFixed(2) + ' after tax deductions' ; 
modal.style.display='block';
}}
);
    
    function showErrorIcon(id){
        document.getElementById(id).style.display='inline';
    } 
    function resetErrorIcons(){
        const erroricons= document.querySelectorAll('.errors');
        erroricons.forEach(icon=> {
            icon.style.display='none';
        });
    }
const closeButton=document.querySelector('.close');
closeButton.addEventListener('click',function(){
    modal.style.display='none';

});
window.addEventListener('click',function(event){
if(event.target == result){
    modal.style.display='none';
}
});
});

