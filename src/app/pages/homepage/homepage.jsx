
import { useSelector } from 'react-redux';
import './style.css'
import BlogCard from '../../components/blogCard/blogCard';
import { NavLink } from 'react-router-dom';
import Btn from '../../components/btn/btn';
const HomePage = () => {



    const blog = useSelector(state => state.blog)


    return (
        <main className="homepage">
            <div className="homepage-container container">

                <div className="homepage-logo">
                    <h1 className='font-bold text-5xl'>seimoro <span>development</span></h1>
                </div>

                <div className="homepage-textblock">
                    <div className="homepage-textblock__item">
                        <h1>Добро пожаловать!</h1>
                        <p>Это сайт-портфолио, личный блог, карточка артиста, новостная лента и третье, пятое, десятое...</p>
                        <p>Здесь вы найдёте ссылки на GitHub, Telegram-каналы, соц. сети для связи, музыку и, наверное, когда-нибудь, стримы</p>
                    </div>
                </div>
                <div className="homepage-textblock">
                    <div className="homepage-textblock__item">
                        <h1>Что нового?</h1>
                        <p>Тут будут отображаться новости</p>

                        <NavLink to='/blog' className='toBlog'><Btn>Подробнее</Btn></NavLink>
                    </div>
                    {blog && blog.slice(0, 3).map(item => {
                        return (
                            <BlogCard
                                title={item.title}
                                content={item.content}
                                id={item.id}
                                btn_enabled={false}
                            />
                        )
                    })}
                </div>
            </div>
        </main>
    );
}

export default HomePage;