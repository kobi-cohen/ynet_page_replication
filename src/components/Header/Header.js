//complited 10:15 13.03.2021

import logo from '../../assets/ynetandgames/WHEELCHAIR_For_web.png'
import arrow from '../../assets/ynetandgames/Arrow.png'




const Header = () =>{

    return <header style={{
        height: "46px",
        width: "100%",
        position: "fixed",
        top: "0px",
        zIndex: "9",
        
        opacity:".8",
        backgroundColor: "white",
       
        fontSize:"10rem"
    
}}>
        <a href="https://m.ynet.co.il/">
        <img style={{position:'absolute',right:'10px',paddingRight:"25px",top:'5px'}}src={logo} alt="נגישות"/>
        <img style={{position:'absolute',left:'10px',paddingRight:"25px",top:'5px'}}src={arrow} alt="חזור"/>
        </a>
    </header>

}


export default Header