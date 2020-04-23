import React, {Component} from 'react';
import SnacksPage from "./SnacksPage"



class App extends Component {

  state = {
    snacks: [
      {
      id:1,
      brand: "CheeseIt",
      flavor: "Classic",
      rating: "better than meh",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.costco-static.com%2FImageDelivery%2FimageService%3FprofileId%3D12026540%26itemId%3D45221-847%26recipeName%3D680&f=1&nofb=1"
      },  
      {
      id:2,
      brand: "Oreo",
      flavor: "Classic",
      rating: "s-tier",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fc.shld.net%2Frpx%2Fi%2Fs%2Fi%2Fspin%2F10127449%2Fprod_ec_1966516502%3F%3Fhei%3D64%26wid%3D64%26qlt%3D50&f=1&nofb=1"
      },  
      {
      id:3,
      brand: "Utz chips",
      flavor: "Classic",
      rating: "trash-tier",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2804%2F5352%2Fproducts%2F1d03055b-46a3-4265-b2f7-adbce99404e0_1024x1024.png%3Fv%3D1537461045&f=1&nofb=1"
      }
  ]}

  // showSnackCards = () => {
  //   return this.state.snacks.map(card => {
  //     return <SnackCard 
  //       key={card.id}
  //       snackCard={card}
  //       />
  //   })
  // }

  render() {

    return (
      <div className="snack-page">
        <SnacksPage
          snacks={this.state.snacks}
        />
      </div>
    );
  }
}

export default App;
