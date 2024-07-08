import { useDispatch } from 'react-redux';
import './style.css'
import Btn from '../btn/btn';
import { revoveBlogItem } from "../../store/blogSlice";

const BlogCard = (props) => {

    const dispatch = useDispatch()

    const removeItem = () => {
        dispatch(revoveBlogItem())
    }

    return ( 
        <div className="blog-card">
            <h1>{props.title} {props.id}</h1>
            <p>{props.content}</p>
            <div className={`remove-item ${!props.btn_enabled && 'hidden'}`} onClick={(removeItem)}>
                <Btn>удалить</Btn>
            </div>
        </div>
     );
}
 
export default BlogCard;