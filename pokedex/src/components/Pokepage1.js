import React, { Component } from 'react'
import axios from 'axios';
import '../App.css';
import Nav from './Nav';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Fanart from './Fanart';

export default class Pokepage1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Pokemon11:'',
            Pokemon111:'',
            Pokemon12:'',
            Pokemon121:'',
            Pokemon13:'',
            Pokemon131:'',
            Pokemon14:'',
            Pokemon141:'',
            Pokemon15:'',
            Pokemon151:'',
            Pokemon16:'',
            Pokemon161:'',
            Pokemon17:'',
            Pokemon171:'',
            Pokemon18:'',
            Pokemon181:'',
            Pokemon19:'',
            Pokemon191:'',
            Pokemon20:'',
            Pokemon201:'',

            
            

            
            
            
         }
    }


// !api call for pokedata
     async getpokemon11(){
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/11/")
         console.log(res);
        const ans1 = res.data.name;
        this.setState({
            Pokemon11: ans1
             })
        }

        async getpokemon111(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/11/")
            console.log(res);
            this.setState({
                Pokemon111: res.data.sprites.front_default
            })
        };

 // ===========================================================================


        async getpokemon12(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/12/")
            console.log(res);
            this.setState({
                Pokemon12: res.data.name
            })
        }
        async getpokemon121(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/12/")
            console.log(res);
            this.setState({
                Pokemon121: res.data.sprites.front_default
            })
        }

        // ===========================================================================

// !api call for pokedata
        async getpokemon13(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/13/")
            console.log(res);
            this.setState({
                Pokemon13: res.data.name
            })
        }
        async getpokemon131(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/13/")
            console.log(res);
            this.setState({
                Pokemon131: res.data.sprites.front_default
            })
        }


         // ===========================================================================

// !api call for pokedata
         async getpokemon14(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/14/")
            console.log(res);
            this.setState({
                Pokemon14: res.data.name
            })
        }
        async getpokemon141(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/14/")
            console.log(res);
            this.setState({
                Pokemon141: res.data.sprites.front_default
            })
        }


         // ===========================================================================


         async getpokemon15(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/15/")
            console.log(res);
            this.setState({
                Pokemon15: res.data.name
            })
        }
        async getpokemon151(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/15/")
            console.log(res);
            this.setState({
                Pokemon151: res.data.sprites.front_default
            })
        }





        // ===========================================================================


        async getpokemon16(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/16/")
            console.log(res);
            this.setState({
                Pokemon16: res.data.name
            })
        }
        async getpokemon161(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/16/")
            console.log(res);
            this.setState({
                Pokemon161: res.data.sprites.front_default
            })
        }


        // ===========================================================================

// !api call for pokedata
        async getpokemon17(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/17/")
            console.log(res);
            this.setState({
                Pokemon17: res.data.name
            })
        }
        async getpokemon171(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/17/")
            console.log(res);
            this.setState({
                Pokemon171: res.data.sprites.front_default
            })
        }

        // ===========================================================================


        async getpokemon18(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/18/")
            console.log(res);
            this.setState({
                Pokemon18: res.data.name
            })
        }
        async getpokemon181(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/18/")
            console.log(res);
            this.setState({
                Pokemon181: res.data.sprites.front_default
            })
        }


        // ===========================================================================


        async getpokemon19(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/19/")
            console.log(res);
            this.setState({
                Pokemon19: res.data.name
            })
        }
        async getpokemon191(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/19/")
            console.log(res);
            this.setState({
                Pokemon191: res.data.sprites.front_default
            })
        }

        // ===========================================================================


        async getpokemon20(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/20/")
            console.log(res);
            this.setState({
                Pokemon20: res.data.name
            })
        }
        async getpokemon201(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/20/")
            console.log(res);
            this.setState({
                Pokemon201: res.data.sprites.front_default
            })
        }

       






        componentDidMount() {
            this.getpokemon11()
            this.getpokemon111()
            this.getpokemon12()
            this.getpokemon121()
            this.getpokemon13()
            this.getpokemon131()
            this.getpokemon14()
            this.getpokemon141()
            this.getpokemon15()
            this.getpokemon151()
            this.getpokemon16()
            this.getpokemon161()
            this.getpokemon17()
            this.getpokemon171()
            this.getpokemon18()
            this.getpokemon181()
            this.getpokemon19()
            this.getpokemon191()
            this.getpokemon20()
            this.getpokemon201()
            
            
           
        }

    render() {
        return (
            <div className='home__container'>
                <Nav/>
                <Fanart/>
                <Grid className='Home__Pokedex' container spacing={2}>
                    <Grid  item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#11{this.state.Pokemon11}</h1>
                            <img className= 'pokepic' src={this.state.Pokemon111}/> 
                            <h4>It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#12{this.state.Pokemon12}</h1>
                            <img className= 'pokepic' src={this.state.Pokemon121}/> 
                            <h4>In battle, it flaps its wings at great speed to release highly toxic dust into the air.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#13{this.state.Pokemon13}</h1>
                            <img className= 'pokepic' src={this.state.Pokemon131}/> 
                            <h4>Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#14{this.state.Pokemon14}</h1>
                            <img className= 'pokepic' src={this.state.Pokemon141}/> 
                            <h4>Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#15{this.state.Pokemon15}</h1>
                            <img className= 'pokepic' src={this.state.Pokemon151}/> 
                            <h4>It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                    <Card variant="outlined">
                            <h1 className= 'pokename' >#16{this.state.Pokemon16}</h1>
                            <img className= 'pokepic' src={this.state.Pokemon161}/> 
                            <h4>Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                            <Card variant="outlined">
                                <h1 className= 'pokename' >#17{this.state.Pokemon17}</h1>
                                <img className= 'pokepic' src={this.state.Pokemon171}/> 
                                <h4>This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.</h4>
                            </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#18{this.state.Pokemon18}</h1>
                            <img className= 'pokepic' src={this.state.Pokemon181}/> 
                            <h4>This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#19{this.state.Pokemon19}</h1>
                            <img className= 'pokepic' src={this.state.Pokemon191}/> 
                            <h4>Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#20{this.state.Pokemon20}</h1>
                            <img className= 'pokepic' src={this.state.Pokemon201}/> 
                            <h4>Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.</h4>
                        </Card>
                    </Grid>
                </Grid>
                
                <h1> page2 </h1>
            </div>
        )
    }
}


