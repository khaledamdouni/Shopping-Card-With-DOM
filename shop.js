
let btn_plus = document.querySelectorAll('.button-acrement');
let btn_moin = document.querySelectorAll('.button-decrement');
let tot = document.querySelector('.total-bag');
let remov = document.querySelectorAll('.remove');
let like = document.querySelectorAll('.like')


for(let btn of btn_plus){
btn.addEventListener('click',()=>{      
        btn.nextElementSibling.innerHTML =  parseInt( btn.nextElementSibling.innerHTML)+1;
        total();
    }
)}
for(let btn of btn_moin){
btn.addEventListener('click',()=>{
    if(parseInt( btn.previousElementSibling.innerHTML)>0)      
        btn.previousElementSibling.innerHTML =  parseInt( btn.previousElementSibling.innerHTML)-1;
        total();
    }
)}
function total(){
    let fadh=document.querySelectorAll('.produit');
    let s=0;
for(let el of fadh){
    let qt = el.querySelector('.quantity-price').innerHTML;
    let pr =  el.querySelector('.price').innerHTML;
    s+=qt*pr;
}
tot.innerHTML=s ;
}

for (let i=0; i<remov.length;i++){
    remov[i].addEventListener('click', ()=>{
        remov[i].parentElement.remove();
        total();
    } )  
}
for(let lik of like){
lik.addEventListener('dblclick', ()=>{


     if(lik.style.color=='red')
        lik.style.color='black'
    else lik.style.color='red'

})
}