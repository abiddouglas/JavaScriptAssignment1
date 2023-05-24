
let apiLink = "https://randomuser.me/api/?results=";

let numberOfData = users;
const numbOfItemPerPage = 10;
var numberOfPages = Math.ceil(numberOfData/numbOfItemPerPage);


FillPagination();
CreatePage(1);



function ContactItem(userData){
    const listItem = document.createElement("li");
    listItem.classList.add("contact-item","cf")
    //div1 
    const div1 = document.createElement("div");
    const img = document.createElement("img")
    img.src = userData.image;
    img.classList.add("avatar");
    const heading = document.createElement("h3");
    heading.innerText = userData.name;
    const span = document.createElement("span");
    span.innerText = userData.email;
    span.classList.add("email");
    div1.appendChild(img);
    div1.appendChild(heading);
    div1.appendChild(span);
    div1.classList.add("contact-details");
    listItem.appendChild(div1);

    //div2
    const div2 = document.createElement("div");
    const span2 = document.createElement("span");
    span2.innerText = "Joined " + userData.joined;
    span2.classList.add("date");
    div2.appendChild(span2);
    div2.classList.add("joined-details")
    listItem.appendChild(div2);

    return listItem;
}

function ClearList(list){
    while(list.hasChildNodes()){
        list.firstChild.remove()
    }
}

function CreatePage(pageNumber){
    const contactList = document.querySelector(".contact-list");
    ClearList(contactList);
    const endIndex = (pageNumber * numbOfItemPerPage) - 1;
    const startIndex = endIndex - numbOfItemPerPage + 1;

    for(let i=startIndex;i<=endIndex;i++){
        const item = ContactItem(users[i]);
        contactList.appendChild(item);
    }
    UpdateTotal(numberOfData);


}

function FillPagination(){
    const pagesList = document.querySelector(".pagination ul");
    for(let i=1;i<=numberOfPages; i++){
        const listItem = document.createElement("li");
        const linkElement = document.createElement("a");
        linkElement.innerText = i;
        listItem.appendChild(linkElement);
        listItem.addEventListener("click",(evt)=>{
            CreatePage(evt.target.innerText);
        },false);
        pagesList.appendChild(listItem);
    }
}

function UpdateTotal(totalNumberOfContacts){
    document.querySelector(".page .page-header h3").innerText = "Total: " + totalNumberOfContacts;
}