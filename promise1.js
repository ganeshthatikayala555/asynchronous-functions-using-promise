function del(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(ms<1000){
                reject("rejected");
            }
            else{
                resolve("problem resolved");
            }
        },ms);
    });
}
del(1001)
.then(function(result){
    console.log(result);
})
.catch(function(error){
   console.log(error);
});
del(500)
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error);
})
del(1000)
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("promise completed");
});