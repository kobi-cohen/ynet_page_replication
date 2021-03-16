
import categoryImage from '../../assets/ynetandgames/corona_cover.jpg'

import mailIcon from '../../assets/ynetandgames/mail_icon.png'
import fbIcon from '../../assets/ynetandgames/fb_icon.png'
import whatsappIcon from '../../assets/ynetandgames/whatsapp_icon.png'

const pageObj={

    image:categoryImage,
    mainHeadline: `
    
     תופעות לוואי של חיסון הקורונה : שיפור הזיכרון
        
     
     `,
    subHeadline:`
    מחקר חדש שפורסם בכתב העת הבריטי מספר על אלפי מקרים ועדויות של מתחסנים במנה השניה של חיסון הקורונה.
    המתחסנים כולם מעל לגיל 60 ומספרים על שינוי משמעותי בזיכרון לטווח קצר וארוך.
    חלקם אפילו העידו שהם זוכרים את רגע לידתם בבית החולים
    ואחרים זוכרים מקומות בהם ביקרו הוריהם עוד בהיותם עוברים
    
    `,
    author:'איציק לופדיה',
    date:'עדכון אחרון 12:23',
    articleBody:{
    p1: `

    כאבי ראש, חום וכאבי שרירים אלו חלק מתופעות הלוואי המוכרות לחלק גדול מהמתחסים במנת החיסון השניה נגד קורונה, אולם לאחרונה מפרסם כתב העת הבריטי "תואירב" פרטים מרתקים על מחקר שנעשה בחודשים האחרונים


    `,
    p2:
    `
    
    במחקר השתתפו מעל 35000 מחוסני קורונה במנה השניה של החיסון משתי החברות המובילות...
    


`,
    p3:`
    
    להמשך קריאת הכתבה יש להירשם
    
    `
    }
     
     
    

}
const Article = (props) =>{

    return <div>
        <div style={{position:'relative',top:"50px"}}>
            {/* Category image */}
             <img src={pageObj.image}style={{width:"100vw",height:"auto"}} alt="Covid19"/> 
             
             </div>
    <main 
        className="space" style={{position:'relative',top:"50px",fontSize:"15rem",color:'gray'}}>
            <h1 style={{margin:"20px 0 15px 0"}}>
           {/* Main Headline */}
           {pageObj.mainHeadline}          </h1>
            
            <h2>
                {/* Sub Headline */}
                {pageObj.subHeadline}
                 </h2>         
                 {/* author */}
            <h4 ><span>{pageObj.author}</span> | 
                {/* date */}
            {pageObj.date} 
            </h4>
            

            <div style={{position:"relative",display:'inline-block', width:"100%",height:"70px"}}>
                    <div className="center" style={{textAlign:"center",minWidth:"250px"}}>
                           <img src={mailIcon} alt="Mail" style={{width:"50px",height:"50px"}}/>
                           <img src={fbIcon} alt="FaceBook" style={{width:"50px",margin:"0 25px",height:"50px"}}/>
                           <img src={whatsappIcon} alt="whatsapp" style={{width:"50px",height:"50px"}}/>
                    </div>

            </div>


            <div className="space">
            {/* ARTICLE CONTENT */}
            <p>{pageObj.articleBody.p1}</p>
            <p style={{margin:"40px 0"}}>{pageObj.articleBody.p2}</p>
            <p style={{marginBottom:"150px"}}>{pageObj.articleBody.p3}</p>

                
            
          
            </div>
            
            </main>

        </div>

}


export default Article