import React, { Component } from 'react';

export class Addnew extends Component{

constructor(){
super();
   // this.onChnagemovie = this.onChnagemovie.bind(this);
   // this.onChnagetitle = this.onChnagetitle.bind(this);
   // this.onChnagesonglength = this.onChnagesonglength.bind(this);
   // this.onChnagesinger = this.onChnagesinger.bind(this);

    this.state={
        movie: '',
        title:'',
        songlength:'',
        singer :''
    };
}

onChnagemovie(e) {
    this.setState({
      movie:e.target.value
    });
  }
  onChnagetitle(e){
    this.setState({
        title:e.target.value
      });
  }
  onChnagesonglength(e){
    this.setState({
        songlength:e.target.value
      });
  }
  onChnagesinger(e){
    this.setState({
        singer:e.target.value
      });
  }
   saveTutorial(state){
     //  console.log("error:"  +e);

    const request ={
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body : 
            JSON.stringify({
                Movie:"kjsadkjsadnsad",
                title:"kjasdbkjsbandkj",
                songlength:"sadbsakjdnsad",
                singer:"kjasdnkjsand"
            })    
        };
        fetch(" http://localhost:3030/list" ,request).then(res => res.json())
        .then(data=>{});
        
    }
  render(){
      return(
        <div class="new-data">
        <label>Movie Name :</label> <input type="text" onChange={this.onChnagemovie} ></input><br></br>
        <label>Title :</label> <input type="text" onChange={this.onChnagetitle} ></input><br></br>
        <label>Song length :</label> <input type="text" onChange={this.onChnagesonglength} ></input><br></br>
        <label>Singer :</label> <input type="text" onChange={this.onChnagesinger}></input><br></br>
        <button onClick={this.saveTutorial}>Submit </button>
       </div>
      )
  }
}