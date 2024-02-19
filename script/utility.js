
const allTikect =document.getElementsByClassName('tikect');
let count=0;
let count2=40;

for(const tikect  of allTikect){
   tikect.addEventListener("click",function(e){
   console.log('boss select korsi') 
   count=count+1;
   count2=count2-1;
   


   if(count > 4){
    document.getElementById('alert').classList.remove('hidden');

   }
   else{
    
    e.target.classList.add('common')
    setInnerText('tikect-item',count);
   
   
   }
   
   setInnerText('tikect-stock',count2);
  
   
  
   //tikectStock('tikect-stock',count2)

   //document.getElementById('tikect-item').innerText=count

   })
}


function setInnerText(id,value) {
  document.getElementById(id).innerText=value
}
