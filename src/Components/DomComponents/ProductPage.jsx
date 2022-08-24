import React, { useState } from 'react';
import { BuyButton, DetailsDiv, FavouriteButton, FlexDivRow, ImageDiv, NumOfRating, PriceDiv, ProductContainer, ProductFooter, ProductName, RatingButton } from '../Styles/ProductPage.styles';
import {MdOutlineAddShoppingCart} from 'react-icons/md';
import {BsStarFill, BsHeart, BsHeartFill} from 'react-icons/bs';
// import {FaHeart} from 'react-icons/fa'





function ProductPage(props) {

  // ======= UseStates =========
  const [Liked, setLiked] = useState(false);

  //======= Props Accessing and Destructring =======
  const PageData = props.dataForProductPage;
  console.log(PageData);
  // console.log(PageData.ImgSrc);

  // ======= Event Handlers =====
  const LikedHandler = (e) => {
    setLiked(!Liked)
    console.log('Like!!!');
  };




  // ============== JSX RENDERING ===================
  return (
    <ProductContainer isFromHomepage ={props.isFromHomepage} >
        <ImageDiv>
            <img src={PageData.ImgSrc} alt="Product Img" />
        </ImageDiv>

        <DetailsDiv>

          <section>
            <ProductName>
              <h4> the product name of the product which is same name of the particular product </h4>
              <h6>category of the product</h6>
            </ProductName>

            <FavouriteButton liked= {Liked} onClick = {LikedHandler}>
              { Liked ? <BsHeartFill/> : <BsHeart/> }
            </FavouriteButton>
          </section>

          <PriceDiv>
            <h4>NGN 3,000</h4>
            <h5>NGN 4,500</h5>
            <h6>-40%</h6>
          </PriceDiv>

          <FlexDivRow>

            <RatingButton>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
            </RatingButton>

            <NumOfRating> | 19 verified ratings </NumOfRating> 
          </FlexDivRow>

        </DetailsDiv>

        <ProductFooter>
            <BuyButton> 
              <MdOutlineAddShoppingCart/> 
              <h3>ADD TO CART</h3>
            </BuyButton>
        </ProductFooter>
    </ProductContainer>
  )
}

export default ProductPage