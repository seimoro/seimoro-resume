
import { useDispatch, useSelector } from "react-redux";
import { addBlogItem } from "../../store/blogSlice";
import Btn from "../../components/btn/btn";
import BlogCard from "../../components/blogCard/blogCard";
import './style.css'
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { adminAtom } from "../blogpage/blogpage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AdminPanel = () => {

    const blog = useSelector(state => state.blog)
    const dispatch = useDispatch()

    const {
        handleSubmit,
        register
    } = useForm()

    const [accept, setAccept] = useAtom(adminAtom)

    const navigate = useNavigate()

    useEffect(()=>{
        if(!accept){
            navigate('/blog', {replace: true})
        }
    }, [accept])

    const redirectBack = () => {
        setAccept(false)
        navigate('/blog', {replace: true})
    }

    return (
        <main className="admin">
            <div className="admin-container container">
                <div className="left-side-panel">
                    <form action="" onSubmit={handleSubmit((data) => dispatch(addBlogItem(data)))}>
                        <h1>Title</h1>
                        <input type="text" name="title" {...register('title')} className="title-input" />
                        <h1>Content</h1>
                        <textarea type="text" name="content" {...register('content')} className="content-input" />
                        <br />
                        <Btn>добавить</Btn>
                    </form>
                    <div className="redirect-back" onClick={redirectBack}>
                        <Btn>Вернуться</Btn>
                    </div>
                </div>

                <div className="blog-container">
                    {blog && blog.map((item, index) => {
                        return (
                            <BlogCard
                                id={index}
                                title={item.title}
                                content={item.content}
                                btn_enabled={true}
                                key={index}
                            />

                        )
                    })}
                </div>

            </div>
        </main>
    );
}

export default AdminPanel;