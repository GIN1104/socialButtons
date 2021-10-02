import React from 'react'
import './SocialButtons.css'
import { FaWhatsapp, FaPhone, FaTelegramPlane, FaViber } from 'react-icons/fa'
import  FacebookMessenger  from '../img/facebookmessenger.svg'

export default function SocialButtons() {
    return (
        <div className='social-wrapper'>
            <a href='https://wa.me/972524760015' rel="noreferrer" target='_blank'><FaWhatsapp className='whatsapp' /></a>
            <a href='tel:+972524760015'><FaPhone className='phone' /></a>
            <a href="https://telegram.me/EvgenyStarchenko" rel="noreferrer" target='_blank'><FaTelegramPlane className='telegram' /></a>
            <a href="https://viber.chat?number=%2B972549196104" rel="noreferrer" target='_blank'><FaViber className='viber' /></a>
            <a href="https://www.messenger.com/t/starchenkogin@mail.ru" rel="noreferrer" target='_blank'><img src={ FacebookMessenger } className='facebook' alt='facebook messenger icon'/></a>
        </div>
    )
}
