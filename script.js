let images = [
"https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
"https://images.unsplash.com/photo-1445205170230-053b83016050",
"https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
];

let index = 0;

function changeImage(){

index++;

if(index >= images.length){
index = 0;
}

document.getElementById("slideImage").src = images[index];

}

setInterval(changeImage,3000);



function showOffer(){
alert("🎉 Special Offer: Flat 25% OFF Today!");
}



document.getElementById("orderForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Order Submitted Successfully!");

document.getElementById("orderForm").reset();   

});