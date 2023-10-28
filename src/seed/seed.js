const seed = {
  coffees: [
    {
      _coffeeId: 1,
      _variety: 1,
      name: 'Café Etíope Yirgacheffe',
      description: 'Un café de origen único conocido por sus notas florales y cítricas.',
      scaScore: 90,
      process: 'Lavado',
      varietyType: 'Arabica',
      altitude: '1.700 - 2.200 metros sobre el nivel del mar',
      taste: 'Notas florales y cítricas con una calidad similar al té',
      grinding: 'Media',
      roasting: 'Claro',
      region: 'Yirgacheffe, Etiopía',
      price: 12.99,
      grams: 250,
      image:
        'https://libertyvillecoffee.com/cdn/shop/products/ethiopian-yirgacheffe-178946_2000x.jpg?v=1667930135'
    },
    {
      _coffeeId: 2,
      _variety: 2,
      name: 'Kenia Coffee Co.',
      description: 'Café molido de Kenia de alta calidad',
      scaScore: 90,
      process: 'Lavado',
      varietyType: 'Robusta',
      altitude: '1,800-2,100 metros',
      taste: 'Notas cítricas y afrutadas',
      grinding: 'Fina',
      roasting: 'Medio',
      region: 'Nyeri',
      price: 15.99,
      grams: 250,
      image: 'https://m.media-amazon.com/images/I/419uZLWeWrL.jpg'
    },
    {
      _coffeeId: 3,
      _variety: 1,
      name: 'Café Colombiano Premium',
      description: 'Café molido de alta calidad de Colombia',
      scaScore: 88,
      process: 'Lavado',
      varietyType: 'Arabica',
      altitude: '1,200-1,800 metros',
      taste: 'Notas de chocolate y caramelo',
      grinding: 'Media',
      roasting: 'Medio',
      region: 'Huila',
      price: 16.99,
      grams: 250
    },
    {
      _coffeeId: 4,
      _variety: 1,
      name: 'Café Costa Rica Especial',
      description: 'Café molido de alta calidad de Costa Rica',
      scaScore: 90,
      process: 'Lavado',
      varietyType: 'Arabica',
      altitude: '1,200-1,700 metros',
      taste: 'Notas cítricas y miel',
      grinding: 'Fina',
      roasting: 'Medio',
      region: 'Tarrazú',
      price: 18.99,
      grams: 250
    },
    {
      _coffeeId: 5,
      _variety: 1,
      name: 'Café Jamaicano Premium',
      description: 'Café molido de alta calidad de Jamaica',
      scaScore: 91,
      process: 'Lavado',
      varietyType: 'Arábica',
      altitude: '900-1,700 metros sobre el nivel del mar',
      taste: 'Notas suaves y afrutadas',
      grinding: 'Media',
      roasting: 'Medio',
      region: 'Blue Mountains',
      price: 22.99,
      grams: 250
    },
    {
      _coffeeId: 6,
      _variety: 2,
      name: 'Café Italiano Premium',
      description: 'Café molido de alta calidad de Italia',
      scaScore: 87,
      process: 'Natural',
      varietyType: 'Robusta',
      altitude: 'Varía según la region',
      taste: 'Notas intensas y achocolatadas',
      grinding: 'Extrafina',
      roasting: 'Oscuro',
      region: 'Varias regiones de Italia',
      price: 19.99,
      grams: 250
    }
  ],
  varieties: [
    {
      _varietyId: 1,
      _coffees: [1, 3, 4, 5],
      name: 'Arabica',
      description:
        'Es sedosa, afrutada y con toques a cacao. Originaria de Etiopía, es la más extendida y consumida a nivel mundial. Tiene una concentración de cafeína en torno al 1,5%.',
      origin: 'África del Este'
    },
    {
      _varietyId: 2,
      _coffees: [2, 6],
      name: 'Robusta',
      description:
        'Es más fuerte y amarga, con toques a frutos secos y madera. También contiene más cafeína: entre un 2-3%.',
      origin: 'África Occidental'
    }
  ]
};

module.exports = seed;
