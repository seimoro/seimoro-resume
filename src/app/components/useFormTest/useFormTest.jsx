import './style.css'
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
            {submit && <span className='thanks'> Спасибо! Ваши данные переданы в Федеральную Службу Безопасности! </span>}
        </div>
    );
}

export default UseFormTest;