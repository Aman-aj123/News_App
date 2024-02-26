import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItems from './NewsItems.js';
import Loding from './Loding.js';

import '../App.css';

export default class News extends Component {
     // Main function to fetch the news
     fetchData = async () => {
          document.title = `${this.props.category} - Top headlines`;

          this.setState({
               loading: true,
          });

          const baseURL = `https://newsapi.org/v2/everything?q=${this.props.category}&from=2024-01-23&to=2024-01-23&sortBy=publishedAt`;

          const apiKey = `&apiKey=6b3ef150c7c84a69994a66d6e3ab4a61`;
          const data = await fetch(`${baseURL}${apiKey}&pageSize=${this.state.pageSize}&page=${this.state.page}`);
          const response = await data.json();

          this.setState((prevState) => ({
               loading: false,
               data: prevState.data ? [...prevState.data, ...response.articles] : response.articles,
               totalResults: response.totalResults,
          }));
     };

     constructor(props) {
          super(props);
          this.state = {
               loading: false,
               data: null,
               pageSize: 9,
               page: 1,
               totalResults: null,
          };
     }

     componentDidMount() {
          this.fetchData();
     }

     // Handling the previous and next buttons and fetching the news
     fetchMoreData = () => {
          this.state = ({
               page: this.state.page + 1,
          })
          this.fetchData();
     }

     render() {
          return (
               <>
                    <h2 className='my-4 text-white mx-5'>Top headlines for {this.props.category}</h2>

                    <InfiniteScroll
                         dataLength={this.state.data ? this.state.data.length : 0}
                         next={this.fetchMoreData}
                         hasMore={true}
                         loader={<Loding />}
                    >
                         <div id="news-wrapper" style={{ gap: '15px' }} className="my-4 d-flex w-full justify-content-center flex-wrap g-4">
                              {this.state.data?.map((element, index) => (
                                 
                                        <NewsItems
                                             title={element.title}
                                             description={element.description ? element.description : 'News serves as a vital source of information, offering timely updates on global events, politics, culture, and more. It acts as a bridge connecting individuals to the world, shaping perspectives, and fostering an informed society by delivering credible and relevant stories.'}
                                             imageUrl={element.urlToImage ? element.urlToImage : 'https://images.macrumors.com/t/yTqIu9Nnru9LpjnFv99FcOfB-9g=/2048x/article-new/2024/01/swift-student-challenge-2024.jpeg'}
                                             newsUrl={element.url}
                                             author={element.author ? element.author : 'Unknown'}
                                             publishedDate={new Date(`${element.publishedAt}`).toDateString()}
                                        />
                                  
                              ))}
                         </div>
                    </InfiniteScroll>
               </>
          );
     }
}
