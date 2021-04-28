
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
  onChnagemovie(e) {
    this.setState({
      movie: e.target.value
    });
  }
  onChnagetitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChnagesonglength(e) {
    this.setState({
      songlength: e.target.value
    });
  }
  onChnagesinger(e) {
    this.setState({
      singer: e.target.value
    });
  }
  saveTutorial() {
    console.log(this.state);

    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:
        JSON.stringify({
          Movie: "kjsadkjsadnsad",
          title: "kjasdbkjsbandkj",
          songlength: "sadbsakjdnsad",
          singer: "kjasdnkjsand"
        })
    };
    fetch(" http://localhost:3030/list", request)
    .then(res => res.json())
    .then(data => { });

  }

  componentDidMount() {
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
          <label>Movie Name :</label> <input type="text" onChange={this.onChnagemovie.bind(this)} ></input><br></br>
          <label>Title :</label> <input type="text" onChange={this.onChnagetitle.bind(this)} ></input><br></br>
          <label>Song length :</label> <input type="text" onChange={this.onChnagesonglength.bind(this)} ></input><br></br>
          <label>Singer :</label> <input type="text" onChange={this.onChnagesinger.bind(this)}></input><br></br>
          <button onClick={this.saveTutorial.bind(this)}>Submit </button>
        </div>
      </div>
    );
  }
}