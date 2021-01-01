import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";
import * as GrIcons from "react-icons/gr";

export const SidebarData = [
   {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiOutlineHome />,
      cName: 'nav-text',
   },
   {
      title: 'Favorites',
      path: '/favorites',
      icon: <AiIcons.AiOutlineHeart />,
      cName: 'nav-text',
   },
   {
      title: 'Trending',
      path: '/trending',
      icon: <AiIcons.AiOutlineFire />,
      cName: 'nav-text',
   },
   {
      title: 'Notifications',
      path: '/notifications',
      icon: <IoIcons.IoNotificationsOutline />,
      cName: 'nav-text',
   },
   {
      title: 'Downloads',
      path: '/downloads',
      icon: <AiIcons.AiOutlineDownload />,
      cName: 'nav-text',
   },
   {
      title: 'History',
      path: '/history',
      icon: <AiIcons.AiOutlineHistory />,
      cName: 'nav-text',
   },
   {
      title: 'Search',
      path: '/search',
      icon: <IoIcons.IoSearchOutline />,
      cName: 'nav-text',
   },
   {
      title: 'Logout',
      path: '/logout',
      icon: <IoIcons.IoLogOutOutline />,
      cName: 'nav-text',
   }
   
]