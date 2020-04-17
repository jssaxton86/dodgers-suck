import React from 'react';

let current = null;

export default class FetchData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
      this.key = 0;
      current = this;
    }

    static fetchNew(num){
        if (current) current.fetchPokemon(num);
    }

    fetchPokemon(num){
        let url = "http://localhost:80/api/v1/pokemon";
        if (num) url += "?number=" + num;
        return fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
              console.log(result);
            result.isLoaded = true;
            this.setState(result);
            return Promise.resolve();
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    componentDidMount() {
        console.log("HI");
        this.fetchPokemon();       
    }
  
    render() {
      const { error, isLoaded, abilities, sprites  } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading!!!</div>;
      } else {
        return (
            <React.Fragment>
            <div>
                <img src={sprites.front_default} alt=''></img>
                <img src={sprites.back_default} alt=''></img>
                <img src={sprites.front_shiny} alt=''></img>
                <img src={sprites.back_shiny} alt=''></img>
                <img src={sprites.front_female} alt=''></img>
                <img src={sprites.back_female} alt=''></img>
                <img src={sprites.front_shiny_female} alt=''></img>
                <img src={sprites.back_shiny_female} alt=''></img>
            </div>
            <div>
                { this.state.name.toUpperCase() } <br></br>
                { this.state.order }               
            </div>
            <ul>
                <font size="2">
                    {abilities.map(item => (
                    <li key={item.ability.name}>
                        { item.ability.name.toUpperCase() }
                    </li>
                    ))}
                </font>
            </ul>
            </React.Fragment>
        );
      }
    }
  }
  
