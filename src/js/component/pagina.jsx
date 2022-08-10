import React from "react";

//importo mis componentes
import NavBar from "./navBar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";
import Card from "./card.jsx";

const arregloCards = [
  {
    urlImage: "https://picsum.photos/250",
    title: "Card Title",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, nobis!",
    textButton: "Find Out More"
  },
  {
    urlImage: "https://picsum.photos/300",
    title: "Card Title",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, nobis!",
    textButton: "Find Out More"
  },
  {
    urlImage: "https://picsum.photos/200",
    title: "Card Title",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, nobis!",
    textButton: "Find Out More"
  },
  {
    urlImage: "https://picsum.photos/350",
    title: "Card Title",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, nobis!",
    textButton: "Find Out More"
  }
]

const Pagina = () => {
  return (
    <div className="container-fluid p-0">
      <NavBar />
      <div className="container miContenedor">
        <div className="col-12 my-3">
          <Jumbotron
            title="A Warm Welcome"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, beatae? Facilis nobis repellat assumenda odit molestiae explicabo totam cum voluptas. Autem magnam animi deserunt nemo consequuntur ad illum. Iste, quo."
            buttonText="Call to action!"
          />
        </div>
        <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-my-3 m-auto">
            {arregloCards.map(card =>(
              (
              <div className="col mb-3">
                <Card {...card}/>
              </div>
              )))}
        </div>
      </div>
      <Footer text={`Copirigth © my website 2022`}/>
    </div>
  );
};

export default Pagina;
