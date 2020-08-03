import React, { Component } this    from 'react'
import axios from 'axios';
import '../App.css';
import Nav from './Nav';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Pokepage1 from './Pokepage1';
import Favorites from './Favorites';
import Fanart from './Fanart';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Pokemon:'',
            Pokemon1:'',
            Pokemon2:'',
            Pokemon21:'',
            Pokemon3:'',
            Pokemon31:'',
            Pokemon4:'',
            Pokemon41:'',
            Pokemon5:'',
            Pokemon51:'',
            Pokemon6:'',
            Pokemon61:'',
            Pokemon7:'',
            Pokemon71:'',
            Pokemon8:'',
            Pokemon81:'',
            Pokemon9:'',
            Pokemon91:'',
            Pokemon10:'',
            Pokemon101:'',

            
            

            
            
            
         }
    }



     async getpokemon(){
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/1/")
         console.log(res);
        const ans1 = res.data.name;
        this.setState({
            Pokemon: ans1
             })
        }

        async getpokemon1(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/1/")
            console.log(res);
            this.setState({
                Pokemon1: res.data.sprites.front_default
            })
        };

 // ===========================================================================


        async getpokemon2(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/2/")
            console.log(res);
            this.setState({
                Pokemon2: res.data.name
            })
        }
        async getpokemon21(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/2/")
            console.log(res);
            this.setState({
                Pokemon21: res.data.sprites.front_default
            })
        }

        // ===========================================================================


        async getpokemon3(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/3/")
            console.log(res);
            this.setState({
                Pokemon3: res.data.name
            })
        }
        async getpokemon31(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/3/")
            console.log(res);
            this.setState({
                Pokemon31: res.data.sprites.front_default
            })
        }


         // ===========================================================================


         async getpokemon4(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/4/")
            console.log(res);
            this.setState({
                Pokemon4: res.data.name
            })
        }
        async getpokemon41(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/4/")
            console.log(res);
            this.setState({
                Pokemon41: res.data.sprites.front_default
            })
        }


         // ===========================================================================


         async getpokemon5(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/5/")
            console.log(res);
            this.setState({
                Pokemon5: res.data.name
            })
        }
        async getpokemon51(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/5/")
            console.log(res);
            this.setState({
                Pokemon51: res.data.sprites.front_default
            })
        }





        // ===========================================================================


        async getpokemon6(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/6/")
            console.log(res);
            this.setState({
                Pokemon6: res.data.name
            })
        }
        async getpokemon61(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/6/")
            console.log(res);
            this.setState({
                Pokemon61: res.data.sprites.front_default
            })
        }


        // ===========================================================================


        async getpokemon7(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/7/")
            console.log(res);
            this.setState({
                Pokemon7: res.data.name
            })
        }
        async getpokemon71(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/7/")
            console.log(res);
            this.setState({
                Pokemon71: res.data.sprites.front_default
            })
        }

        // ===========================================================================


        async getpokemon8(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/8/")
            console.log(res);
            this.setState({
                Pokemon8: res.data.name
            })
        }
        async getpokemon81(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/8/")
            console.log(res);
            this.setState({
                Pokemon81: res.data.sprites.front_default
            })
        }


        // ===========================================================================


        async getpokemon9(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/9/")
            console.log(res);
            this.setState({
                Pokemon9: res.data.name
            })
        }
        async getpokemon91(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/9/")
            console.log(res);
            this.setState({
                Pokemon91: res.data.sprites.front_default
            })
        }

        // ===========================================================================


        async getpokemon10(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/10/")
            console.log(res);
            this.setState({
                Pokemon10: res.data.name
            })
        }
        async getpokemon101(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/10/")
            console.log(res);
            this.setState({
                Pokemon101: res.data.sprites.front_default
            })
        }

       






        componentDidMount() {
            this.getpokemon()
            this.getpokemon1()
            this.getpokemon2()
            this.getpokemon21()
            this.getpokemon3()
            this.getpokemon31()
            this.getpokemon4()
            this.getpokemon41()
            this.getpokemon5()
            this.getpokemon51()
            this.getpokemon6()
            this.getpokemon61()
            this.getpokemon7()
            this.getpokemon71()
            this.getpokemon8()
            this.getpokemon81()
            this.getpokemon9()
            this.getpokemon91()
            this.getpokemon10()
            this.getpokemon101()
            
            
           
        }

    render() {
        return (
            <div className='home__container'>
                <Nav/>
                <Fanart/>
                <Grid className='Home__Pokedex' container spacing={2}>
                    <Grid  item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#1{this.state.Pokemon}</h1>
                            <img className= 'pokepic' src={this.state.Pokemon1}/> 
                            <h4>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#2{this.state.Pokemon2}</h1>
                            <img className= 'pokepic' src={this.state.Pokemon21}/> 
                            <h4>When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#3{this.state.Pokemon3}</h1>
                            <img className= 'pokepic' src={this.state.Pokemon31}/> 
                            <h4>Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#4{this.state.Pokemon4}</h1>
                            <img className= 'pokepic' src={this.state.Pokemon41}/> 
                            <h4>It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#5{this.state.Pokemon5}</h1>
                            <img className= 'pokepic' src={this.state.Pokemon51}/> 
                            <h4>It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                    <Card variant="outlined">
                            <h1 className= 'pokename' >#6{this.state.Pokemon6}</h1>
                            <img className= 'pokepic' src={this.state.Pokemon61}/> 
                            <h4>When it retracts its long neck into its shell, it squirts out water with vigorous force.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                            <Card variant="outlined">
                                <h1 className= 'pokename' >#7{this.state.Pokemon7}</h1>
                                <img className= 'pokepic' src={this.state.Pokemon71}/> 
                                <h4>It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.</h4>
                            </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#8{this.state.Pokemon8}</h1>
                            <img className= 'pokepic' src={this.state.Pokemon81}/> 
                            <h4>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#9{this.state.Pokemon9}</h1>
                            <img className= 'pokepic' src={this.state.Pokemon91}/> 
                            <h4>It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#10{this.state.Pokemon10}</h1>
                            <img className= 'pokepic' src={this.state.Pokemon101}/> 
                            <h4>For protection, it releases a horrible stench from the antenna on its head to drive away enemies.</h4>
                        </Card>
                    </Grid>
                </Grid>
                
                <h1>Page 1 </h1>
            </div>
        )
    }
}
