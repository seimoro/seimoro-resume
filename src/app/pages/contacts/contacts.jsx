
import Btn from '../../components/btn/btn'
import DonateQR from '../../components/donateQR/donateQR'
import './style.css'

const Contacts = () => {

    let contacts = [
        'smallkingsad@gmail.com',
        'seimoro@yandex.ru'
    ]


    let links = [
        {
            name: 'VK',
            link: 'https://vk.com/seimoro_kun',
        },
        {
            name: 'Telegram',
            link: 'https://t.me/seimoro_kun'
        }
    ]


    let social = [
        {
            name: 'VK',
            link: 'https://vk.com/seimoro',
        },
        {
            name: 'Telegram Music',
            link: 'https://t.me/seimoro'
        },
        {
            name: 'Telegram React',
            link: 'https://t.me/seimoro_react'
        },
        {
            name: "Instagram",
            link: 'https://instagram.com/seimoro.music'
        },
        {
            name: 'GitHub',
            link: 'https://github.com/seimoro'
        }

    ]

    return (
        <main className="contacts-page">
            <div className="contacts-container container">
                <h1>Связаться со мной</h1>
                <div className="contacts-content">
                    <div className="contacts-textblock">
                        <h2>Контактные данные</h2>
                        <div className="contacts__item">
                            {contacts.map((item) => {
                                return <p>{item}</p>
                            })}
                        </div>
                        {links.map((item) => {
                            return (
                                <a href={item.link} target='_blank' rel='noreferrer'><Btn>{item.name}</Btn></a>
                            )
                        })}
                    </div>
                    <div className="contacts-textblock">
                        <h2>Ссылки на соц. сети</h2>
                        {social.map((item) => {
                            return (
                                <a href={item.link} target='_blank' rel='noreferrer'><Btn>{item.name}</Btn></a>
                            )
                        })}
                    </div>
                    
                    <DonateQR />
                </div>

            </div>
        </main>
    );
}

export default Contacts;