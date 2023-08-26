const base1=document.querySelector('.base1');
const base2=document.querySelector('.base2');
const topping1=document.querySelector('.topping1');
const topping2=document.querySelector('.topping2');
const topping3=document.querySelector('.topping3');
const pizza=document.querySelector('.pizza');

base1.addEventListener('dragstart',(e)=>{
    console.log(e.target.id);
   e.dataTransfer.setData('text/plain',e.target.id);
   e.target.style.opacity=0.3;
})

base1.addEventListener('dragend',(e)=>{
  e.target.style.opacity=1;
})
base2.addEventListener('dragstart',(e)=>{
    console.log(e.target.id);
   e.dataTransfer.setData('text/plain',e.target.id);
})

topping1.addEventListener('dragstart',(e)=>{
  console.log(e.target.id);
 e.dataTransfer.setData('text/plain',e.target.id);
})

topping2.addEventListener('dragstart',(e)=>{
  console.log(e.target.id);
 e.dataTransfer.setData('text/plain',e.target.id);
})

topping3.addEventListener('dragstart',(e)=>{
    console.log(e.target.id);
   e.dataTransfer.setData('text/plain',e.target.id);
})


pizza.addEventListener('dragover',(e)=>{
    e.preventDefault();
})

pizza.addEventListener('drop',(e)=>{
  e.preventDefault();
  const sourceId=e.dataTransfer.getData('text/plain');
  //console.log(sourceId);
  e.target.appendChild(document.getElementById(sourceId));
  const element=document.getElementById(sourceId);
  // element.style.margin='auto';
  element.style.position='absolute';
  element.style.top='50%';
  element.style.left='50%';
  element.style.transform='translate(-50%,-50%)';
  //  e.target.style.justify-content(center);
})
