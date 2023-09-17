const btn=document.querySelector(".btn");
const head=document.querySelector(".header");
btn.addEventListener("click",() => {
    head.classList.toggle("nv");
})

const grid=document.querySelectorAll(".box");
// grid.forEach(function(x) {
//     x.addEventListener("click",function(){
//         x.style.backgroundColor="#7a0000";
//     });
// });
// const lb=document.querySelector(".hello");
// lb.addEventListener("click",() => {
//     grid.forEach(function(x){
//         if(x.style.backgroundColor="#7a0000"){
//             x.style.backgroundColor="#00407a";
//         }
//     });
// });
const original=[];
const afterclick=[];
grid.forEach((square,idx) => {
    original.push(square.style.backgroundColor);
    square.addEventListener("click", () => {
        square.style.backgroundColor="#7a0000";
        afterclick.push(idx);
        if(idx==grid.length-1)
        {
        afterclick.forEach((cidx,j) => {
            setTimeout(() => {
                grid[cidx].classList.add("reset");
                grid[cidx].style.backgroundColor=original[cidx];
                if(j==afterclick.length-1)
                {
                    afterclick.length=0;
                }
            },j*1000);
        });
    }
    });
});