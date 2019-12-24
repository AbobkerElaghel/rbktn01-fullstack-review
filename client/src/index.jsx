import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  componentDidMount(){

    console.log('wooooh')
    $.ajax({
    url: '/repos',
    type: 'GET',
    success: (res)=>{
      console.log(res)
      // this.state.repos = res;
      this.setState({repos:res.map(one=>{return {name}})});
                      },
    error:  function(error) {
      console.error('Failed to fetch messages', error);
    }
  });
}


  search (term) {
    console.log(`${term} was searched`);
    //TODO//
    // axios.post('http://localhost:1128/repos',term).then( (res)=>{console.log(res) });

    $.ajax({
      url: '/repos',
      type: 'POST',
       data: { username: term },
      success: (res)=>{this.state.repos = res;},
      error:  function(error) {
        console.error('Failed to fetch messages', error);
      }
    });




  }

  render () {
    console.log(this.state)
    return (<div>
      <h1>Github Fetcher</h1>
    <h1>{this.state.repos}</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


