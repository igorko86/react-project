import React,{Component} from 'react';
import './footer.css';


export default class FormComment extends Component{
  render(){
    return(
      <div className="wraper_map">
        <iframe className=""
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34040.71453615443!2d24.33305697720724!3d50.64399652696085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4724fb46faff138f%3A0xba3df705f75ca6f2!2z0JjQstCw0L3QuNGH0LgsINCS0L7Qu9GL0L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sru!2sua!4v1539262729834"
          width="100%" height="300" frameBorder="0"
          allowFullScreen
        >
        </iframe>

      </div>
    )
  }
}
