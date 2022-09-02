let flag = 0;

function controller(x){
  flag = flag + x ;
  slideshow(flag);

}

function slideshow(num){
  let slides = document.getElementsByClassName("slide");

  if(num == slides.length){
    num = 0;
    flag = 0;

  }
  if(num < 0){
    flag = slides.length-1;
    num = slides.length-1;
  }
  for(let x of slides){
    x.style.display = "none";
  }
  slides[num].style.display = "block";

};

slideshow(flag);


let movies = [
  {
      Name: 'Masoom',
      Type: 'Bollywood',
      rating: 4,
      collection: "100c",
      img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/250/1280250-v-d2703f3616e1',
      relaeseYear: 2018
  },
  {
      Name: 'Ms Marvel',
      Type: 'hollywood',
      rating: 8,
      collection: "1000c",
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9317/1269317-v-c851767a526b",
  },
  {
      Name: 'Baaghi',
      Type: 'bollywood',
      rating: 5,
      collection: "200c",
      img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v',
  },
  {
      Name: 'M.S.Dhoni',
      Type: 'bollywood',
      rating: 9,
      collection: "300c",
      img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v',
  },
  {
      Name:'Ghar Waapsi',
      Type:'bollywood',
      rating:5.5,
      collection:'250c',
      img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7377/1307377-v-325f72982f0f',
  },

  {
    Name:'Parampara',
    Type:'bollywood',
    rating:6,
    collection:'100c',
    img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7295/1307295-v-4d6248ec72a4',
},

{
  Name:'Vikram',
  Type:'bollywood',
  rating:7.5,
  collection:'600c',
  img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6253/1296253-v-3a1a10046b46',
},



];

let movieList = document.getElementById('movieList');

movies.forEach((list) => {
  let li = document.createElement('li');
  li.innerHTML = `<div class = 'movie'>
  <div class = 'movie-img'>
  <img src = '${list.img}'
  </div>
  <div class = "movie-name"> Name :
  ${list.Name}
  </div>
  <div class = "movie-name">Type :
  ${list.Type}
  </div>
  <div class = "movie-name">Rating :
  ${list.rating}
  </div>
  <div class = "movie-name">Collection :
  ${list.collection}
  </div>`
  movieList.appendChild(li);

}

);

let movies1 = [
  {
      Name: 'Mahabharat',
      Type: 'Bollywood',
      rating: 10,
      collection: "1000c",
      img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7527/267527-v',

  },
  {
      Name: 'Mahadev',
      Type: 'Bollywood',
      rating: 8,
      collection: "500c",
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2876/862876-v",
  },
  {
      Name: 'radhakirshna',
      Type: 'Bollywood',
      rating: 5,
      collection: "200c",
      img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8946/38946-v',
  },
  {
      Name: 'emali',
      Type: 'Bollywood',
      rating: 9,
      collection: "300c",
      img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8189/1248189-v-f4e1cbe767aa',
  },

  {
    Name: 'yeh rishta',
    Type: 'Bollywood',
    rating: 5.5,
    collection: "50l",
    img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4516/1074516-v-2f4f07b1e4ec',
},

{
  Name: 'Anupama',
  Type: 'Bollywood',
  rating: 3,
  collection: "350c",
  img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8774/1028774-v-85c7d8f07559',
},

{
  Name: 'Shoorbeer',
  Type: 'Bollywood',
  rating: 9,
  collection: "300c",
  img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5126/1305126-v-5f2e72c8303b',
},
];

let show = document.getElementById('shows');
movies1.forEach((item) => {
  let li = document.createElement('li')
  li.innerHTML = `<div class = 'movie-show'>
      <div class = 'show-img'>
      <img src= '${item.img}'
      </div>
      <div class = 'show-name'>Name :
      ${item.Name}
      </div>
      <div class = 'show-name'> Type :
      ${item.Type}
      </div>
      <dive class = 'show-name'> Rating :
      ${item.rating}
      </div>
      <div class = 'show-names'> Collection :
      ${item.collection}
      </div>`
  show.appendChild(li);

});


let Popular = [
  {
      Name: 'Housefull',
      Type: 'Bollywood',
      rating: 7,
      collection: "50c",
      img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v',

  },
  {
      Name: 'Baby',
      Type: 'Bollywood',
      rating: 3,
      collection: "150c",
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7416/957416-v",
  },
  {
      Name: 'Shang-Chi',
      Type: 'Hollywood',
      rating: 9,
      collection: "2000c",
      img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8723/1078723-v-a1a04c7474f9',
  },
  {
      Name: 'Tanaji',
      Type: 'Bollywood',
      rating: 5,
      collection: "300c",
      img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v',
  },

  {
    Name: 'Super 30',
    Type: 'Bollywood',
    rating: 9,
    collection: "500c",
    img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v',
},

{
  Name: 'Total Dhamaal',
  Type: 'Bollywood',
  rating: 6,
  collection: "3c",
  img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8285/388285-v',
},

{
  Name: 'emali',
  Type: 'Bollywood',
  rating: 9,
  collection: "300c",
  img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8189/1248189-v-f4e1cbe767aa',
},
];

let PopularMovies = document.getElementById('Popular-Movies');
Popular.forEach((items) => {
  let li = document.createElement('li')
  li.innerHTML = `<div class = 'Popular-Movie'>
      <div class = 'popular-img'>
      <img src= '${items.img}'
      </div>
      <div class = 'popular-name'>Name :
      ${items.Name}
      </div>
      <div class = 'popular-name'> Type :
      ${items.Type}
      </div>
      <dive class = 'popular-name'> Rating :
      ${items.rating}
      </div>
      <div class = 'populars-name'> Collection :
      ${items.collection}
      </div>`
      PopularMovies.appendChild(li);

});


let ForeignShowDubbed = [
  {
      Name: 'Housefull',
      Type: 'Bollywood',
      rating: 7,
      collection: "50c",
      img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v',

  },
  {
      Name: 'Baby',
      Type: 'Bollywood',
      rating: 3,
      collection: "150c",
      img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7416/957416-v",
  },
  {
      Name: 'Shang-Chi',
      Type: 'Hollywood',
      rating: 9,
      collection: "2000c",
      img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8723/1078723-v-a1a04c7474f9',
  },
  {
      Name: 'Tanaji',
      Type: 'Bollywood',
      rating: 5,
      collection: "300c",
      img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v',
  },

  {
    Name: 'Super 30',
    Type: 'Bollywood',
    rating: 9,
    collection: "500c",
    img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v',
},

{
  Name: 'Total Dhamaal',
  Type: 'Bollywood',
  rating: 6,
  collection: "3c",
  img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8285/388285-v',
},

{
  Name: 'emali',
  Type: 'Bollywood',
  rating: 9,
  collection: "300c",
  img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8189/1248189-v-f4e1cbe767aa',
},
];

let ForeigShows = document.getElementById('foreign');
Popular.forEach((items) => {
  let li = document.createElement('li')
  li.innerHTML = `<div class = 'foreign-Movie'>
      <div class = 'foreign-img'>
      <img src= '${items.img}'
      </div>
      <div class = 'foreign-name'>Name :
      ${items.Name}
      </div>
      <div class = 'foreign-name'> Type :
      ${items.Type}
      </div>
      <dive class = 'foreign-name'> Rating :
      ${items.rating}
      </div>
      <div class = 'foreigns-name'> Collection :
      ${items.collection}
      </div>`
      ForeigShows.appendChild(li);

});

// let click = document.querySelector('.click');
// let list = document.querySelector('.list');
// click.addEventListener('click',()=>{
//     list.classList.toggle('newlist');
// });





