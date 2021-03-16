import React ,{Component} from 'react'

import Header from '../Header/Header'
import Article from '../Article/Article'
import Footer from '../Footer/Footer'

export default class App extends Component {

con={text:`
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
content con content con
`}

    render (){

        return (
        <div>
            <Header/>
            <Article content={this.con.text}/>
            <Footer/>
      

        </div>
        
        
            )
    }



}