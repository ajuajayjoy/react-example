
import React, { Component } from 'react';

export class Songlist extends Component {

  constructor(props) {

    super(props)

    this.state = {
      items: [],
      isLodead: false,
      size: ""
    }

  }

  onChangeAction(e){
    this.setState(
      this.setState({[e.target.name]: e.target.value})
    );
  }

  saveTutorial() {

    console.log(this.state);

    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:
        JSON.stringify({
          Movie: this.state.movies,
          title: this.state.title,
          songlength:  this.state.length,
          singer: this.state.singer
        })
    };
    fetch("http://localhost:3030/list", request)
    .then(res => res.json())
    .then(data => { });
    this.getData();

  }

  getData(){
    this.setState(() => {
      fetch("http://localhost:3030/list")
      .then(res => res.json())
      .then(
        result => this.setState(
          {
            isLoded: true,
            items: result,
            size: result.length
          })
      )
      .catch(console.log)
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    var { items } = this.state;

    return (
      <div>
        <label>Song List : {this.state.size}</label><br></br>
        <table>
          <tbody>
            <tr>
              <th>Movie</th>
              <th>Title</th>
              <th>Song length</th>
              <th>Singer</th>
            </tr>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.Movie}</td>
                <td>{item.title}</td>
                <td>{item.song_length}</td>
                <td>{item.Singer}</td>
              </tr>
            ))}

          </tbody>
        </table>

        <div class="new-data">
          <label>Movie Name :</label> <input type="text" name="movies" onChange={this.onChangeAction.bind(this)} ></input><br></br>
          <label>Title :</label> <input type="text" name="title" onChange={this.onChangeAction.bind(this)} ></input><br></br>
          <label>Song length :</label> <input type="text" name="length" onChange={this.onChangeAction.bind(this)} ></input><br></br>
          <label>Singer :</label> <input type="text" name="singer" onChange={this.onChangeAction.bind(this)}></input><br></br>
          <button onClick={this.saveTutorial.bind(this)}>Submit </button>
        </div>
      </div>
    );
  }
}