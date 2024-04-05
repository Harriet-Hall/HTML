const images = ['https://people.com/thmb/MayGy_E9CakxF3d1SXzo25mjKk8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(704x499:706x501):format(webp)/mr-potato-head-2-81535c3c90494a4eada309828034eedf.jpg', 'https://i.ibb.co/nbSH7GY/podata.png', 'https://i.ibb.co/t2y4ZML/raw-pot.png', 'https://img.freepik.com/premium-photo/mashed-potatoes-bowl-white-background_1002990-9.jpg?w=1380']
let i = 0


toPunish = () => {
    let image = document.getElementById('podata-head')

    i++


    if (i === images.length) {
        i = 0
    }

    image.src = images[i]

}

