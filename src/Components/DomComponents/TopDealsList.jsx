import React from 'react';
import {ItalianCursine, Burger1, Cupcake, Topcake2, TopCake, Chicken, TopPizza, Burger2, BerryParfait, Chicken2, TopWedCake} from '../Images/Images';
import { TopDealsContainer } from '../Styles/TopDealsList.styles';
import PageCategorial from './PageCategorial';






const TopDealsArr = [
  {ImgSrc: ItalianCursine}, 
  {ImgSrc : Burger1}, 
  {ImgSrc : Cupcake}, 
  {ImgSrc : Topcake2},
  {ImgSrc : TopCake}, 
  {ImgSrc : Chicken}, 
  {ImgSrc : TopPizza},
  {ImgSrc : Burger2},
  {ImgSrc : BerryParfait},
  {ImgSrc : Chicken2},
  {ImgSrc : TopWedCake},
];




// ================THE FUNCTIONAL COMPONENT =============
function TopDealsList(props) {



// ==== All States========


// ======= Event Handlers =======
const handleShowAll = (e) => {
  props.expandFunction();
};

const ProductImgClickHandler = (eachItem) => {
  props.viewProduct(eachItem);
};





  // ========== CONDITIONAL RENDERING ===============
    if(props.expandTopDeals === true) {
        return <PageCategorial ArrofObj ={TopDealsArr}/>
    } else {
      return (
        <TopDealsContainer>
        <section>
            <span>Top Deals</span>
            <button onClick={handleShowAll}>Show all </button>
        </section>
      
        <ul>

          {
            TopDealsArr.map( (eachItem) => {
              return ( 
                <li key={eachItem.ImgSrc}>
                  <h5>-40%</h5>
                  <img src={eachItem.ImgSrc} onClick = {(e) => { ProductImgClickHandler(eachItem)}} alt="Cakes" />

                  <div>
                      <section>
                        <div>
                            <h4>product name</h4>
                            <h6>category</h6>
                        </div>
                      </section>

                    <section>
                      <div>
                        <h4>$33.00</h4>
                        <h5>$44.00</h5>
                      </div>
                    </section>

                  </div>
                </li>
            )
          })
        }
      </ul>
    </TopDealsContainer>

      )
      
    }

}

export default TopDealsList;