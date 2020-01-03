let orang=['as','asw','aswa','aswar'];
 let   hasil=[];
 let ul=document.querySelector('.ul');
orang.forEach(nama => {
    hasil += ul.innerHTML=`<li>mulai dari ${nama}</li>`;
});
console.log(hasil);
ul.innerHTML=hasil;