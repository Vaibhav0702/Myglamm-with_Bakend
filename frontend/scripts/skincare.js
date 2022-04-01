import{showdata}from"./showdata.js"

async function givedta (){
    let product=document.getElementById("product");
    try{
        let res= await fetch(`http://localhost:5000/skincares`)
        let data=await res.json();
        console.log(data)
        showdata(data,product)
    }catch(err){
      console.log(err);
    }
}
givedta()

    
    
    
  