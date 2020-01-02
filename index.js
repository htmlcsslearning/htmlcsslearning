
var cats = [
  {
    name: 'queen',
    image: 'images/cat1.jpg'
  },
  {
    name: 'meow',
    image: 'images/cat2.jpg'
  },
  {
    name: 'fisher',
    image: 'images/cat3.jpg'
  },
  {
    name: 'moon',
    image: 'images/cat4.jpg'
  }
]
var cat;
function randomizeCats() {
  catId = Math.round(Math.random() * 3);
  cat = cats[catId];
  $("#cat h1").text(cat.name);
  $("#cat img").attr('src', cat.image);
}
$( document ).ready(function() {
  randomizeCats();
  $('button').on('click',function(){
    randomizeCats();
  })
})
