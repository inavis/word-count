//COUNTRY API  -- XMLHTTP
/*
var xhr = new XMLHttpRequest();

xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();

xhr.onload = function(){
    if(xhr.status>=200 && xhr.status<300){
        let data = JSON.parse(this.response);
        //console.log(data);
        for(let x of data){
            console.log(`
                Country name : ${x.name}
                Country sub-region: ${x.subregion}
                Country population :${x.population}
            `)
        }
    }else{
        console.log("Data not found");
    }
};
*/

//CHECKING IF TWO json objects are same even if in different order
//USING LODASH -includes lodash.js in index.html also








//////////////////








//


/*


    //combine 2 array and sort them
    var friends1 = [
        "Mari",
        "MaryJane",
        "CaptianAmerica",
        "Munnabai",
        "Jeff",
        "AAK chandran"
        ];
        var friends2 = [
        "Gabbar",
        "Rajinikanth",
        "Mass",
        "Spiderman",
        "Jeff",
        "ET"
        ];
        function dataHandling3(input1,input2){
            input1= input1.concat(input2);
            input1 = input1.sort()
            return input1;
        }
       var friends =  dataHandling3(friends1,friends2);
       console.log(friends);

       console.log(`
       
       first item: ${friends[0]} 
       Middle item: ${friends[Math.floor(friends.length/2)]}
       last item: ${friends[friends.length-1]}
       `)

       //adding elements to end and beginning of array
       friends.push("Sivani");
       friends.unshift("Ash");
       console.log(friends)

       // adding Mr. to all names 
       for(let x in friends){
           friends[x] = "Mr."+friends[x];
       }
       console.log(friends)

       //comcat all name with comma(,)
       console.log(friends.join(","));

       //retrurn list of names which ha 'a'
       let arr=[];
        for(let x of friends){
            if(x.indexOf('a')!=-1 || x.indexOf('A')!=-1){
                arr.push(x);
            }
        }
        console.log(arr)

        //Average length of friends name:
        let len=0;
        friends.forEach(x => len+=x.length);
        let avg =parseInt( len/friends.length);
        console.log(avg)


*///

//

console.log("CONSOLE")

let totalcount=100;
let calculatecount =()=>{
  let count = document.querySelector("#text-area").value.length;
  let remcount = totalcount-count;

  let span = document.querySelector("#counter");
  span.textContent = remcount;
}


let showpassword = () => {
  let pass = document.querySelector("#pass-box")

  let attr = pass.getAttribute("type");

  if(attr=="password"){
    pass.setAttribute("type","text");
  }else{
    pass.setAttribute("type","password")
  }
}


//
let likecount =0;
let dislikecount=0;
let totcount=0;
let like = () => {
likecount++;
totcount++;
document.querySelector("#like-count").textContent=likecount;
document.querySelector("#total-count").textContent=totcount;
};

let dislike =() => {
dislikecount++;
totcount++;
document.querySelector("#dislike-count").textContent=dislikecount;
document.querySelector("#total-count").textContent=totcount;
};

//
let calculatelength = () =>{
  let c = document.querySelector("#text-box").value.trim().length; //remove extra spaces on sides using trim
  console.log(c)
  let area= document.querySelector("#display");
  area.value=c;
  area.style.display="inline";
}