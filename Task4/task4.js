let img = [
    "https://2.bp.blogspot.com/-CmBgofK7QzU/TVj3u3N1h2I/AAAAAAAADN8/OszBhGvvXRU/s640/tumblr_lg7h9gpbtP1qap9qio1_500.jpeg",
    "https://as1.ftcdn.net/v2/jpg/01/41/12/10/1000_F_141121004_IpVWZBqHwvqIrMhJcohvDCM0D7S1NqkW.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAeR0avBxZk8mqoqr4FUimhxrQkJJsQBWFxw&usqp=CAU"
]
let imgIndex = 0;
let imgSrc = document.getElementById("sliderImg")
imgSrc.src = img[imgIndex]
document.getElementById("next").addEventListener('click',function(){
    imgIndex = (imgIndex + 1) % img.length
    imgSrc.src = img[imgIndex]
});
document.getElementById("previous").addEventListener("click", function(){
   imgIndex = (imgIndex - 1 + img.length) % img.length
    imgSrc.src = img[imgIndex]
})
