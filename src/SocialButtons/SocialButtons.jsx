import React from 'react'
import './SocialButtons.css'
import { FaWhatsapp, FaPhone, FaTelegramPlane, FaTwitter } from 'react-icons/fa'


export default function SocialButtons() {
    return (
        <div className='social-wrapper'>
            <a href='https://wa.me/972524760015'><FaWhatsapp className='whatsapp' /></a>
            <a href='tel:+972524760015'><FaPhone className='phone' /></a>
            <a href="https://telegram.me/YourUsername "><FaTelegramPlane className='telegram' /></a>
            <a href="https://t.me/<@EVGENY>"><FaTwitter className='telegram' /></a>
        </div>
    )
}
