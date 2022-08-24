import React from 'react';
import CategoryList from './CategoryList';
import { BodyDiv } from '../Styles/Body.styles';
import PopularList from './PopularList';
import TopDealsList from './TopDealsList.jsx';









// ==================THE FUNCTIONAL COMPONENT ===============
function Body(props) {



   // ==========Props Object Destructuring =========
  const expansionObj = props.expansionObj;
  console.log(expansionObj);

  // ====== props actions destructuring ======
  const AllActions = props.expandFunctions


  // ========== CONDITIONAL RENDERING =============
  if(expansionObj.categoryExpanded){

    return(
      <BodyDiv isExpanded = {expansionObj}>
        <CategoryList/>
      </BodyDiv>
    )

  } else if(expansionObj.popularExpanded){

    return ( 
      <BodyDiv isExpanded = {expansionObj}>
        <PopularList expandPopular ={expansionObj.popularExpanded}/>
      </BodyDiv>
    )

  } else if (expansionObj.topDealsExpanded){

    return (
      <BodyDiv isExpanded = {expansionObj}>
        <TopDealsList expandTopDeals ={expansionObj.topDealsExpanded}  />
      </BodyDiv>
    )

  } else{

    return(
      <BodyDiv isExpanded = {expansionObj}>   
        <CategoryList />
        <PopularList expandPopular ={expansionObj.popularExpanded} expandFunction ={AllActions.forPopular} viewProduct ={AllActions.forViewProductPage}/>
        <TopDealsList expandTopDeals ={expansionObj.topDealsExpanded} expandFunction ={AllActions.forTopDeals} viewProduct ={AllActions.forViewProductPage}/>
      </BodyDiv>
    )

  }

};

export default Body;