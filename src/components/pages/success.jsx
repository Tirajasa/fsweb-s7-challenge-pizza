import React from "react";
import styled from "styled-components";
import MenuFis from "../parts/order/MenuFis";
const Banner = styled.img`
  position: relative;
  align-items: center;
  top: 50px;
`;

function Success(props) {
  const { form, fis } = props;
  return (
    <>
      <div className="redflag">
        <Banner src="../../../Assets/mile1-assets/logo.svg"></Banner>
        </div>
        <div className="wrap">
          <p className="lez">Lezzet Yolda!!!</p>
          <div className="onay">
            <p>TEBRİKLER!</p>
            <p>SİPARİŞİNİZ ALINDI!</p>
          </div>
          <div className="siparis-ekstre">
          </div>
        </div>
        <div className="sipozet"> 
          <div className="cerceve">
      <MenuFis fis={fis} form={form}/>
      </div>
      <div className="boslluk"></div>
      </div>
    
    </>
  );
}

export default Success;
