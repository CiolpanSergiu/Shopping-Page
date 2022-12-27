import styled from "styled-components";
import Navbar from "../../components/NavbarComponents/Navbar";
import Footer from "../../components/Footer/Footer";
import SubcategoryCardsContainer from "../../components/HomePageComponents/Containers/SubcategoryCardsContainer";
import SimpleSlider from "../../components/Sliders/HomePage/SimpleSlider";
import BrandsSlider from "../../components/Sliders/HomePage/BrandsSlider";
import Data from "../../data/mainCategory.json";
import instrumentsData from "../../data/Subcategories/drumsAndPercussion.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function AccesoriesPage() {
  return (
    <>
      <Navbar />
      <Container>
        <SubcategoryCardsContainer
          data={instrumentsData}
          pageTitle="Accesories Categories"
        />
        <SimpleSlider cardsData={Data} header="Recommended to beginners" />
        <SimpleSlider cardsData={Data} header="Popular Items" />
        <BrandsSlider title="Best Musical Accesories Brands" />
      </Container>
      <Footer marginTop="5rem" />
    </>
  );
}
