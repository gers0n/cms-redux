import React, {Component} from 'react';
// import {Link} from 'react-dom';


class PostItem extends Component {
  static defaultProps = {
    post: {}
  };
  render(){
    console.log(this.props);
    return (
      <div className="post-item">
        <div className="thumbnail-container">
          <img src={this.props.post.thumbnail} alt={this.props.post.title} />
        </div>
        <div className="title-container">
          <h3 className="post-item-title">{this.props.post.title}</h3>
        </div>
      </div>
    )
  };
};

export default PostItem;