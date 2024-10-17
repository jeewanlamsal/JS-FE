 let myLeads=[]
 let oldLeads=[]
//  let myLeads=`["www.awesomelead.com"]`
//  //Turn the myLeads string into an array
//  myLeads=JSON.parse(myLeads)
//  //push a new value to the array
//  myLeads.push("www.lead2.com")
//  //Turn the array into a string again
//  myLeads=JSON.stringify(myLeads)
//  console.log(typeof myLeads);
 

const inputEl=document.getElementById("input-el");
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el");

const deleteBtn=document.getElementById("delete-btn")
const leadsFromLocalStorage= JSON.parse(localStorage.getItem("myLeads"))
const tabBtn=document.getElementById("tab-btn")
//get the leads from localStorage- ps: JSON.parse()
//store it in a variable, leadsFromLocalStorage
//log out the variable


// console.log(leadsFromLocalStorage);
//check if leadsFromLocalStorage is truthy
//If so, set myLeads to its value and call renderLeads()

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function (){
    chrome.tabs.query({active: true,currentWindow: true}, function(tabs){
                  console.log(tabs);
                  myLeads.push(tabs[0].url)
                  localStorage.setItem("myLeads",JSON.stringify(myLeads))
                  render(myLeads)   
    })
    
})

function render(leads){
    let listItems=" "
for (let i = 0; i < leads.length; i++) {
    // listItems+="<li><a target=''_blank href='"+ myLeads[i] +"'>" +myLeads[i]+"</li>"
    //Alternative
    listItems+=`
    <li>
       <a target='_blank' href='${leads[i]}'> ${leads[i]}
    </li>`
    // ulEl.innerHTML+=" <li>"+myLeads[i] +"</li "

    //Altermative ways
//    const li=document.createElement("li")
//    li.textContent=myLeads[i]
//    ulEl.append(li)

    
}
ulEl.innerHTML=listItems
 }

//listen for double clicks on the delete button
// when clicked, clear localStorage , myLeads and DOM
deleteBtn.addEventListener("dblclick", function(){
    console.log("double clicked!");
    
    localStorage.clear()
    myLeads=[]
    render(myLeads)
 })



inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)
    // console.log(myLeads);
    
})
 