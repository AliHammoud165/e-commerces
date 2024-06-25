import image from '../src/app/assets/image/image2.png'
import icon1 from '../src/app/assets/image/palnt.png'
import icon2 from '../src/app/assets/image/box.png'
import icon3 from '../src/app/assets/image/TelephoneOutbound.png'
const staticData = {
    cardsData: [
        {
          src: image,
          alt: 'Image 1',
          title: 'Natural Plants',
          price: '$1000.00',
        },
        {
          src: image,
          alt: 'Image 2',
          title: 'Exotic Plants',
          price: '$1200.00',
        },
        {
          src: image,
          alt: 'Image 3',
          title: 'Rare Plants',
          price: '$1500.00',
        },
      ],
      cardsDataAboutus: [
        {
          src: icon1,
          alt: 'Image 1',
          title: 'Large Assortment',
          price: 'we offer many different types of products with fewer variations in each category',
        },
        {
          src: icon2,
          alt: 'Image 1',
          title: 'Fast & Free Shipping',
          price: '4-day or less delivery time, free shipping and an expedited delivery option.',
        },
        {
          src: icon3,
          alt: 'Image 1',
          title: '24/7 Support',
          price: 'answers to any business related inquiry 24/7 and in real-time',
        },
      ],
}


export default staticData;