import './style.css'

const Btn = ({children}) => {
    return ( 
        <button className="btn">
            {children}
        </button>
     );
}
 
export default Btn;