import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as ImBook from 'react-icons/im';
import * as BsFillPencilFill from 'react-icons/bs';
import * as RiMailSendFill from 'react-icons/ri';
 
export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: "Projects",
        path: '/projects',
        icon: <ImBook.ImBook />,
        className: 'nav-text'
    },
    {
        title: "Blog",
        path: '/blog',
        icon: <BsFillPencilFill.BsFillPencilFill />,
        className: 'nav-text'
    },
    {
        title: "Contact",
        path: '/contact',
        icon: <RiMailSendFill.RiMailSendFill />,
        className: 'nav-text'
    },
]
