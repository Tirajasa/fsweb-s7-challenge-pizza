import React from "react";
import { Card } from "reactstrap";
import styled from "styled-components";
import { useEffect } from "react";

const SipTop = styled.h2`
  font-size: 20px;
  font-weight: 600;
  font-family: "Barlow";
`;

function MenuFis(props) {
  const { fis, form} = props;
  console.log("Toplam: "+((Number(fis.menu) + Number(fis.extras)) * Number(form.adet)).toFixed(2));
  console.log("Fis:"+fis,"form"+form);
  console.log("fis.extras:", fis.extras);
console.log("fis.menu:", fis.menu);
console.log("form.adet:", form.adet);
  return (
    <div className="ekstresi">
      {/* hatirlatma :her secilen menu icin maple donmeyi unutma -----------------*/}

      <SipTop>Sipariş Toplamı</SipTop>
      <div>
        {/* {.map((menu, index) => ( */}
        {/* <div key={index}> <h3>{menu.ad}({menu.adet})</h3></div> */}
        {/* ))} */}
        
        <p>Ek Malzeme:</p>
        <p>{form.toppings.join(", ")}</p>
        <div>
          <p>Ek Malzeme Toplami:</p>{" "}
          <p>{(Number(fis.extras) * Number(form.adet)).toFixed(2)}</p>{" "}
        </div>
      </div>
      <div>
        <p>Seçimler: {form.adet} adet</p> <p> {form.ad}</p>{" "}
      </div>

      <div>
        <p>Menu Toplami:</p>{" "}
        <p>{((Number(fis.menu) + Number(fis.extras)) * Number(form.adet)).toFixed(2)}</p>{" "}
      </div>
    </div>
  );
}

export default MenuFis;
