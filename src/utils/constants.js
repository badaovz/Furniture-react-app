import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const links = [
    {
        id: 1,
        text: 'home',
        url: '/',
    },
    {
        id: 2,
        text: 'products',
        url: '/products',
    },
    {
        id: 3,
        text: 'about',
        url: '/about',
    }
];

export const services = [
    {
        id: 1,
        icon: <GiCompass />,
        title: 'mission',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    },
    {
        id: 2,
        icon: <GiDiamondHard />,
        title: 'vision',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    },
    {
        id: 3,
        icon: <GiStabbedNote />,
        title: 'history',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    }
];

export const follows = [
    {
        id: 1,
        text: 'Facebook',
        icon: <FaFacebook />,
        url: 'https://www.facebook.com/',
    },
    {
        id: 2,
        text: 'Instagram',
        icon: <FaInstagram />,
        url: 'https://www.instagram.com/',
    },
    {
        id: 3,
        text: 'Linkedln',
        icon: <FaLinkedinIn />,
        url: 'https://www.linkedin.com/',
    },
];

export const products_url = 'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;



