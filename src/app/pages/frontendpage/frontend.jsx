import { useAtomValue } from 'jotai';
import DarkMode, { darkModeAtom } from '../../components/darkmode/darkmode';
import './style.css'
import CodeOverview from '../../components/codeOverview/codeOV';
import Btn from '../../components/btn/btn';
import { useDispatch, useSelector } from 'react-redux';
import { discrement, increment } from '../../store/counterSlice';
import { useNavigate } from 'react-router-dom';
import UseFormTest from '../../components/useFormTest/useFormTest';


const FrontEndPage = () => {

    let code = [
        `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
            
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);`,
        `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
                
                
    <title>React App</title>
    </head>
    <body id="body">
        <div id="root"></div>
    </body>
</html>
            `,

        `import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils'
import { useEffect } from 'react';
            
import './style.css'
            
            
export const darkModeAtom = atomWithStorage('darkmode', false)
            
const DarkMode = () => {
            
    const [darkMode, setDarkMode] = useAtom(darkModeAtom)
                
    useEffect(()=>{
        if(darkMode){
            document.getElementById('body').classList.add('dark')
        }
        else{
            document.getElementById('body').classList.remove('dark')
        }
    }, [darkMode])
            
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
                
    return ( 
        <button className='dark-btn' onClick={toggleDarkMode}> 
                                        
            <span className="slider"></span>
                
        </button> 
    );
}
             
export default DarkMode;`,

        `import { createSlice } from "@reduxjs/toolkit";

const saveLocalStorage = (value) => {
    localStorage.setItem('value', JSON.stringify(value))
}
        
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: JSON.parse(localStorage.getItem("value") ?? 0),
    },
    reducers: {
        increment: (state) => {
            state.value += 1
            saveLocalStorage(state.value)
        },
        discrement: (state) => {
            state.value -= 1
            saveLocalStorage(state.value)
        }
    }
})
        
export const { increment, discrement } = counterSlice.actions
        
export default counterSlice.reducer`,

`import './style.css'
import { z } from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Btn from '../btn/btn';
import { useState } from 'react';


const userSchema = z.object({
    login: z.string().min(1, {message: 'Введите Логин'}),
    email: z.string().min(1, {message: 'Введите почту'}).email({message: 'Некорректный Email'}),
    password: z.string().min(1, {message: 'Введите пароль'}),
})

const UseFormTest = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        defaultValues: {},
        mode: 'onChange',
        resolver: zodResolver(userSchema)
    })

    const [submit, setSubmit] = useState(false)

    const onSubmit = (data) => {
        if(data){
            setSubmit(true)
        }
    }


    return (
        <div className="frontend-form-container">
            <form className="frontend-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__item">
                    <p>Введите логин</p>
                    <input type="text" name='login' placeholder='login'
                        {...register('login', { required: true })}
                        style={errors.login ? { border: '.1vw solid red' } : {}}
                    />
                    {errors.login && <div style={{ color: 'red' }}> {errors.login.message} </div>}
                </div>
                <div className="form__item">
                    <p>Введите почту</p>
                    <input type="text" name='email' placeholder='example@kek.ru'
                        {...register('email', { required: true })}
                        style={errors.email ? { border: '.1vw solid red' } : {}}
                    />
                    {errors.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}
                </div>
                <div className="form__item">
                    <p>Введите пароль</p>
                    <input type="password" name='password' placeholder='password'
                        {...register('password', { required: true })}
                        style={errors.password ? { border: '.1vw solid red' } : {}}
                    />
                    {errors.password && <div style={{ color: 'red' }}> {errors.password.message} </div>}
                </div>
                <Btn>Отправить форму</Btn>
            </form>
            {submit && <span> Спасибо! Ваши данные переданы в Федеральную Службу Безопасности! </span>}
        </div>
    );
}

export default UseFormTest;`


    ]

    const darkMode = useAtomValue(darkModeAtom)

    const count = useSelector(state => state.counter.value)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const returnBack = () => {
        navigate('/projects')
    }

    

    return (
        <main className="frontend">
            <div className="frontend-container container">
                <div className="page-logo">
                    <h1> Frontend <span>development</span></h1>

                    <div className="btn-back" onClick={returnBack}>
                        <Btn>{`<<<`}</Btn>
                    </div>
                </div>
                <div className="frontend__content-block">
                    <div className="frontend-textblock">
                        <h2>React.js</h2>
                        <p>Этот проект был собран с использованием фреймворка <span>React.js</span> и сопутствующих ему библиотек. </p>
                        <p>В данном проекте также использовались импортированные библиотеки, такие как <span>Jotai</span> и
                            <span> Redux</span> </p>
                        <p> (Стек в дальнейшем будет пополняться) </p>
                    </div>
                    <div className="frontend-textblock">
                        <p><span><i>index.js</i></span></p>
                        <CodeOverview
                            code={code[0]}
                        />
                    </div>
                </div>
                <div className="frontend__content-block">
                    <div className="frontend-textblock">
                        <h2>HTML+CSS</h2>
                        <p>Язык вёрстки и каскадная таблица стилей, которые широко использовались во время создания проекта</p>
                    </div>
                    <div className="frontend-textblock">
                        <p><span><i>index.html</i></span></p>
                        <CodeOverview
                            code={code[1]}
                        />
                    </div>
                </div>
                <div className="frontend__content-block">
                    <div className="frontend-textblock">
                        <h2>Jotai <DarkMode /></h2>
                        <p>Библиотека для создания, изменения, хранения и использования глобального состояния.</p>
                        <p>Используется для смены темы с тёмной на светлую и наоборот.</p>
                        {!darkMode && <span>Flashbang!</span>}
                    </div>
                    <div className="frontend-textblock">
                        <p><span><i>darkmode.jsx</i></span></p>
                        <CodeOverview
                            code={code[2]}
                        />
                    </div>
                </div>
                <div className="frontend__content-block">
                    <div className="frontend-textblock">
                        <h2>
                            Redux
                        </h2>
                        <div className="counter">
                            <div onClick={() => dispatch(increment())}><Btn>+</Btn></div>
                            <p>{count}</p>
                            <div onClick={() => dispatch(discrement())}><Btn>-</Btn></div>
                        </div>

                        <p>Библиотека для создания, изменения, хранения и использования глобального состояния.</p>
                        <p>В отличие от Jotai достаточно громоздкая конструкция, подключать к LocalStorage необходимо вручную</p>
                        <p>С использованием этой библиотеки реализован блог</p>

                        {(count >= 3 || count <= -3) && <span style={{fontSize: '2vw'}}>{`астанавитес${'!'.repeat(Math.abs(count))}`}</span>}
                    </div>
                    <div className="frontend-textblock">
                        <p><span><i>counterSlice.jsx</i></span></p>
                        <CodeOverview
                            code={code[3]}
                        />
                    </div>
                </div>
                <div className="frontend__content-block">
                    <div className="frontend-textblock">
                        <h2>
                            useForms + zod
                        </h2>
                        <UseFormTest></UseFormTest>
                        <p>Библиотеки для заполнения и обработки форм</p>
                        <p>Активно применяются для проверки форм регистрации, логина и отправки отзывов и комментариев</p>
                        <p>Здесь приведена упрощённая версия формы, нет подключения к базе данных</p>
                    </div>
                    <div className="frontend-textblock">
                        <p><span><i>useFormTest.jsx</i></span></p>
                        <CodeOverview
                            code={code[4]}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default FrontEndPage;