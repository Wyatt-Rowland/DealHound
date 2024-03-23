// MockProducts.js
import React from 'react';
import { calculateSalePercentage } from './CalculatePercent';

const falseProducts = [
    {
      id: 'product-1',
      name: 'Halo 2 Xbox',
      imageUrl: 'https://www.halopedia.org/images/thumb/f/ff/Halo2-Cover-Large.jpg/1200px-Halo2-Cover-Large.jpg', // Replace with actual image URLs
      salePrice: '$4.99',
      regularPrice: '$1009.99',
      description: 'Become the Master Chief, the ultimate protector of humanity in the second entry in the legendary Halo Universe.',
      url: 'https://github.com/vaccinaldig3710/',
      store: 'Amazon'
    },        
    {
      id: 'product-12',
      name: 'Night Owl - 12 Channel 6 Camera Wired 4K 2TB DVR Security System - White',
      imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6540/6540771_sd.jpg;maxHeight=640;maxWidth=550',
      salePrice: '$439.99',
      regularPrice: '$599.99',
      description: `When life gets hard, make your security easy. Introducing our 4K 2-Way Audio DVR Security System. With secure app-based Bluetooth setup, there is no need to connect a TV or monitor for setup or viewing (optional). Easily set up the system right from the convenience of your mobile device. Your 4K cameras have full color day viewing and full color night vision up to 100 ft., which provides colorful recordings that capture every detail. With a bright built-in spotlight, you can light up the dark and ward off unwanted guests. For situations where seeing is not enough, easily make your voice heard. With 2-way audio you can listen and talk with anyone who approaches, making your presence known. Still not enough? Use our preset voice alerts and booming camera siren to shout a warning when a suspicious stranger nears. You will receive key alerts to your mobile device for important matters, such as people and vehicles as they arrive and depart. All recordings and personal data are privately stored on the recorder’s hard drive for secure access with zero costs. Your privacy matters and your recordings and for your eyes only. Built for outdoor use, your cameras can handle anything mother nature throws their way, from extreme heat and cold, to rain or sleet. Use them indoors or outdoors to cover what you want, when you want. Need more coverage? Easily add our compatible wired, Wi-Fi IP and doorbell cameras to your recorder to boost your viewing area. This system is a one-time purchase and there are no hidden costs. Use our free mobile app for iOS and Android Smart Devices to stay connected and easily access your recordings with no fees. .`,
      url: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6540/6540771_sd.jpg;maxHeight=640;maxWidth=550',
      store: 'Best Buy',
      },
    {
      id: 'product-2',
      name: 'Samsung Galaxy Watch 5 Pro 45mm Smartwatch',
      imageUrl: 'https://m.media-amazon.com/images/I/61Sl+xoVHoL._AC_SX300_SY300_.jpg',
      salePrice: '$199.99',
      regularPrice: '$449.99',
      description: 'Galaxy Watch5 Pro is our most advanced outdoor watch yet, featuring a 2x stronger***** sapphire crystal glass display.',
      url: 'https://www.amazon.com/SAMSUNG-Bluetooth-Smartwatch-Improved-Sapphire/dp/B0B2HXJZ98?ref_=Oct_DLandingS_D_f9ccecf7_0',
      store: 'Amazon',
    },
    {
      id: 'product-3',
      name: 'Samsung Galaxy Watch 5 Pro Rose Gold',
      imageUrl: 'https://m.media-amazon.com/images/I/61e7vpK-irL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
      salePrice: '$249.99',
      regularPrice: '$499.99',
      description: 'Get this fantastic thingamajig at a special discount price today!',
      url: 'https://www.amazon.com/SAMSUNG-Smartwatch-Improved-Sapphire-Titanium/dp/B0B2J4TV97?ref_=Oct_DLandingS_D_f9ccecf7_1',
      store: 'Amazon',
    },
    {
        id: 'product-4',
        name: 'Teeter 106.9 Pound FreeStep Ellip;tical Exercise Machine',
        imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_cd6c9cfb-2cd7-49db-a262-fd845c293bfc?wid=1200&hei=1200&qlt=80&fmt=webp', // Replace with actual image URLs
        salePrice: '$824.99',
        regularPrice: '$1189.99',
        description: `Experience a revolutionary workout with the TEETER 106.9 Pound FreeStep Recumbent Cross Trainer and Cardio Elliptical. Our patented stride technology ensures a stress-free exercise by preventing knees from overextending and stabilizing the back and hips. The dual power motion engages both upper and lower body muscles simultaneously, building and defining major muscle groups with push-pull mechanics. Tailor your workout intensity with ease using the 13 levels of magnetic resistance, controlled by a simple dial. Enjoy a whisper-quiet operation, allowing you to exercise while immersing yourself in music or your favorite shows. This elliptical training machine comes with adjustable handles target biceps, triceps, and back muscles, offering versatility in every session. Indulge in comfort with the adjustable seat featuring a wide 3-position reclining option and multiple height settings. Stay on top of your progress with the battery-powered display, tracking distance, speed, and calorie burn. The free BILT app simplifies assembly with 3D interactive instructions, while TEETER Move, our subscription-free app, provides trainer-led workouts for a fun and effective fitness journey. Convenience is key with the water bottle holder keeping hydration at arm's reach, transport wheels for easy storage, and a smart device holder in the base. The variable magnetic resistance, foam grips, and 8-position adjustability offer a customizable experience. The large cushion, reclining, and height adjustability, along with edge guards on the grip surface, ensure a comfortable and secure workout. Effortlessly roll away and store with the transport wheels at the rear base. The battery-powered display includes time, distance, speed, and calorie-burn tracking. Embrace a new era of fitness with the FreeStep Recumbent Cross Trainer and Cardio Elliptical from TEETER where innovation meets comfort for a workout like never before.`,
        url: 'https://www.target.com/p/teeter-106-9-pound-freestep-elliptical-exercise-machine-recumbent-cross-trainer-and-cardio-exercise-equipment-with-battery-powered-display-black/-/A-90441456#lnk=sametab',
        store: 'Target',
      },
      {
        id: 'product-6',
        name: 'HP 27in full HD IPS Monitor',
        imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_a22ca68d-f6e0-461e-8101-b4d4f4e8cfb2?wid=1200&hei=1200&qlt=80&fmt=webp',
        salePrice: '$129.99',
        regularPrice: '$269.99',
        description: `Lose yourself in the picture- perfect immersion of this massive canvas, designed to redefine comfort, wellness, and sustainability. Play, work, or simply stare into the new definition of high definition.

            STEP UP TO THE BEST: No matter where you stand, an HP IPS monitor delivers clear, vivid images. IPS technology ensures image accuracy and consistency across the ultra-wide viewing spectrum.
            
            SHARE THE PANORAMIC VIEW: Vibrant detail from practically any position with consistent color and image clarity maintained across ultra-wide 178- degree horizontal and vertical viewing angles.
            
            HIGHLY ACCURATE COLOR: With 99% sRGB color space, this HP display provides ideal color reproduction with minimal effort. Perfect for photos, videos—all your creative projects.
            
            HP EYE EASE WITH EYESAFE® CERTIFICATION: HP Eye Ease technology keeps your eyes comfortable with an always-on blue light filter that presents your vivid content with zero impact on color accuracy. With Eyesafe® certification, displays meet TÜV low blue light requirements and Eyesafe® standards for protecting your eyes from harmful blue light without distorting colors. Monitors with integrated Eyesafe® displays help reduce eyestrain and improve eye comfort when working for long periods of time.
            
            AMD FREESYNC(TM) TECHNOLOGY: See and feel the difference of fluid, responsive gameplay. By synchronizing the refresh rate with your GPU, AMD FreeSync(TM) makes display stutter, input lag, and screen tears ancient history.
            
            STREAMLINED & SEAMLESS: Streamline your setup with its slim profile, innovative cable containment.
            
            Energy efficient design and components help reduce power consumption and energy costs. ENERGY STAR® 8 certified & EPEAT® Registered
            
            WARRANTY: 1-year limited hardware warranty. Additional information available at www.support.hp.com. Full warranty details are included with your product. 90 days limited technical support for software and initial setup (from date of purchase).`,
        url: 'https://www.target.com/p/hp-27-34-full-hd-ips-computer-monitor-amd-freesync-2-x-hdmi-vga-m27fe/-/A-82675597#lnk=sametab',
        store: 'Target',
      },
      {
        id: 'product-5',
        name: 'Samsung 24" FHD IPS Computer Monitor, AMD FreeSync, HDMI & VGA (T350 Series) - Dark Blue/Gray',
        imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_03721446-b8e5-4fb2-b423-c817e7ca1ba3?wid=1200&hei=1200&qlt=80&fmt=webp',
        salePrice: '$109.99',
        regularPrice: '$129.99',
        description: `All-expansive view
            Minimalist design, maximum concentration. The 3-sided borderless display brings a clean and modern aesthetic to any working environment. In a multi-monitor setup, the displays line up seamlessly for a virtually gapless view without distractions.
            See It from Any Angle
            Sit anywhere and have a full technicolor experience. The IPS panel preserves color vividness and clarity across every inch of the screen. Even on a display this wide, tones and shades look completely accurate from virtually any angle, with no color washing.
            Synchronized action
            Superfluid entertainment experience. AMD Radeon FreeSync™ keeps your monitor and graphics card refresh rate in sync to reduce image tearing. Watch movies and play games without any interruptions. Even fast scenes look seamless and smooth.
            Seamless, smooth visuals
            Now, the picture looks flawless. The 75Hz refresh rate delivers more fluid scenes. Whether you're catching up on your favorite TV drama, watching a video, or playing a game, your entertainment has no lag or ghosting effect.
            More gaming power
            Ideal game settings instantly give you the edge. Get optimal color and image contrast to see scenes more vividly and spot enemies hiding in the dark. Game Mode adjusts any game to fill your screen with every detail in view
            Superior eye care
            Protect your eyes and do more. The advanced eye comfort technology reduces eye strain for less strenuous extended computing. Flicker Free technology continuously removes tiring and irritating screen flicker, while Eye Saver Mode minimizes emitted blue light.
            True versatility
            Connect to more. With both HDMI and D-sub ports, multiple devices can be plugged straight into your monitor for complete flexibility. Now, your computing environment is even more convenient with additional input possibilities.`,
        url: 'https://www.target.com/p/samsung-24-34-fhd-ips-computer-monitor-amd-freesync-hdmi-38-vga-t350-series-dark-blue-gray/-/A-86677332#lnk=sametab',
        store: 'Target',
      },      
      {
        id: 'product-7',
        name: 'KingSo 22 inch Wood Burning Fire Pit for Camping Picnic Bonfire Patio Outside Backyard Garden Small Bonfire Pit Steel Firepit Bowl with Spark Screen, Log Grate, Poker',
        imageUrl: 'https://i5.walmartimages.com/seo/KingSo-22-inch-Wood-Burning-Fire-Pit-Camping-Picnic-Bonfire-Patio-Outside-Backyard-Garden-Small-Steel-Firepit-Bowl-Spark-Screen-Log-Grate-Poker_fa1c9c62-d182-468b-8f17-6624ac721b3e.d317b2c08cf5ba62ca1c48cb4efb76f1.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF', // Replace with actual image URLs
        salePrice: '$48.99',
        regularPrice: '$69.99',
        description: `KingSo fire pit perfect to fit many people around for a bonfire in the patio, yard or garden. It comes with a mesh lid to prevent burning embers blowing and a poker to stoke fire and remove the mesh lid safely. This unique design fire pit makes it an ideal choice for heating, barbecue and food in patio, garden and yard. Enjoy the warmth and beauty of a wood-burning fire with the KingSo 22 inch / 26 inch Round Wood Burning Fire Pit with Mesh Spark Guard. A natural centerpiece for your backyard or patio, this fire pit has high-temperature steel so you can easily build a traditional wood-burning fire. A steel mesh spark guard fits over the fire bowl when it?s burning for added safety, and a fire pit poker tool is included for tending the fire. Place chairs around the KingSo 22 inch Round Wood Burning Fire Pit with Mesh Spark Guard and gather your friends to enjoy hours of warmth and good company.`,
        url: 'https://www.walmart.com/ip/KingSo-22-inch-Wood-Burning-Fire-Pit-Camping-Picnic-Bonfire-Patio-Outside-Backyard-Garden-Small-Steel-Firepit-Bowl-Spark-Screen-Log-Grate-Poker/690484960',
        store: 'Walmart'
      },
      {
        id: 'product-8',
        name: 'JBL Xtreme2 Portable Wireless Bluetooth Speaker',
        imageUrl: 'https://i5.walmartimages.com/seo/JBL-Xtreme2-Portable-Wireless-Bluetooth-Speaker_958f62a2-ae92-41fe-8e47-33c0f838d60e_1.a79095dfd897bd2d6c0cb7baae46eff7.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
        salePrice: '$149.99',
        regularPrice: '$199.99',
        description: `Waterproof portable Bluetooth speaker with 15 hours of playtime and Xtreme bass`,
        url: 'https://www.walmart.com/ip/JBL-Xtreme2-Portable-Wireless-Bluetooth-Speaker/287086005',
        store: 'Walmart',
      },
      {
        id: 'product-9',
        name: 'NEXPOW Handheld Vacuum, 10KPA Car Vacuum Cleaner Cordless, 12V Portable Car Vacuum with 1500A Battery Jump Starter (up to 7.0L Gas/5.5L Diesel Engines)',
        imageUrl: 'https://i5.walmartimages.com/seo/NEXPOW-Handheld-Vacuum-10KPA-Car-Vacuum-Cleaner-Cordless-12V-Portable-1500A-Battery-Jump-Starter-up-7-0L-Gas-5-5L-Diesel-Engines_173b48c1-0640-4dbb-b8fa-8c8aab7f1cdb.e546875c3d15fd6a6e3ad3aa30e95d7a.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
        salePrice: '$25.99',
        regularPrice: '$99.99',
        description: `Introducing the ultimate car accessory - NEXPOW powerful 2-in-1 Car Vacuum Cleaner. This innovative device is designed to provide you with peace of mind on the road and help you maintain a clean and tidy car interior. With 1500A peak current, this car jump starter can start up to 7.0L Gasoline or 5.5L Diesel Engines in seconds - up to 30 jump starts on a single full charge. This Handheld Vacuum Cordless with 90 Watt high-powered motor and 10KPa strong suction, which will suck easily up all kinds of wet or dry messes like liquids, dust, food residues, butts, sand, and so on. Whether you're dealing with a dead battery or a messy car, this compact and versatile tool has got you covered.`,
        url: 'https://www.walmart.com/ip/NEXPOW-Handheld-Vacuum-10KPA-Car-Vacuum-Cleaner-Cordless-12V-Portable-1500A-Battery-Jump-Starter-up-7-0L-Gas-5-5L-Diesel-Engines/1324344946',
        store: 'Walmart'
      },
      {
          id: 'product-10',
          name: 'Samsung - 65” Class CU7000 Crystal UHD 4K Smart Tizen TV',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6537/6537363_sd.jpg;maxHeight=640;maxWidth=550', // Replace with actual image URLs
          salePrice: '$399.99',
          regularPrice: '$479.99',
          description: `True-to-life color. Effortless connectivity. Dazzling 4K value. Samsung Crystal UHD is worth a look (and more). Effortlessly access TV shows, movies and ambient content using the Samsung Smart Hub, or find a range of great games on the Samsung Gaming Hub.* Enjoy content even more clear than it was created as its upgraded to 4K resolution `,
          url: 'https://www.bestbuy.com/site/samsung-65-class-cu7000-crystal-uhd-4k-smart-tizen-tv/6537363.p?skuId=6537363',
          store: 'Best Buy'
        },
        {
          id: 'product-11',
          name: 'Beats Studio Pro - Wireless Noise Cancelling Over-the-Ear Headphones - Black',
          imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501017_sd.jpg;maxHeight=640;maxWidth=550',
          salePrice: '$199.99',
          regularPrice: '$349.99',
          description: `Feel every emotion with Beats Studio Pro’s immersive listening experience. A fully custom acoustic platform provides powerful, balanced sound. Personalized Spatial Audio with dynamic head tracking delivers a 360 audio experience¹. When you want to silence distractions, Active Noise Cancelling adapts in real-time to neutralize the world around you. And when you want a more natural experience, Transparency mode seamlessly mixes the world outside with what you’re listening to. With up to 40 hours of battery life², enhanced Apple and Android compatibility³, and flexible connectivity, every aspect of these headphones has been reimagined to keep you connected to the emotion behind the music longer. `,
          url: 'https://www.bestbuy.com/site/beats-studio-pro-wireless-noise-cancelling-over-the-ear-headphones-black/6501017.p?skuId=6501017',
          store: 'Best Buy',
        },
        

    // Add more products as needed
  ];

  
  const updatedFalseProducts = falseProducts.map(product => ({
    ...product,
    salePercentage: calculateSalePercentage(product.salePrice, product.regularPrice)
  }));

export default updatedFalseProducts;