const FastFoods = [
    {
      id: 1,
      ad: 'Hot Dog',
      resim: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/hot-dog-2786702_960_720.jpg',
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
  ];
  export default FastFoods;