
import './style.css'
import Btn from '../../components/btn/btn';
import { useSelector } from 'react-redux';
import BlogCard from '../../components/blogCard/blogCard';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import {z} from 'zod'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { atomWithStorage } from 'jotai/utils';
import { useAtom } from 'jotai';

const adminSchema = z.object({
    admin: z.string()
}).refine((data) => data.admin === 'seimoro', {message: 'Неверный логин админа', path: ['admin']})

export const adminAtom = atomWithStorage('accepted', false)

const Blog = () => {

    const blog = useSelector(state => state.blog)

    const [accept, setAccept] = useAtom(adminAtom)

    const {
        handleSubmit,
        register,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(adminSchema)
    })

    const navigate = useNavigate()
    
    useEffect(()=>{
        if(accept){
            navigate('/admin', {replace:true})
        }
    }, [accept])


    const onSubmit = () => {
        setAccept(true)
        navigate('/admin', {replace: true})
    }

    return (
        <main className="blogpage">
            <div className="blogpage-container container">
                <div className="blog-logo">
                    <h1>Blog</h1>
                    <form className="admin-only" onSubmit={handleSubmit(onSubmit)}>
                        <input type="password" {...register('admin', {required: true})} style={errors.admin ? {border : '.1vw solid red'} : {}} />
                        
                        <Btn>Перейти</Btn>
                    </form>
                </div>
                <div className="blog-content">

                    {blog.map((item, index) => {
                        return (
                            <BlogCard
                                title={item.title}
                                content={item.content}
                                btn_enabled={false}
                                key = {index}
                            />
                        )
                    })}
                </div>
            </div>
        </main>
    );
}

export default Blog;