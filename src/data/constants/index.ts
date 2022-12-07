const barbershopInfo = { 
   name: "BARBERSHOP NAME", 
   city: 'CITY',
   xp: '20',
   representing: 'an authentic American',
   address: '[ number ] Street, City, State ZIP ( Reference )',
   
}

export const hero = `Top Class Mens Haircuts, With the Style you desire by a 
consultation that fits your lifestyle.`

export const logo =  [
    {id: 'nav', content: barbershopInfo.name},
    {id: 'establishment', content: 'The Establishment'},
    {id: 'gallery', content: 'GALLERY'},
    {id: 'services', content: 'SERVICES'},
    {id: 'about', content: 'ABOUT'},
]

export const services =  [
    {
        id:1, 
        name: 'Skin Fade', 
        price: '40', 
        description: 'Any type of haircut & style you desire, Lathered neck & straight razor edging, eyebrows & ears maintenance,relax and enjoy over 20 years of experience comes to work! Beard trim $5..'
    },

    {
        id:2, 
        name: 'Haircut & Style', 
        price: '30', 
        description: 'Any type of haircut & style you desire, Lathered neck & straight razor edging, eyebrows & ears maintenance, blow-dry and style, free cold beer or beverage. Sit back relax and enjoy over 20 years of experience comes to work! Beard trim $5.'
    },

    {
        id:3, 
        name: 'Haircut & Beard trim', 
        price: '35', 
        description: 'Any type of haircut & style you desire, Lathered neck & straight razor edging, Beard trim, (No beard detailing) eyebrows & ears maintenance, blow-dry and style, cold beer or beverage'
    },

    {
        id:4, 
        name: "Woman's Services", 
        price: '35+', 
        description: "Woman's Haircut( $35+) Color ($65+) Blow Dry ($45) Hair Extensions ($400+) " 
    },

   
  ]; 

  export const theEstablishment = `The ${barbershopInfo.name} is a place decorated in my own way, always with good music and representing ${barbershopInfo.representing} barbershop in the best way, all of which combined makes ${barbershopInfo.name} a different place. Besides a great haircut, at ${barbershopInfo.name} you can enjoy a place where men can go to be my friend, I really love the relationship I have with clients and I want them to feel comfortable here. So come get a haircut at ${barbershopInfo.name}, relax and a cold one on me.`

  export const images = [
    {
      id:0,
      url:'/images/gallery/gallery1.jpg', 
      isLast:true, 
      isFirst: false
    },
    {
      id:1,
      url:'/images/gallery/gallery1.jpg', 
      isLast:true, 
      isFirst: false
    },
    {
      id:2,
      url:'/images/gallery/gallery1.jpg', 
      isLast:true, 
      isFirst: false
    },
    {
      id:3,
      url:'/images/gallery/gallery1.jpg', 
      isLast:true, 
      isFirst: false
    },
  ]




  export const about = [
    {

        description: `${barbershopInfo.name} is your Personal Barbershop, where you get TOP CLASS Mens or Womans Haircuts, With the Style you desire by a consultation that fits your lifestyle, from the Barber that loves what he does and takes pride in his work, over ${barbershopInfo.xp} years of experience. bringing the art of hair design to ${barbershopInfo.city}! I always pass on my passion for the art of hair design to my clients. Always delivering a great result so they feel better when they walk out my door.`
    }
]