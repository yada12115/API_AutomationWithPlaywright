import { test, expect } from '@playwright/test';

test.describe('Test group', () => {
  test('seed', async () => {
   
      let num:number[]=[12,34,53,45,33,45,]
      let   largestNumber=num[0];
       for(let i=0;i<num.length;i++){
             if(largestNumber<num[i]){
                  largestNumber=num[i]

             } 

       }
       console.log(largestNumber)
 
  });

    test('secondLargestNumber', async () => {
   
      let num:number[]=[12,34,53,45, 54,33,45,]
      let secoundlargestValue= num[0]
      let   largestNumber=num[0]; 
            for(let n of num){
             if(n>largestNumber){
                 secoundlargestValue = largestNumber
                    largestNumber=n
                  

             } else if( n>secoundlargestValue ){
                       secoundlargestValue=n
             }

       }
       console.log(secoundlargestValue)
 
  }); 





  test('check palindrome',async()=>{
     let str="moM";
     let name=str.toLowerCase()
     let reverse="";

     for(let i=name.length-1;i>=0;i--){
            reverse =reverse+ name.charAt(i);

     }

     if(name==reverse){
  console.log(" thi is palindrome")
     }else{
      console.log(" this is not palindrome")
     }

  })

  test('verfy vowels count',async()=>{
      let strs="automation"

      let count=0;
       for(let word of strs){
        if("aiou".includes(word)){
           count++;
        }

       }
       console.log(count)

  })

  test('count characters',async()=>{
      let count=0;
      let name="I Love Mom"

      for(let i=0;i<name.length;i++){
    count++
      }

  console.log(count)
  })



  test('',async()=>{
     
    let str="automation"
     let map= new Map<string,number>();
  for( let char of str ){
   map.set(char,(map.get(char) || 0 )+1);
  }


  for(let [char,count] of map){
      if(count>1){
  console.log( char +" -- "+count )
      }

  }


  })

  test(' ',async()=>{

 
    let name="qa automation";
 let  map= new Map<string,number>();
    for(let char of name){
       map.set(char,(map.get(char) || 0)+1)
       
    }

    for(let [char,count] of  map){
         if(count>1){
    console.log(char +" -- "+ count   )
         }

    }

 })

 test('string reverse',async()=>{
      let name ="automation"
      let reverse=""
       for(let i=name.length;i>=0;i--){
          reverse=  reverse+name.charAt(i)        
       }

       if(name==reverse){
         console.log( "this is palindarme")
       }else{
          console.log("this is not palindarme")
       }
        
 })

test('  test of characters count',async()=>{
   let name="auTomAtioN"
     let names=name.toLocaleLowerCase()
 let map= new Map<string,number>();
      for(  let char of names){
        map.set(char,(map.get(char) || 0)+1)
      
      }
        for(let [char,count] of map ){
            if(count>1){
             console.log(char+" -- "+count)
            }

        }

})


test('find Dublicate number',async()=>{
      let num:number[]=[21,43,64,64,53,42,42,634]
             let map= new Map<number,number>();
                for( let n of num){
                    map.set(n,(map.get(n) ||0)+1)
               
                  }   

                    for( let [number,count] of map){

                        if(count>1){
                        console.log(number+" -- "+ count)
                        }
                    }
                    
})


test('reverse string ',async()=>{

   let str ="automation";     
 for (let i =str.length -1 ; i >=0; i--)   
 {


 console.log (str.charAt(i));
 }
})

test('secound Largest number',async()=>{
  let nums:number[]=[12,53,42,64,75,83]
   let largestnumber=nums[0]
let secoundlargestnumber=nums[0]
    for(let num of nums){
         if(num>largestnumber){
           secoundlargestnumber=largestnumber
          largestnumber=num

         } else if(num>secoundlargestnumber && num!==secoundlargestnumber){
               secoundlargestnumber=num
         }

    }
    console.log(secoundlargestnumber)




})

test('largest number from array',async()=>{
 let num:number[]=[123,342,64,7575,99882,65]
    let largest=num[0]
      for (let n of num){
          if(n>largest){
                largest=n
          }


      }
console.log(largest)

})

  test('count of word  number',async() =>{
   let name="I  LOVE INDIA" 
   let map= new Map<string,number>()
       for(let char of name ){
           map.set(char,(map.get(char) || 0)+1)

       }
       for( let [char,count] of map){
            if(count>1){

            console.log(char +" -- "+count)
            }
         

       }


  })
  

  test(' revser spaceil characters',async()=>{
   let names="I love india"
   let listname= names.split(" ")
            
       for(let i =0;i<listname.length;i++){

             if(listname[i]=="love"){
        let reverse="";

                 for(let j=listname[i].length-1;j>=0;j--){
                   reverse+=  listname[i].charAt(j)
                  
                 }
                console.log(reverse)

                 }else{
                  console.log(listname[i])
                  
                
                 }
                 


             } 
             
             
  })








});
