import {postsLoad} from './post.creators';


export const fetchPosts = () => {
  return (dispatch) => {
    dispatch( postsLoad([
      {id: 1, thumbnail: "/imgs/4.jpg", title:"Gipfel"},
      {id: 2, thumbnail: "/imgs/25.jpg", title:"Weite"},
      {id: 3, thumbnail: "/imgs/77.jpg", title:"Schwane"}
    ]));
  }
};