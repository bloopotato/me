"use client"
import React, { useEffect, useState } from 'react'

interface TypewriterProps {
    text: string;
    speed?: number;
    resetTrigger?: string;
}

const Typewriter = ({ text, speed = 50, resetTrigger }: TypewriterProps) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        setDisplayText("")
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(prevText => prevText + text.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);
        return () => {
            clearInterval(typingInterval);
        };
    }, [text, speed, resetTrigger]);

    return (
    <p className='text-navT font-consolas'>{displayText}</p>
  )
}

export default Typewriter
