import React from 'react';
import backgroundHeader from '../image/astronomy-colors-constellation-957085.jpg';
import {connect} from 'react-redux';
// import Form from '../Form/Form';
import axios from 'axios';


import './Footer.css';


const Footer = ({lang }) => {
//    const submit = values => {
      
//         // console.log(values)
//         let config =  {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//               }
//         }
//         axios.post('/sendMail', values, config)
                
//         // axios.get('/test')
//         // .then(data => console.log(data))
//       }
      
    return (
        <div className='footer' style={ { backgroundImage: `url(${backgroundHeader})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'noRepeat', } }>
         <div>
          <h2 className="contact-text-bold">{lang ? 'Contact me' : 'Контакти'}</h2>  
          <ul className='contactFooter'>
              <li className='contactListFooter'>+38(067)240-93-12</li>
              <li className='contactListFooter'> <a className='linkFooter' href="mailto:ostapenko040587@gmail.com">ostapenko040587@gmail.com</a></li>
              <li className='contactListFooter'>   ostapenko54</li>
          </ul>
          {/* <Form onSubmit={submit}/> */}
            <h3 className='author'>&reg;{lang ? 'made by Yura Ostapenko. 2018' : 'Зробив Остапенко Юрій. 2018'}</h3>  
            </div>
            <div className="map"></div>
        </div>
    );
};

function MSTP (state){
    return {     
      lang: state.lang,
     }
    }



export default connect(MSTP) (Footer);



