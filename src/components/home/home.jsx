import React from 'react'
import './homeg.scss'

export const Home = ()=>{
    return(
        <div className="Page">
        <div className="homePage">
            <div className="content">
            <h1 className="title">Lifestyle.<br/></h1>
            <p className="subtitle">The Latest and best lifestyle article selected by our editorial office.</p>
            </div>
            </div>
            <div className="row">
            <div className="column">
            <div class="cards" id="card1">
            </div>
            </div>
            <div className="column">
            <div class="cards" id="card2">
            </div>
            </div>
            <div className="column">
            <div class="cards" id="card3">
            </div>
            </div>
            <div className="column">
            <div class="cards" id="card4">
            </div>
            </div>
            <div className="column">
            <div class="cards" id="card5">
            </div>
            </div>
            <div className="column">
            <div class="cards" id="card6">
            </div>
            </div>
            </div>
        </div>
    )
}
export default Home;

