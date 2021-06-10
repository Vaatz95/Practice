import React from 'react';
import axios from "axios"
import Movie from "./Movie";
import PropTypes from "prop-types";


function Food({ name, picture, rating }){
  return(
   <div>
  <h1> I like {name} </h1>
  <h3> {rating}/5.0</h3>
  <img src ={picture} alt={name}></img>
  </div>
  );
}
Food.propTypes = {
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number

}

//propTypes를 활용해 무엇을 요구하는지 확인할 수 있다.

/*const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
      rating: 5
  },
  { id:2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
      rating: 4.9
  },
  { id:3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
      rating: 4.8
  },
  { id:4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
      rating: 4.7
  },
  { id:5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
      rating: 4.6
  }
];

function renderfood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} />
}


// App 안에 내용만 가져온다.


function App() {
  return (
    <div > 
     
      {foodILike.map(dish => (
        <Food name = {dish.name} picture={dish.image} rating = {dish.rating} />

      ))}
     
  
    </div>
  );
}
*/
/*
class App extends React.Component{
  state = {
    count: 0

  };
  add = () => {
    this.setState(current => ({count: current.count + 1 }));

  };
  minus = () => {
    this.setState(current => ({count: current.count -1  }));


  };
  render(){
    return (
      <div>
    <h1> The number is : {this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
    </div>
    )

  }



}
*/
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {

    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
        
        <div class = "loader">
          <span class ="loader_text">Loading...</span> 
            </div>
         ) :  (
           <div class = "movies">
             {movies.map(movie => (
            <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
              ))}
           </div>
         )}
           </section>
            );
          }
        }
        
        export default App;