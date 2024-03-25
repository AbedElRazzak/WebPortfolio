import React, { useState, useEffect } from 'react';

export default function WhatsappBtn() {
    return (
        <a href='https://api.whatsapp.com/send?phone=96171441380' target='_blank' className='fixed bottom-4 left-4 z-50 cursor-pointer'>
            <img src='https://raw.githubusercontent.com/AbedElRazzak/portfolioCDN/main/uploads/whatspp-logo.png' className='max-w-[50px]'/>
        </a>
    )
}