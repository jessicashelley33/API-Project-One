// Setup Variables to work with later
const baseUrl = "https://api.thecatapi.com/v1/breeds?x-api-key=";
const APIKey = "4411fa7d-71b0-4b50-949d-6209228a4845";
const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");

//Create EventListeners for my buttons


document.getElementById("btnOne").addEventListener("click", () => {
  fetchFunFacts("dataOne");
});
btnTwo.addEventListener("click", () => {
  fetchFunFacts("dataTwo")
});
btnThree.addEventListener("click", ()=> fetchFunFacts("dataThree"));


// Create Function to Fetch API information
function fetchFunFacts(div) {
  
    fetch(baseUrl+APIKey) 
        .then(response => {
            //console.log(response);
            return response.json();
        }) .then(json =>{
            console.log(json);

          if(div == "dataOne"){
            let dataOne = document.getElementById("dataOne");
            let nameOne = json[1].name;
            let factOne = json[1].description;
            let itemOne = document.createElement('h4');
            itemOne.style.color ="#d97777";
            itemOne.style.fontSize ="2.7rem";
            itemOne.style.fontFamily ="Arial, Helvetica, sans-serif";
            let listItemOne = document.createElement('p');
            listItemOne.style.color ="#4c4c4c";
            listItemOne.style.lineHeight = 1.9;
            listItemOne.style.fontFamily ="Arial, Helvetica, sans-serif";
            itemOne.appendChild(document.createTextNode(nameOne));
            listItemOne.appendChild(document.createTextNode(factOne));
            dataOne.appendChild(itemOne);
            dataOne.appendChild(listItemOne);
          } else if(div == "dataTwo"){
            let nameTwo = json[2].name;
            let factTwo = json[2].description;
            let itemTwo = document.createElement('h4');
            itemTwo.style.color = "#d97777";
            itemTwo.style.fontSize ="2.7rem";
            itemTwo.style.fontFamily ="Arial, Helvetica, sans-serif";
            let listItemTwo = document.createElement('p');
            listItemTwo.style.color ="#4c4c4c";
            listItemTwo.style.lineHeight = 1.9;
            listItemTwo.style.fontFamily ="Arial, Helvetica, sans-serif";
            itemTwo.appendChild(document.createTextNode(nameTwo));
            listItemTwo.appendChild(document.createTextNode(factTwo));
            dataTwo.appendChild(itemTwo);
            dataTwo.appendChild(listItemTwo);
          } else if (div == "dataThree") {
            let nameThree = json[6].name;
            let factThree = json[6].description;
            let itemThree = document.createElement('h4');
            itemThree.style.color ="#d97777";
            itemThree.style.fontSize ="2.7rem";
            itemThree.style.fontFamily ="Arial, Helvetica, sans-serif";
            let listItemThree = document.createElement('p');
            listItemThree.style.color ="#4c4c4c";
            listItemThree.style.lineHeight = 1.9;
            listItemThree.style.fontFamily ="Arial, Helvetica, sans-serif";
            itemThree.appendChild(document.createTextNode(nameThree));listItemThree.appendChild(document.createTextNode(factThree)); 
            dataThree.appendChild(itemThree);
            dataThree.appendChild(listItemThree);
            
          }

            
            //let dataTwo = document.getElementById("dataTwo");
            //let dataThree = document.getElementById("dataThree");
    
            
            
            
            
         });
    
}






