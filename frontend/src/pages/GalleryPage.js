import React from 'react';
import ImageGallery from 'react-image-gallery';

const pictures = [
    {
      original: 'images/painted-ladies-SF.jpg',
      thumbnail: 'images/painted-ladies-SF.jpg',
      description: `The Painted Ladies in San Francisco (2022)`,
      originalHeight: '450px',
    },

    {
        original: 'images/wat-yai-chai-mang-khon-ayutthaya.jpeg',
        thumbnail: 'images/wat-yai-chai-mang-khon-ayutthaya.jpeg',
        description: `Wat Yai Chai Mang Khon, Ayutthaya, Thailand (2023)`,
        originalHeight: '450px',
      },

    {
        original: 'images/cannon-beach-sunset.jpeg',
        thumbnail: 'images/cannon-beach-sunset.jpeg',
        description: `Summer Sunset at Cannon Beach (2022)`,
        originalHeight: '450px',
      },

    {
        original: 'images/chive-dinner-rolls.jpg',
        thumbnail: 'images/chive-dinner-rolls.jpg',
        description: `Homemade Sour Cream and Chive Dinner Rolls (2022)`,
        originalHeight: '450px',
      },

    {
        original: 'images/egg-coffee-vietnam.jpeg',
        thumbnail: 'images/egg-coffee-vietnam.jpeg',
        description: `Egg Coffee in Ho Chi Minh City, Vietnam (2023)`,
        originalHeight: '450px',
      },

    {
        original: 'images/pumpking-cupcake-maple-frosting.jpeg',
        thumbnail: 'images/pumpking-cupcake-maple-frosting.jpeg',
        description: `Homemade Pumpkin Cupcake with Maple Pecan Frosting (2020)`,
        originalHeight: '450px',
      },

    {
        original: 'images/hor-phra-naga-bangkok.jpg',
        thumbnail: 'images/hor-phra-naga-bangkok.jpg',
        description: `Hor Phra Naga in the Grand Palace, Bangkok, Thailand (2023)`,
        originalHeight: '450px',
      },

      {
        original: 'images/del-morro-puerto-rico.jpg',
        thumbnail: 'images/del-morro-puerto-rico.jpg',
        description: `Castillo San Felipe del Morro, San Juan, Puerto Rico (2016)`,
        originalHeight: '450px',
      },

    {
        original: 'images/shohone-falls-twin-falls-idaho.jpeg',
        thumbnail: 'images/shohone-falls-twin-falls-idaho.jpeg',
        description: `Shoshone Falls, Twin Falls, Idaho (2018)`,
        originalHeight: '450px',
      },

    {
        original: 'images/homemade-lemon-tart.jpg',
        thumbnail: 'images/homemade-lemon-tart.jpg',
        description: `Homemade Lemon Tart for Passover (2020)`,
        originalHeight: '450px',
      }
]

function GalleryPage(){
    return (
        <>
            <h2>My Gallery Page</h2>
            <p>Here are some photos from my travels and baking adventures!</p>

            <article>
                <ImageGallery items={pictures} />
            </article>
        </>
    )
}

export default GalleryPage;