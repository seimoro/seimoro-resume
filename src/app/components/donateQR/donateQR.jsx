
import { QRCodeSVG } from 'qrcode.react';
import './style.css'
import Btn from '../btn/btn';

const DonateQR = () => {
    return (
        <div className="donateQR">
            <div className="qr-container">
                <QRCodeSVG value='https://tips.yandex.ru/guest/payment/7286920' size={300}/>
            </div>
            <div className="donate-textblock">
                <h2>Яндекс <span>Чаевые</span></h2>
            </div>
            <Btn>
                <a href="https://tips.yandex.ru/guest/payment/7286920" target='_blank' rel="noreferrer">Поддержать</a>
            </Btn>
        </div>
    );
}

export default DonateQR;