export const getEle = (id) => {
    return document.getElementById(id);
}


export const loadImg = (data) => {
    for (let i = 0; i < data.length; i++) {
        getEle("vglassesList").innerHTML += `
        <button onclick="clickk('${data[i].id}')" style="width: 33.3333%;border: none;padding: 0;outline: none;background:#fff">
                        <img src="${data[i].src}" alt="" class="w-100 p-2" style="background-color: #fff;">
                    </button>`;
    }
};

export const clickk = (idData) => {
    console.log(idData);
    const data = dataGlasses.find((dataG,index) => {
        return dataG.id === idData;
    });
    console.log(data);
    getEle("avatar").innerHTML = `<img src="${data.src}" alt="">`;
};
// export function click(idData) {
//     console.log(idData);
//     const data = dataGlasses.find((dataG,index) => {
//         return dataG.id === idData;
//     });
//     console.log(data);
//     getEle("avatar").innerHTML = `<img src="${data.src}" alt="">`;
// }
// export const clickk = (idData) => {
//     console.log(idData);
//     const data = dataGlasses.findIndex((dataG,index) => {
//         return dataG.id === idData;
//     });
//     console.log(data);
//     if(data !== null){
//         getEle("avatar").innerHTML = `<img src="./img/v${data+1}.png" alt="">`;
//     }
    
// };