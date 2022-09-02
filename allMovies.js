
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

  function onMovieTypeChange(){
    const selectMovieCategory = document.getElementById("typeOfMovies").value;
    console.log("calling--------------------------------", selectMovieCategory)
  }
