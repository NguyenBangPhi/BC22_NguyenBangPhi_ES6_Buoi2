import {getEle,loadImg} from "./func.js";
let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

loadImg(dataGlasses);
window.clickk = function(idData){
    console.log(idData);
    const data = dataGlasses.find((dataG,index) => {
        return dataG.id === idData;
    });
    console.log(data);
    if(data !== null){
        getEle("avatar").innerHTML = `<img src="${data.virtualImg}" alt="">`;
        getEle("glassesInfo").innerHTML = `
            <h4>${data.name} - ${data.brand} (${data.color})</h4>
            <span class="badge badge-secondary">$${data.price}</span> <span style="font-size: 10px;color: rgb(42, 143, 2);">Stocking</span> 
            <div>
                ${data.description} 
            </div>
        `;
        getEle("glassesInfo").style.display = "block";
    }
}




// const getEle = (id) => {
//     return document.getElementById(id);
// }


// function clickk(idData) {
//     console.log(idData);
//     const data = dataGlasses.findIndex((dataG,index) => {
//         return dataG.id === idData;
//     });
//     console.log(data);
//     if(data !== null){
//         getEle("avatar").innerHTML = `<img src="./img/v${data+1}.png" alt="">`;
//     }
// }
// const clickk = (idData) => {
//     console.log(idData);
//     const data = dataGlasses.findIndex((dataG,index) => {
//         return dataG.id === idData;
//     });
//     console.log(data);
//     if(data !== null){
//         getEle("avatar").innerHTML = `<img src="./img/v${data+1}.png" alt="">`;
//     }
    
// };
// const loadImg = (data) => {
//     for (let i = 0; i < data.length; i++) {
//         getEle("vglassesList").innerHTML += `
//         <button onclick="clickk('${data[i].id}')" style="width: 33.3333%;border: none;padding: 0;outline: none;background:#fff">
//                         <img src="${data[i].src}" alt="" class="w-100 p-2" style="background-color: #fff;">
//                     </button>`;
//     }
// };























// const click = (idData) => {
//     console.log("abc");
//     // const data = dataGlasses.findIndex((dataG,index) => {
//     //     return dataG.id === 1;
//     // });
//     // console.log(data);
//     //getEle("avatar").innerHTML = `<img src="${data.src}" alt="">`;
// };
//click(1);

// function click(idData) {
//     console.log("abc");
//     const data = dataGlasses.find((dataG,index) => {
//         return dataG.id === "G3";
//     });
//     console.log(data);
// };
