import React, { useEffect, useRef } from "react";

import { useHistory } from "react-router-dom";

import styled from "styled-components";
import FooterC from "../parts/home/footer";
import Siparisver from "../parts/home/siparisver";
import menulist from "../api/menu";

const HomeImage = styled.img`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  object-fit: cover;
  top: 0px;
  left: 0px;
  z-index: 0;
  position: absolute;
`;
const YaziContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 586px;
  height: 300px;
  margin: 0;
  padding: 0;
  z-index: 1;
  justify-content: baseline;
  align-items: center;
`;
const Tekno = styled.img`
  z-index: 1;
  top: 30px;
  position: relative;
  margin: 0;
  padding: 0;
`;
const YellowButton = styled.div`
  padding: 10px 5px;
  width: 195px;
  background-color: rgb(253, 201, 18);
  border-radius: 50px;
  font-family: "Barlow";
  margin: 0;
  text-align: center;
  z-index: 1;
  cursor: pointer;
  &:hover {
    background-color: rgb(252, 224, 121);
  }
  vertical-align: bottom;
  justify-content: end;
`;

const Parag = styled.p`
  padding: 0;
  margin: 0;
  color: white;
  font-family: "Roboto condensed";
  z-index: 1;
  font-size: 76px;
  font-weight: 300;
`;

const Raf = styled.p`
  padding: 0;
  margin: -2rem 0 0 0;
  z-index: 1;
  color: white;
  font-family: "Roboto condensed";
  font-weight: 300;
  font-size: 76px;
`;
const Hat = styled.div`
  background-color: gray;
`;

function Homeb(props) {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedItems,
    setSelectedItems,
    setCategoryItems,
    categoryItems,
  } = props;

  const iconsRef = useRef(null);
  let history = useHistory();

  function buttonHandler() {
    console.log("Aciktim button is clicked!");
    history.push("/order");
  }

  function iconaTikla(category) {
    setSelectedCategory(category); // Seçili kategoriyi ayarla
    // fetchCategoryItems(category); // Seçili kategoriye göre öğeleri getir
    scrollToIcons(); // İkonlara kaydır
  }
  function categorySec(category) {
    setSelectedCategory(category);
    // fetchCategoryItems(category);
  }
  function scrollToIcons() {
    if (iconsRef.current) {
      iconsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  useEffect(() => {
    if (selectedCategory) {
      fetchCategoryItems(selectedCategory);
    }
  }, [selectedCategory]);

  function fetchCategoryItems(category) {
    const sCategory = menulist.find((cat) => cat.category === selectedCategory);

    if (sCategory) {
      setCategoryItems(sCategory.items);
      console.log(`"${category}" kategorisi için menüler başarıyla yüklendi.`);
    } else {
      console.error(
        `İlgili kategori bulunamadı: ${category}`,
        selectedCategory
      );
    }
  }

  function clickedItems(value) {
    setSelectedItems(value);
    history.push("/order");
    console.log(`Paketlenen menulerden "${value}" tiklandi`);
  }
  useEffect(() => {
    if (selectedItems) {
      clickedItems(selectedItems);
      console.log(
        "sayfaya tiklanan urun bilgileri geliyor(toppings,aciklama, yorumlar vs)"
      );
    }
  }, [selectedItems]);
  return (
    <div className="roothome">
      <div className="orumcek">
        <HomeImage
          src="../../../Assets/mile1-assets/home-banner.png"
          alt="home"
        ></HomeImage>
        <div className="tepe">
          <Tekno src="../../../Assets/mile1-assets/logo.svg" alt="logo"></Tekno>
        </div>
        <YaziContainer>
          <div className="yaziPartial">
            <Parag>KOD ACIKTIRIR, </Parag>
            <Raf>PİZZA DOYURUR</Raf>
          </div>
          <YellowButton onClick={buttonHandler}> ACIKTIM </YellowButton>
        </YaziContainer>
      </div>
      <div className="bosluk">
        <div className="ikonlar">
          <div onClick={() => iconaTikla("Ramenler")}>
            <img src="../../../Assets//mile2-aseets/icons/1.svg" />
            <span>YENI!Kore</span>
          </div>
          <div onClick={() => iconaTikla("Pizzalar")}>
            <img src="../../../Assets//mile2-aseets/icons/2.svg" />
            <span>Pizza</span>
          </div>
          <div onClick={() => iconaTikla("Burgerler")}>
            <img src="../../../Assets//mile2-aseets/icons/3.svg" />
            <span>Burger</span>
          </div>
          <div onClick={() => iconaTikla("FrenchFries")}>
            <img src="../../../Assets//mile2-aseets/icons/4.svg" />
            <span>Kizartmalar</span>
          </div>
          <div onClick={() => iconaTikla("Fast Food")}>
            <img src="../../../Assets//mile2-aseets/icons/5.svg" />
            <span>Fast food</span>
          </div>
          <div onClick={() => iconaTikla("FizzyDrinks")}>
            <img src="../../../Assets//mile2-aseets/icons/6.svg" />
            <span>Gazli Icecek</span>
          </div>
        </div>
      </div>
      <div className="ortaPart">
        <div className="solyanres">
          <img src="../../../Assets/mile2-aseets/cta/kart-1.png" alt="pizza" />
          <div className="toplayici">
            <h1>Özel</h1>
            <h1> Lezzetus</h1>
            <p>Position:Absolute Acı Pizza</p>
            <Siparisver onClick={buttonHandler} />
          </div>
        </div>
        <div className="sagyanres">
          <div className="ustres">
            <img
              src="../../../Assets/mile2-aseets/cta/kart-2.png"
              alt="hackathlon"
            />
            <div className="toplayici">
              <h3>Hackathlon</h3>
              <h3>Burger Menü</h3>
              <Siparisver />
            </div>
          </div>
          <div className="altres">
            <img
              src="../../../Assets/mile2-aseets/cta/kart-3.png"
              alt="kurye"
            />
            <div className="toplayici">
              <div>
                <span className="red anti">Çoooook </span>
                <span className="anti">hızlı </span>
              </div>
              <p className="anti">npm gibi kurye</p>
              <Siparisver />
            </div>
          </div>
        </div>
      </div>

      <div id="icons" ref={iconsRef}>
        <h3 className="satisfy">en çok paketlenen menüler</h3>
        <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>

        <div className="saydam">
          <div className="bot">
            <div
              data-category="Ramenler"
              className="bale"
              onClick={() => categorySec("Ramenler")}
            >
              <img src="../../../Assets//mile2-aseets/icons/1.svg" />
              <p>Ramen</p>
            </div>
            <div
              data-category="Pizzalar"
              className="bale"
              onClick={() => categorySec("Pizzalar")}
            >
              <img src="../../../Assets//mile2-aseets/icons/2.svg" />
              <p>Pizza</p>
            </div>
            <div
              data-category="Burgerler"
              className="bale"
              onClick={() => categorySec("Burgerler")}
            >
              <img src="../../../Assets//mile2-aseets/icons/3.svg" />
              <p>Burger</p>
            </div>
            <div
              data-category="FrenchFries"
              className="bale"
              onClick={() => categorySec("FrenchFries")}
            >
              <img src="../../../Assets//mile2-aseets/icons/4.svg" />
              <p>French Fries</p>
            </div>
            <div
              data-category="Fast Food"
              className="bale"
              onClick={() => categorySec("Fast Food")}
            >
              <img src="../../../Assets//mile2-aseets/icons/5.svg" />
              <p>Fast food</p>
            </div>
            <div
              data-category="FizzyDrinks"
              className="bale"
              onClick={() => categorySec("FizzyDrinks")}
            >
              <img src="../../../Assets//mile2-aseets/icons/6.svg" />
              <p>Soft Drinks</p>
            </div>
          </div>
        </div>

        <div className="ortu">
          <div className="sunum">
            {categoryItems.map((menu, index) => (
              <div
                className="cardcik"
                onClick={() => clickedItems(menu)}
                key={menu.id}
              >
                <img src={menu.resim} alt={menu.ad} />
                <div className="kat">
                  <h4>{menu.ad}</h4>
                  <div className="linex">
                    <p>{menu.rate}</p>
                    <p>({menu.yorum})</p>
                    <h5>{menu.price}₺</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterC></FooterC>
    </div>
  );
}

export default Homeb;
