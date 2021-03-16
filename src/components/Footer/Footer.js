import ynetp from '../../assets/ynetandgames/logo.png'
const Footer = () =>{

    return <div style={{position:"fixed" ,width:"100%",height:"30rem", bottom:"0"}} >
        <section style={{fontSize:"15rem",color:'gray',backgroundColor:'yellow',position:"absolute",width:"100%",height:"30rem"}}>
    <section className="center">
        <a href="https://www.ynet.co.il/plus"><img className="center" src={ynetp}style={{ position:"absolute",width:"auto",height:"12rem"}} alt="Ynet+"></img></a>
        {/* <p style={{fontSize:"7rem" ,position:"absolute",top:"0vw",right:"5px",width:"70vw"}}>עשה מנוי לצפיה בכתבות פרימיום</p> */}
        
        </section>
    </section>
    </div>

}


export default Footer