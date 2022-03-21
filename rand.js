document.getElementById("json").addEventListener("click",function(){
    let length=document.getElementById("len").value;
    let count=document.getElementById("count").value;
    fetch(`https://ciprand.p3p.repl.co/api?len=${length}&count=${count}`)
    .then(response=>response.json())
    .then(data=>{
    let s=data.Strings
    document.getElementById("string").value+=s;
       console.log(data);
       console.log(data.Strings)
    })
})
    
document.getElementById("len").addEventListener("keydown",function(e){
    if(e.keyCode==8){
        document.getElementById("string").value="";
    }
})

document.getElementById("count").addEventListener("keydown",function(e){
    if(e.keyCode==8){
        document.getElementById("string").value="";
    }
})



document.getElementById("meme").addEventListener("click",function(){
    
    fetch("https://api.imgflip.com/get_memes")
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        let arr=data.data.memes;
        let i=0;
        document.getElementById("mem").src=arr[i].url;
        document.getElementById("name").innerText=arr[i].name;
        document.getElementById('next').addEventListener("click",function(){
        i++;
        document.getElementById("mem").src=arr[i].url;
        document.getElementById("name").innerText=arr[i].name;    
            
        })
        document.getElementById('prev').addEventListener("click",function(){
            i--;
            document.getElementById("mem").src=arr[i].url;
            document.getElementById("name").innerText=arr[i].name;    
                
            })
    })
})
