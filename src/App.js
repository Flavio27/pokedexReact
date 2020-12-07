import React from 'react';
import SearchPoke from './componentes/search/SearchPoke'
import List from './componentes/pokedexList/List'
import './App.css'
import Card from './layout/Card'



function App() {

    return (
        <div className="App">
            <div className="Cards">
                <Card>
                    <SearchPoke />
                </Card>
                <Card>
                    <List />
                </Card>

            </div>
        </div>
    );
}

export default App;