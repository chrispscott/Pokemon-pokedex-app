import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Nav from './Nav';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Fanart from './Fanart';

export default class Pokepage3 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Poke1:'',
            Poke11:'',
            Poke2:'',
            Poke22:'',
            Poke3:'',
            Poke33:'',
            Poke4:'',
            Poke44:'',
            Poke5:'',
            Poke55:'',
            Poke6:'',
            Poke66:'',
            Poke7:'',
            Poke77:'',
            Poke8:'',
            Poke88:'',
            Poke9:'',
            Poke99:'',
            Poke10:'',
            Poke1010:'',

            
            

            
            
            
         }
    }



     async getpoke1(){
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/21/")
         console.log(res);
        const ans1 = res.data.name;
        this.setState({
            Poke1: ans1
             })
        }

        async getpoke11(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/21/")
            console.log(res);
            this.setState({
                Poke11: res.data.sprites.front_default
            })
        };

 // ===========================================================================


        async getpoke2(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/22/")
            console.log(res);
            this.setState({
                Poke2: res.data.name
            })
        }
        async getpoke22(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/22/")
            console.log(res);
            this.setState({
                Poke22: res.data.sprites.front_default
            })
        }

        // ===========================================================================


        async getpoke3(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/23/")
            console.log(res);
            this.setState({
                Poke3: res.data.name
            })
        }
        async getpoke33(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/23/")
            console.log(res);
            this.setState({
                Poke33: res.data.sprites.front_default
            })
        }


         // ===========================================================================


         async getpoke4(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/24/")
            console.log(res);
            this.setState({
                Poke4: res.data.name
            })
        }
        async getpoke44(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/24/")
            console.log(res);
            this.setState({
                Poke44: res.data.sprites.front_default
            })
        }


         // ===========================================================================


         async getpoke5(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/25/")
            console.log(res);
            this.setState({
                Poke5: res.data.name
            })
        }
        async getpoke55(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/25/")
            console.log(res);
            this.setState({
                Poke55: res.data.sprites.front_default
            })
        }





        // ===========================================================================


        async getpoke6(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/26/")
            console.log(res);
            this.setState({
                Poke6: res.data.name
            })
        }
        async getpoke66(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/26/")
            console.log(res);
            this.setState({
                Poke66: res.data.sprites.front_default
            })
        }


        // ===========================================================================


        async getpoke7(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/27/")
            console.log(res);
            this.setState({
                Poke7: res.data.name
            })
        }
        async getpoke77(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/27/")
            console.log(res);
            this.setState({
                Poke77: res.data.sprites.front_default
            })
        }

        // ===========================================================================


        async getpoke8(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/28/")
            console.log(res);
            this.setState({
                Poke8: res.data.name
            })
        }
        async getpoke88(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/28/")
            console.log(res);
            this.setState({
                Poke88: res.data.sprites.front_default
            })
        }


        // ===========================================================================


        async getpoke9(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/29/")
            console.log(res);
            this.setState({
                Poke9: res.data.name
            })
        }
        async getpoke99(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/29/")
            console.log(res);
            this.setState({
                Poke99: res.data.sprites.front_default
            })
        }

        // ===========================================================================


        async getpoke10(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/30/")
            console.log(res);
            this.setState({
                Poke10: res.data.name
            })
        }
        async getpoke1010(){
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/30/")
            console.log(res);
            this.setState({
                Poke1010: res.data.sprites.front_default
            })
        }

       






        componentDidMount() {
            this.getpoke1()
            this.getpoke11()
            this.getpoke2()
            this.getpoke22()
            this.getpoke3()
            this.getpoke33()
            this.getpoke4()
            this.getpoke44()
            this.getpoke5()
            this.getpoke55()
            this.getpoke6()
            this.getpoke66()
            this.getpoke7()
            this.getpoke77()
            this.getpoke8()
            this.getpoke88()
            this.getpoke9()
            this.getpoke99()
            this.getpoke10()
            this.getpoke1010()
            
        }

    render() {
        return (
            <div className='home__container'>
                <Nav/>
                <Fanart/>
                <Grid id='top' className='Home__Pokedex' container spacing={2}>
                    <Grid  item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#21{this.state.Poke1}</h1>
                            <img className= 'pokepic' src={this.state.Poke11}/> 
                            <h4>Inept at flying high. However, it can fly around very fast to protect its territory.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#22{this.state.Poke2}</h1>
                            <img className= 'pokepic' src={this.state.Poke22}/> 
                            <h4>A Pokémon that dates back many years. If it senses danger, it flies high and away, instantly.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#23{this.state.Poke3}</h1>
                            <img className= 'pokepic' src={this.state.Poke33}/> 
                            <h4>The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#24{this.state.Poke4}</h1>
                            <img className= 'pokepic' src={this.state.Poke44}/> 
                            <h4>The frightening patterns on its belly have been studied. Six variations have been confirmed.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#25{this.state.Poke5}</h1>
                            <img className= 'pokepic' src={this.state.Poke55}/> 
                            <h4>Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                    <Card variant="outlined">
                            <h1 className= 'pokename' >#26{this.state.Poke6}</h1>
                            <img className= 'pokepic' src={this.state.Poke66}/> 
                            <h4>Its long tail serves as a ground to protect itself from its own high-voltage power.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                            <Card variant="outlined">
                                <h1 className= 'pokename' >#27{this.state.Poke7}</h1>
                                <img className= 'pokepic' src={this.state.Poke77}/> 
                                <h4>It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pokémon rids itself of dirt and moisture clinging to its body.</h4>
                            </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#28{this.state.Poke8}</h1>
                            <img className= 'pokepic' src={this.state.Poke88}/> 
                            <h4>The drier the area Sandslash lives in, the harder and smoother the Pokémon’s spikes will feel when touched.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >29{this.state.Poke9}</h1>
                            <img className= 'pokepic' src={this.state.Poke99}/> 
                            <h4>A mild-mannered Pokémon that does not like to fight. Beware—its small horn secretes venom.</h4>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card variant="outlined">
                            <h1 className= 'pokename' >#30{this.state.Poke10}</h1>
                            <img className= 'pokepic' src={this.state.Poke1010}/> 
                            <h4>When resting deep in its burrow, its barbs always retract. This is proof that it is relaxed.</h4>
                        </Card>
                    </Grid>
                </Grid>
                
               <h1> page3 </h1>
            </div>
        )
    }
}

