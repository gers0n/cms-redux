import React, {Component} from 'react';
import PostItem from '../PostItem';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from "../../actions/post.dispatcher";


class HomeBody extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  };
  render(){
    return (
      <div className="main-body">
        {this.props.Posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    )
  }
};
const mapStateToProps = state => ({
  ...state.posts
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: bindActionCreators(fetchPosts, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeBody);