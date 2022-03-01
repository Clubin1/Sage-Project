import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'At house sage, we strive to inspire. We strive to help nurture the growth of the next big players in YTAC.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Our leader, Baca, values leading this house with a smile. He believes in friendly competitions and close connections with members of Sage.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'We have a track record of going above and beyond. We push each other as a community to better our skills and it has shown in multiple different competitions.',
  },
]

export const products_url = 'https://sagehouseuwu.herokuapp.com/'

export const single_product_url = `https://sagehouseuwu.herokuapp.com/single/?id=`
