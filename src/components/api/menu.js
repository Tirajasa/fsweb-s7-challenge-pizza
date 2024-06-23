// menu.js

const menulist = [
    {
      category: 'Burgerler',
      items: [
        {
            id: 1,
            ad: 'Cheeseburger',
            price:10.2,
            resim: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg',
            yorum:361,
            rate:4.9,
            aciklama:"icinde harika tatlariyla tercih sebebiniz olabilir.fasa fiso fasa fiso." ,
            toppings: [
              { id: 1, ad: 'Marul', fiyat: 0.5, checked: false },
              { id: 2, ad: 'Domates', fiyat: 0.5, checked: false },
              { id: 3, ad: 'Turşu', fiyat: 0.5, checked: false },
              { id: 4, ad: 'Karamelize Soğan', fiyat: 1.0, checked: false },
              { id: 5, ad: 'Jalapeno', fiyat: 0.8, checked: false },
              { id: 6, ad: 'Avokado', fiyat: 1.5, checked: false },
              { id: 7, ad: 'Bacon', fiyat: 2.0, checked: false },
              { id: 8, ad: 'Mantar', fiyat: 1.0, checked: false },
              { id: 9, ad: 'Ekstra Peynir', fiyat: 1.0, checked: false },
              { id: 10, ad: 'Yumurta', fiyat: 1.5, checked: false },
              { id: 11, ad: 'Barbekü Sos', fiyat: 0.5, checked: false },
              { id: 12, ad: 'Sarımsaklı Aioli', fiyat: 0.7, checked: false },
              { id: 13, ad: 'Tavuk', fiyat: 2.0, checked: false },
              { id: 14, ad: 'Füme Et', fiyat: 2.5, checked: false }
            ]
          },
          {
            id: 2,
            ad: 'Bacon Burger',
            price:13.4,
            resim: 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_960_720.jpg',
            yorum:266,
            rate:4.9,
            aciklama:"icinde harika tatlariyla tercih sebebiniz olabilir.fasa fiso fasa fiso." ,
            toppings: [
              { id: 15, ad: 'Marul', fiyat: 0.5, checked: false },
              { id: 16, ad: 'Domates', fiyat: 0.5, checked: false },
              { id: 17, ad: 'Turşu', fiyat: 0.5, checked: false },
              { id: 18, ad: 'Karamelize Soğan', fiyat: 1.0, checked: false },
              { id: 19, ad: 'Jalapeno', fiyat: 0.8, checked: false },
              { id: 20, ad: 'Avokado', fiyat: 1.5, checked: false },
              { id: 21, ad: 'Bacon', fiyat: 2.0, checked: false },
              { id: 22, ad: 'Mantar', fiyat: 1.0, checked: false },
              { id: 23, ad: 'Ekstra Peynir', fiyat: 1.0, checked: false },
              { id: 24, ad: 'Yumurta', fiyat: 1.5, checked: false },
              { id: 25, ad: 'Barbekü Sos', fiyat: 0.5, checked: false },
              { id: 26, ad: 'Sarımsaklı Aioli', fiyat: 0.7, checked: false },
              { id: 27, ad: 'Tavuk', fiyat: 2.0, checked: false },
              { id: 28, ad: 'Füme Et', fiyat: 2.5, checked: false }
            ]
          },
          {
            id: 3,
            ad: 'Chicken Burger',
            price:12.5,
            resim: 'https://cdn.pixabay.com/photo/2020/05/15/16/56/burger-5176646_960_720.jpg',
            yorum:113,
            rate:4.6,
            aciklama:"icinde harika tatlariyla tercih sebebiniz olabilir.fasa fiso fasa fiso." ,
            toppings: [
              { id: 29, ad: 'Marul', fiyat: 0.5, checked: false },
              { id: 30, ad: 'Domates', fiyat: 0.5, checked: false },
              { id: 31, ad: 'Turşu', fiyat: 0.5, checked: false },
              { id: 32, ad: 'Karamelize Soğan', fiyat: 1.0, checked: false },
              { id: 33, ad: 'Jalapeno', fiyat: 0.8, checked: false },
              { id: 34, ad: 'Avokado', fiyat: 1.5, checked: false },
              { id: 35, ad: 'Bacon', fiyat: 2.0, checked: false },
              { id: 36, ad: 'Mantar', fiyat: 1.0, checked: false },
              { id: 37, ad: 'Ekstra Peynir', fiyat: 1.0, checked: false },
              { id: 38, ad: 'Yumurta', fiyat: 1.5, checked: false },
              { id: 39, ad: 'Barbekü Sos', fiyat: 0.5, checked: false },
              { id: 40, ad: 'Sarımsaklı Aioli', fiyat: 0.7, checked: false },
              { id: 41, ad: 'Tavuk', fiyat: 2.0, checked: false },
              { id: 42, ad: 'Füme Et', fiyat: 2.5, checked: false }
            ]
          }
        
      ]
    },
    {
      category: 'Pizzalar',
      items: [
        {
            id: 1,
            ad: 'Margherita',
            price:10.2,
            resim: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg',
            yorum:229,
            rate:5,
            aciklama:"A classic pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves." ,
            toppings: [
              { id: 1, ad: 'Mozzarella Peyniri', fiyat: 2.5, checked: false },
              { id: 2, ad: 'Domates Sosu', fiyat: 1.5, checked: false },
              { id: 3, ad: 'Fesleğen', fiyat: 1.0, checked: false },
              { id: 4, ad: 'Sarımsak', fiyat: 0.8, checked: false },
              { id: 5, ad: 'Zeytin Yağı', fiyat: 0.7, checked: false },
              { id: 6, ad: 'Rendelenmiş Parmesan Peyniri', fiyat: 1.5, checked: false },
              { id: 7, ad: 'Ispanak', fiyat: 1.2, checked: false },
              { id: 8, ad: 'Soğan', fiyat: 0.7, checked: false },
              { id: 9, ad: 'Biber', fiyat: 1.0, checked: false },
              { id: 10, ad: 'Mantar', fiyat: 1.3, checked: false },
              { id: 11, ad: 'Enginar', fiyat: 1.4, checked: false },
              { id: 12, ad: 'Jalapeno', fiyat: 0.8, checked: false },
              { id: 13, ad: 'Ananas', fiyat: 1.1, checked: false },
              { id: 14, ad: 'Kabak', fiyat: 1.0, checked: false }
            ]
          },
          {
            id: 2,
            ad: 'Sucuklu',
            resim: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg',
            price:13.4,
            yorum:134,
            rate:4.9,
            aciklama:"icinde harika tatlariyla tercih sebebiniz olabilir.fasa fiso fasa fiso." ,
            toppings: [
              { id: 15, ad: 'Sucuk', fiyat: 2.5, checked: false },
              { id: 16, ad: 'Mozzarella Peyniri', fiyat: 2.5, checked: false },
              { id: 17, ad: 'Domates Sosu', fiyat: 1.5, checked: false },
              { id: 18, ad: 'Sarımsak', fiyat: 0.8, checked: false },
              { id: 19, ad: 'Zeytin Yağı', fiyat: 0.7, checked: false },
              { id: 20, ad: 'Rendelenmiş Parmesan Peyniri', fiyat: 1.5, checked: false },
              { id: 21, ad: 'Soğan', fiyat: 0.7, checked: false },
              { id: 22, ad: 'Biber', fiyat: 1.0, checked: false },
              { id: 23, ad: 'Zeytin', fiyat: 0.9, checked: false },
              { id: 24, ad: 'Mantar', fiyat: 1.3, checked: false },
              { id: 25, ad: 'Jalapeno', fiyat: 0.8, checked: false },
              { id: 26, ad: 'Ananas', fiyat: 1.1, checked: false },
              { id: 27, ad: 'Cheddar Peyniri', fiyat: 1.2, checked: false },
              { id: 28, ad: 'Salam', fiyat: 2.5, checked: false }
            ]
          },
          {
            id: 3,
            ad: 'Terminal Pizza',
            resim: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg',
            price:14.9,
            yorum:197,
            rate:4.8,
            aciklama:"icinde harika tatlariyla tercih sebebiniz olabilir.fasa fiso fasa fiso." ,
            toppings: [
              { id: 29, ad: 'Biber Salçası', fiyat: 1.5, checked: false },
              { id: 30, ad: 'Soğan', fiyat: 0.8, checked: false },
              { id: 31, ad: 'Zeytin', fiyat: 0.9, checked: false },
              { id: 32, ad: 'Mantar', fiyat: 1.3, checked: false },
              { id: 33, ad: 'Ispanak', fiyat: 1.2, checked: false },
              { id: 34, ad: 'Enginar', fiyat: 1.4, checked: false },
              { id: 35, ad: 'Domates', fiyat: 1.0, checked: false },
              { id: 36, ad: 'Sarımsak', fiyat: 0.8, checked: false },
              { id: 37, ad: 'Rendelenmiş Parmesan Peyniri', fiyat: 1.5, checked: false },
              { id: 38, ad: 'Jalapeno', fiyat: 0.8, checked: false },
              { id: 39, ad: 'Ananas', fiyat: 1.1, checked: false },
              { id: 40, ad: 'Tulum Peyniri', fiyat: 1.2, checked: false },
              { id: 41, ad: 'Salam', fiyat: 2.5, checked: false },
              { id: 42, ad: 'Füme Et', fiyat: 3.0, checked: false },
              { id: 43, ad: 'Tavuk', fiyat: 2.0, checked: false },
              { id: 44, ad: 'Biberiye', fiyat: 1.0, checked: false }
            ]
          },
          {
          id: 4,
            ad: 'Position Absolute Acı Pizza ',
            price:10.2,
            resim: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg',
            yorum:229,
            rate:5,
            aciklama:"icinde harika tatlariyla tercih sebebiniz olabilir.fasa fiso fasa fiso." ,
            toppings: [
              { id: 45, ad: 'Mozzarella Peyniri', fiyat: 2.5, checked: false },
              { id: 46, ad: 'Tavuk', fiyat: 2, checked: false },
              { id: 47, ad: 'Fesleğen', fiyat: 1.0, checked: false },
              { id: 48, ad: 'Sarımsak', fiyat: 0.8, checked: false },
              { id: 49, ad: 'Salam', fiyat: 2.5, checked: false },
              { id: 50, ad: 'Rendelenmiş Parmesan Peyniri', fiyat: 1.5, checked: false },
              { id: 51, ad: 'Ispanak', fiyat: 1.2, checked: false },
              { id: 52, ad: 'Soğan', fiyat: 0.7, checked: false },
              { id: 53, ad: 'Biber', fiyat: 1.0, checked: false },
              { id: 54, ad: 'Mantar', fiyat: 1.3, checked: false },
              { id: 55, ad: 'Chili', fiyat: 1.8, checked: false },
              { id: 56, ad: 'Jalapeno', fiyat: 0.8, checked: false },
              { id: 57, ad: 'Ananas', fiyat: 1.1, checked: false },
              { id: 58, ad: 'Rokfor', fiyat: 3.0, checked: false }
            ]
          },
      ]
    },
    {
      category: 'Fast Food',
      items: [
        {
            id: 1,
            ad: 'Hot Dog',
            resim: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/hot-dog-2786702_960_720.jpg',
            price:10.2,
            yorum:120,
            rate:4.5,
            aciklama:"icinde harika tatlariyla tercih sebebiniz olabilir.fasa fiso fasa fiso." ,
            toppings: [
              { id: 1, ad: 'Ketçap', fiyat: 0.5, checked: false },
              { id: 2, ad: 'Mayonez', fiyat: 0.5, checked: false },
              { id: 3, ad: 'Barbekü Sos', fiyat: 0.5, checked: false },
              { id: 4, ad: 'Ranch Sos', fiyat: 0.8, checked: false },
              { id: 5, ad: 'Sarımsaklı Aioli', fiyat: 0.7, checked: false },
              { id: 6, ad: 'Acı Sos', fiyat: 0.6, checked: false },
              { id: 7, ad: 'Cheddar Peyniri', fiyat: 1.0, checked: false },
              { id: 8, ad: 'Mozzarella Peyniri', fiyat: 1.2, checked: false },
              { id: 9, ad: 'Parmesan Peyniri', fiyat: 1.5, checked: false },
              { id: 10, ad: 'Bacon', fiyat: 2.0, checked: false },
              { id: 11, ad: 'Jalapeno', fiyat: 0.8, checked: false },
              { id: 12, ad: 'Karamelize Soğan', fiyat: 1.0, checked: false },
              { id: 13, ad: 'Füme Et', fiyat: 2.5, checked: false },
              { id: 14, ad: 'Turşu', fiyat: 0.5, checked: false }
            ]
          },
          {
            id: 2,
            ad: 'Taco',
            resim: 'https://cdn.pixabay.com/photo/2017/08/30/11/06/tacos-2691151_960_720.jpg',
            price:13.9,
            yorum:369,
            rate:4.9,
            aciklama:"icinde harika tatlariyla tercih sebebiniz olabilir.fasa fiso fasa fiso." ,
            toppings: [
              { id: 15, ad: 'Guacamole', fiyat: 1.5, checked: false },
              { id: 16, ad: 'Ekşi Krema', fiyat: 0.7, checked: false },
              { id: 17, ad: 'Pico de Gallo', fiyat: 0.8, checked: false },
              { id: 18, ad: 'Marul', fiyat: 0.5, checked: false },
              { id: 19, ad: 'Domates', fiyat: 0.5, checked: false },
              { id: 20, ad: 'Soğan', fiyat: 0.3, checked: false },
              { id: 21, ad: 'Jalapeno', fiyat: 0.8, checked: false },
              { id: 22, ad: 'Cheddar Peyniri', fiyat: 1.0, checked: false },
              { id: 23, ad: 'Mozzarella Peyniri', fiyat: 1.2, checked: false },
              { id: 24, ad: 'Parmesan Peyniri', fiyat: 1.5, checked: false },
              { id: 25, ad: 'Tavuk', fiyat: 2.0, checked: false },
              { id: 26, ad: 'Füme Et', fiyat: 2.5, checked: false },
              { id: 27, ad: 'Siyah Fasulye', fiyat: 0.5, checked: false },
              { id: 28, ad: 'Mısır', fiyat: 0.5, checked: false }
            ]
          },
          {
            id: 3,
            ad: 'Döner',
            resim: 'https://cdn.pixabay.com/photo/2017/01/23/10/45/doner-2001930_960_720.jpg',
            price:14.3,
            yorum:425,
            rate:4.9,
            aciklama:"icinde harika tatlariyla tercih sebebiniz olabilir.fasa fiso fasa fiso." ,
            toppings: [
              { id: 29, ad: 'Ketçap', fiyat: 0.5, checked: false },
              { id: 30, ad: 'Mayonez', fiyat: 0.5, checked: false },
              { id: 31, ad: 'Barbekü Sos', fiyat: 0.5, checked: false },
              { id: 32, ad: 'Ranch Sos', fiyat: 0.8, checked: false },
              { id: 33, ad: 'Sarımsaklı Aioli', fiyat: 0.7, checked: false },
              { id: 34, ad: 'Acı Sos', fiyat: 0.6, checked: false },
              { id: 35, ad: 'Cheddar Peyniri', fiyat: 1.0, checked: false },
              { id: 36, ad: 'Mozzarella Peyniri', fiyat: 1.2, checked: false },
              { id: 37, ad: 'Parmesan Peyniri', fiyat: 1.5, checked: false },
              { id: 38, ad: 'Bacon', fiyat: 2.0, checked: false },
              { id: 39, ad: 'Jalapeno', fiyat: 0.8, checked: false },
              { id: 40, ad: 'Karamelize Soğan', fiyat: 1.0, checked: false },
              { id: 41, ad: 'Füme Et', fiyat: 2.5, checked: false },
              { id: 42, ad: 'Turşu', fiyat: 0.5, checked: false }
            ]
          },
          {
            id: 4,
            ad: 'Falafel',
            resim: 'https://cdn.pixabay.com/photo/2021/01/22/12/32/falafel-5938353_960_720.jpg',
            price:13.9,
            yorum:192,
            rate:4.9,
            aciklama:"icinde harika tatlariyla tercih sebebiniz olabilir.fasa fiso fasa fiso." ,
            toppings: [
              { id: 43, ad: 'Hummus', fiyat: 1.0, checked: false },
              { id: 44, ad: 'Tahini Sos', fiyat: 0.8, checked: false },
              { id: 45, ad: 'Domates', fiyat: 0.5, checked: false },
              { id: 46, ad: 'Salatalık', fiyat: 0.5, checked: false },
              { id: 47, ad: 'Marul', fiyat: 0.3, checked: false },
              { id: 48, ad: 'Soğan', fiyat: 0.3, checked: false },
              { id: 49, ad: 'Turşu', fiyat: 0.5, checked: false },
              { id: 50, ad: 'Jalapeno', fiyat: 0.8, checked: false },
              { id: 51, ad: 'Cheddar Peyniri', fiyat: 1.0, checked: false },
              { id: 52, ad: 'Mozzarella Peyniri', fiyat: 1.2, checked: false },
              { id: 53, ad: 'Parmesan Peyniri', fiyat: 1.5, checked: false },
              { id: 54, ad: 'Karamelize Soğan', fiyat: 1.0, checked: false },
              { id: 55, ad: 'Füme Et', fiyat: 2.5, checked: false },
              { id: 56, ad: 'Mısır', fiyat: 0.5, checked: false }
            ]
          },
          {
            id: 5,
            ad: 'Sosisli Sandviç',
            resim: 'https://cdn.pixabay.com/photo/2017/07/16/10/43/hot-dog-2501216_960_720.jpg',
            price:9.9,
            yorum:140,
            rate:4.3,
            aciklama:"icinde harika tatlariyla tercih sebebiniz olabilir.fasa fiso fasa fiso." ,
            toppings: [
              { id: 57, ad: 'Ketçap', fiyat: 0.5, checked: false },
              { id: 58, ad: 'Mayonez', fiyat: 0.5, checked: false },
              { id: 59, ad: 'Barbekü Sos', fiyat: 0.5, checked: false },
              { id: 60, ad: 'Ranch Sos', fiyat: 0.8, checked: false },
              { id: 61, ad: 'Sarımsaklı Aioli', fiyat: 0.7, checked: false },
              { id: 62, ad: 'Acı Sos', fiyat: 0.6, checked: false },
              { id: 63, ad: 'Cheddar Peyniri', fiyat: 1.0, checked: false },
              { id: 64, ad: 'Mozzarella Peyniri', fiyat: 1.2, checked: false },
              { id: 65, ad: 'Parmesan Peyniri', fiyat: 1.5, checked: false },
              { id: 66, ad: 'Bacon', fiyat: 2.0, checked: false },
              { id: 67, ad: 'Jalapeno', fiyat: 0.8, checked: false },
              { id: 68, ad: 'Karamelize Soğan', fiyat: 1.0, checked: false },
              { id: 69, ad: 'Füme Et', fiyat: 2.5, checked: false },
              { id: 70, ad: 'Turşu', fiyat: 0.5, checked: false }
            ]
          },
          {
            id: 6,
            ad: 'Burrito',
            resim: 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burrito-500052_960_720.jpg',
            price:10.6,
            yorum:137,
            rate:4.9,
            aciklama:"icinde harika tatlariyla tercih sebebiniz olabilir.fasa fiso fasa fiso." ,
            toppings: [
              { id: 71, ad: 'Guacamole', fiyat: 1.5, checked: false },
              { id: 72, ad: 'Ekşi Krema', fiyat: 0.7, checked: false },
              { id: 73, ad: 'Pico de Gallo', fiyat: 0.8, checked: false },
              { id: 74, ad: 'Marul', fiyat: 0.5, checked: false },
              { id: 75, ad: 'Domates', fiyat: 0.5, checked: false },
              { id: 76, ad: 'Soğan', fiyat: 0.3, checked: false },
              { id: 77, ad: 'Jalapeno', fiyat: 0.8, checked: false },
              { id: 78, ad: 'Cheddar Peyniri', fiyat: 1.0, checked: false },
              { id: 79, ad: 'Mozzarella Peyniri', fiyat: 1.2, checked: false },
              { id: 80, ad: 'Parmesan Peyniri', fiyat: 1.5, checked: false },
              { id: 81, ad: 'Tavuk', fiyat: 2.0, checked: false },
              { id: 82, ad: 'Füme Et', fiyat: 2.5, checked: false },
              { id: 83, ad: 'Siyah Fasulye', fiyat: 0.5, checked: false },
              { id: 84, ad: 'Mısır', fiyat: 0.5, checked: false }
            ]
          }
      ]
    },
    {
        category: 'FrenchFries',
        items: [
        {
            id: 1,
            ad: 'Klasik Patates Kızartması',
            resim: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg',
            price:8.6,
            yorum:157,
            rate:5,
            aciklama:"icinde harika tatlariyla tercih sebebiniz olabilir.fasa fiso fasa fiso." ,
            toppings: [
              { id: 1, ad: 'Ketçap', fiyat: 0.5, checked: false },
              { id: 2, ad: 'Mayonez', fiyat: 0.5, checked: false },
              { id: 3, ad: 'Barbekü Sos', fiyat: 0.5, checked: false },
              { id: 4, ad: 'Ranch Sos', fiyat: 0.8, checked: false },
              { id: 5, ad: 'Sarımsaklı Aioli', fiyat: 0.7, checked: false },
              { id: 6, ad: 'Acı Sos', fiyat: 0.6, checked: false },
              { id: 7, ad: 'Cheddar Peyniri', fiyat: 1.0, checked: false },
              { id: 8, ad: 'Mozzarella Peyniri', fiyat: 1.2, checked: false },
              { id: 9, ad: 'Parmesan Peyniri', fiyat: 1.5, checked: false },
              { id: 10, ad: 'Bacon', fiyat: 2.0, checked: false },
              { id: 11, ad: 'Jalapeno', fiyat: 0.8, checked: false },
              { id: 12, ad: 'Tavuk', fiyat: 2.0, checked: false },
              { id: 13, ad: 'Karamelize Soğan', fiyat: 1.0, checked: false },
              { id: 14, ad: 'Füme Et', fiyat: 2.5, checked: false }
            ]
          },
          {
            id: 2,
            ad: 'Tatlı Patates Kızartması',
            resim: 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_960_720.jpg',
            price:10.5,
            yorum:170,
            rate:4.8,
            aciklama:"icinde harika tatlariyla tercih sebebiniz olabilir.fasa fiso fasa fiso." ,
            toppings: [
              { id: 15, ad: 'Ketçap', fiyat: 0.5, checked: false },
              { id: 16, ad: 'Mayonez', fiyat: 0.5, checked: false },
              { id: 17, ad: 'Barbekü Sos', fiyat: 0.5, checked: false },
              { id: 18, ad: 'Ranch Sos', fiyat: 0.8, checked: false },
              { id: 19, ad: 'Sarımsaklı Aioli', fiyat: 0.7, checked: false },
              { id: 20, ad: 'Acı Sos', fiyat: 0.6, checked: false },
              { id: 21, ad: 'Cheddar Peyniri', fiyat: 1.0, checked: false },
              { id: 22, ad: 'Mozzarella Peyniri', fiyat: 1.2, checked: false },
              { id: 23, ad: 'Parmesan Peyniri', fiyat: 1.5, checked: false },
              { id: 24, ad: 'Bacon', fiyat: 2.0, checked: false },
              { id: 25, ad: 'Jalapeno', fiyat: 0.8, checked: false },
              { id: 26, ad: 'Tavuk', fiyat: 2.0, checked: false },
              { id: 27, ad: 'Karamelize Soğan', fiyat: 1.0, checked: false },
              { id: 28, ad: 'Füme Et', fiyat: 2.5, checked: false }
            ]
          },
          {
            id: 3,
            ad: 'Peynirli Patates Kızartması',
            resim: 'https://cdn.pixabay.com/photo/2020/05/15/16/56/burger-5176646_960_720.jpg',
            price:11.8,
            yorum:39,
            rate:4.5,
            aciklama:"icinde harika tatlariyla tercih sebebiniz olabilir.fasa fiso fasa fiso." ,
            toppings: [
              { id: 29, ad: 'Ketçap', fiyat: 0.5, checked: false },
              { id: 30, ad: 'Mayonez', fiyat: 0.5, checked: false },
              { id: 31, ad: 'Barbekü Sos', fiyat: 0.5, checked: false },
              { id: 32, ad: 'Ranch Sos', fiyat: 0.8, checked: false },
              { id: 33, ad: 'Sarımsaklı Aioli', fiyat: 0.7, checked: false },
              { id: 34, ad: 'Acı Sos', fiyat: 0.6, checked: false },
              { id: 35, ad: 'Cheddar Peyniri', fiyat: 1.0, checked: false },
              { id: 36, ad: 'Mozzarella Peyniri', fiyat: 1.2, checked: false },
              { id: 37, ad: 'Parmesan Peyniri', fiyat: 1.5, checked: false },
              { id: 38, ad: 'Bacon', fiyat: 2.0, checked: false },
              { id: 39, ad: 'Jalapeno', fiyat: 0.8, checked: false },
              { id: 40, ad: 'Tavuk', fiyat: 2.0, checked: false },
              { id: 41, ad: 'Karamelize Soğan', fiyat: 1.0, checked: false },
              { id: 42, ad: 'Füme Et', fiyat: 2.5, checked: false }
            ]
          }

        ]
},
{
    category: 'FizzyDrinks',
    items: [
        {
            id: 1,
            ad: 'Kola',
            resim: 'https://cdn.pixabay.com/photo/2014/03/30/10/09/coca-cola-300170_960_720.jpg',
            price:4,
            boyutlar: [
              { id: 1, ad: 'Küçük', fiyat: 1.0 },
              { id: 2, ad: 'Orta', fiyat: 1.5 },
              { id: 3, ad: 'Büyük', fiyat: 2.0 }
            ]
          },
          {
            id: 2,
            ad: 'Fanta',
            resim: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/citrus-1958240_960_720.jpg',
            price:4.2,
            boyutlar: [
              { id: 4, ad: 'Küçük', fiyat: 1.0 },
              { id: 5, ad: 'Orta', fiyat: 1.5 },
              { id: 6, ad: 'Büyük', fiyat: 2.0 }
            ]
          },
          {
            id: 3,
            ad: 'Sprite',
            resim: 'https://cdn.pixabay.com/photo/2014/03/30/10/09/sprite-300171_960_720.jpg',
            price:4.9,
            boyutlar: [
              { id: 7, ad: 'Küçük', fiyat: 1.0 },
              { id: 8, ad: 'Orta', fiyat: 1.5 },
              { id: 9, ad: 'Büyük', fiyat: 2.0 }
            ]
          },
          {
            id: 4,
            ad: 'Gazoz',
            resim: 'https://cdn.pixabay.com/photo/2016/07/21/09/31/soft-drink-1532300_960_720.jpg',
            price:4.5,
            boyutlar: [
              { id: 10, ad: 'Küçük', fiyat: 1.0 },
              { id: 11, ad: 'Orta', fiyat: 1.5 },
              { id: 12, ad: 'Büyük', fiyat: 2.0 }
            ]
          },
          {
            id: 5,
            ad: 'Dr. Pepper',
            resim: 'https://cdn.pixabay.com/photo/2014/10/19/20/59/coke-494597_960_720.jpg',
            price:5,
            boyutlar: [
              { id: 13, ad: 'Küçük', fiyat: 1.2 },
              { id: 14, ad: 'Orta', fiyat: 1.7 },
              { id: 15, ad: 'Büyük', fiyat: 2.2 }
            ]
          },
          {
            id: 6,
            ad: 'Mountain Dew',
            resim: 'https://cdn.pixabay.com/photo/2016/10/27/22/05/mountain-dew-1774767_960_720.jpg',
            price:5,
            boyutlar: [
              { id: 16, ad: 'Küçük', fiyat: 1.2 },
              { id: 17, ad: 'Orta', fiyat: 1.7 },
              { id: 18, ad: 'Büyük', fiyat: 2.2 }
            ]
          }
        ]
    },
    {
        category: 'Ramenler',
        items: [
            {
                id: 1,
                ad: 'Shoyu Ramen',
                resim: 'https://cdn.pixabay.com/photo/2020/12/01/09/01/ramen-5794683_960_720.jpg',
                price:11.9,
                yorum:305,
                rate:4.9,
                aciklama:"icinde harika tatlariyla tercih sebebiniz olabilir.fasa fiso fasa fiso." ,
                 toppings: [
                  { id: 1, ad: 'Nori', fiyat: 1.0, checked: false },
                  { id: 2, ad: 'Haşlanmış Yumurta', fiyat: 1.5, checked: false },
                  { id: 3, ad: 'Yeşil Soğan', fiyat: 0.8, checked: false },
                  { id: 4, ad: 'Mısır', fiyat: 0.5, checked: false },
                  { id: 5, ad: 'Bambu Filizi', fiyat: 1.2, checked: false },
                  { id: 6, ad: 'Japon Balık Kekleri', fiyat: 2.0, checked: false },
                  { id: 7, ad: 'Susam Tohumu', fiyat: 0.7, checked: false },
                  { id: 8, ad: 'Chashu (Domuz Eti)', fiyat: 3.0, checked: false },
                  { id: 9, ad: 'Karides', fiyat: 2.5, checked: false },
                  { id: 10, ad: 'Tavuk', fiyat: 2.0, checked: false },
                  { id: 11, ad: 'Tofu', fiyat: 1.5, checked: false },
                  { id: 12, ad: 'Kızarmış Sarımsak', fiyat: 1.0, checked: false },
                  { id: 13, ad: 'Biber', fiyat: 0.7, checked: false },
                  { id: 14, ad: 'Mantar', fiyat: 1.0, checked: false }
                ]
              },
              {
                id: 2,
                ad: 'Tonkotsu Ramen',
                resim: 'https://cdn.pixabay.com/photo/2016/09/12/21/59/soup-1660931_960_720.jpg',
                price:11.9,   
                yorum:164,
                rate:4.7,
                aciklama:"icinde harika tatlariyla tercih sebebiniz olabilir.fasa fiso fasa fiso." ,
                   toppings: [
                  { id: 15, ad: 'Nori', fiyat: 1.0, checked: false },
                  { id: 16, ad: 'Haşlanmış Yumurta', fiyat: 1.5, checked: false },
                  { id: 17, ad: 'Yeşil Soğan', fiyat: 0.8, checked: false },
                  { id: 18, ad: 'Mısır', fiyat: 0.5, checked: false },
                  { id: 19, ad: 'Bambu Filizi', fiyat: 1.2, checked: false },
                  { id: 20, ad: 'Japon Balık Kekleri', fiyat: 2.0, checked: false },
                  { id: 21, ad: 'Susam Tohumu', fiyat: 0.7, checked: false },
                  { id: 22, ad: 'Chashu (Domuz Eti)', fiyat: 3.0, checked: false },
                  { id: 23, ad: 'Karides', fiyat: 2.5, checked: false },
                  { id: 24, ad: 'Tavuk', fiyat: 2.0, checked: false },
                  { id: 25, ad: 'Tofu', fiyat: 1.5, checked: false },
                  { id: 26, ad: 'Kızarmış Sarımsak', fiyat: 1.0, checked: false },
                  { id: 27, ad: 'Biber', fiyat: 0.7, checked: false },
                  { id: 28, ad: 'Mantar', fiyat: 1.0, checked: false }
                ]
              },
              {
                id: 3,
                ad: 'Miso Ramen',
                resim: 'https://cdn.pixabay.com/photo/2015/04/01/19/11/ramen-702874_960_720.jpg',
                price:11.9 ,
                yorum:117,
                rate:4.6,
                aciklama:"icinde harika tatlariyla tercih sebebiniz olabilir.fasa fiso fasa fiso." ,
                  toppings: [
                  { id: 29, ad: 'Nori', fiyat: 1.0, checked: false },
                  { id: 30, ad: 'Haşlanmış Yumurta', fiyat: 1.5, checked: false },
                  { id: 31, ad: 'Yeşil Soğan', fiyat: 0.8, checked: false },
                  { id: 32, ad: 'Mısır', fiyat: 0.5, checked: false },
                  { id: 33, ad: 'Bambu Filizi', fiyat: 1.2, checked: false },
                  { id: 34, ad: 'Japon Balık Kekleri', fiyat: 2.0, checked: false },
                  { id: 35, ad: 'Susam Tohumu', fiyat: 0.7, checked: false },
                  { id: 36, ad: 'Chashu (Domuz Eti)', fiyat: 3.0, checked: false },
                  { id: 37, ad: 'Karides', fiyat: 2.5, checked: false },
                  { id: 38, ad: 'Tavuk', fiyat: 2.0, checked: false },
                  { id: 39, ad: 'Tofu', fiyat: 1.5, checked: false },
                  { id: 40, ad: 'Kızarmış Sarımsak', fiyat: 1.0, checked: false },
                  { id: 41, ad: 'Biber', fiyat: 0.7, checked: false },
                  { id: 42, ad: 'Mantar', fiyat: 1.0, checked: false }
                ]
              }
            ]
        }
    

    ]


  export default menulist
  