import React from "react";
import Chart from "../../components/Chart/Chart";
import FooterRental from "../../components/FooterRental/FooterRental";
import FormRental from "../../components/FormRental/FormRental";
import HeaderRental from "../../components/HeaderRental/HeaderRental";
import NavbarRental from "../../components/NavbarRental/NavbarRental";

function Rental() {
  return (
    <>
      <NavbarRental />
      <HeaderRental />
      <FormRental />
      <Chart />
      <FooterRental />
    </>
  );
}

export default Rental;
