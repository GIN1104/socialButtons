import React from 'react'
import './SocialMedia.css'
import SocialButton from '../SocialButton/SocialButton.jsx'
import {  faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp, faTelegramPlane, faViber} from '@fortawesome/fontawesome-free-brands';
import { data } from "./data";
import { isMobile } from 'react-device-detect';


export default function SocialMedia() {
    console.log(faPhoneAlt)
    return (
        <div className='social-wrapper'>
        <div>
        </div>
        < SocialButton 
                href={`https://wa.me/+${data.phone}`}
                Icon={faWhatsapp} 
                classNameButton="social-button whats-but" classNameIcon='whatsapp' 
        ></SocialButton>

        < SocialButton 
                href={`https://telegram.me/${data.telegramUser}`}
                Icon={faTelegramPlane} 
                classNameButton="social-button teleg-but" classNameIcon='telegram' 
        ></SocialButton>

        < SocialButton 
                href={`tel:+${data.phone}`}
                Icon={faPhoneAlt} 
                classNameButton="social-button phone-but" classNameIcon='phone'
                size="2x"
         ></SocialButton>

{   isMobile ? 
         < SocialButton 
                href={`viber://add?number=${data.phone}`}
                Icon={faViber} 
                classNameButton="social-button viber-but"
                classNameIcon='viber-mb' 
        ></SocialButton> 
        :
          < SocialButton 
                href={`viber://chat?number=+${data.phone}`}
                Icon={faViber} 
                classNameButton="social-button viber-but"
                classNameIcon='viber-mb' 
                title= "Do you have PC virsion of Viber?"
        ></SocialButton> 
        }
            
        </div>
    )
}
