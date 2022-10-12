// ======== String Constants =========
const ACTION_CATEGORY_EXPAND =
  "cake-online-store/NavigationFeature/ACTION_CATEGORY_EXPAND";
const ACTION_VIEW_PAGE_CATEGORIALLY =
  "cake-online-store/NavigationFeature/ACTION_VIEW_PAGE_CATEGORIALLY";
const ACTION_VIEW_PRODUCT_PAGE =
  "cake-online-store/NavigationFeature/ACTION_VIEW_PRODUCT_PAGE";
const RESET_ACTION_VIEW_PRODUCT_PAGE =
  "cake-online-store/NavigationFeature/RESET_ACTION_VIEW_PRODUCT_PAGE";
const RESET_EXPAND = "cake-online-store/NavigationFeature/ACTION_RESET_EXPAND";


// ============= Initial State ==========
const InitialState = {
  categoryExpanded: false,
  viewPageCategorially: false,
  pageCategorialDetails: {
    pageData: null,
    pageActive: null,
  },
  viewProductPage: false,
  productPageDetails: {
    pageData: null,
  },
};

// ========== The Reducer ======== which is default export ====
const pagesNavReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTION_CATEGORY_EXPAND:
      return { ...state, categoryExpanded: true };

    case ACTION_VIEW_PAGE_CATEGORIALLY:
      return {
        ...state,
        viewPageCategorially: true,
        pageCategorialDetails: {
          pageData: action.data,
          pageActive: action.active,
        },
      };

    case ACTION_VIEW_PRODUCT_PAGE:
      return {
        ...state,
        viewProductPage: true,
        productPageDetails: {
            pageData: action.data,
        },
      };

    case RESET_ACTION_VIEW_PRODUCT_PAGE:
      return { 
        ...state, 
        viewProductPage: false,
        productPageDetail: {
            pageData: null,
        },
      };

    case RESET_EXPAND:
      return {
        ...state,
        categoryExpanded: false,
        viewPageCategorially: false,
        pageCategorialDetails: {
          pageData: null,
          pageActive: null,
        },
        viewProductPage: false,
        productPageDetails: {
            pageData: null,
        },
      };

    default:
      return state;
  }
};

export default pagesNavReducer;

// ==================== The Action Creators ===================
export const actionCategoryExpand = () => {
  return {
    type: ACTION_CATEGORY_EXPAND,
  };
};

export const actionViewPageCategorially = (firstArg, secondArg) => {
  return {
    type: ACTION_VIEW_PAGE_CATEGORIALLY,
    data: firstArg,
    active: secondArg,
  };
};

export const actionViewProductPage = (onlyArg) => {
  return {
    type: ACTION_VIEW_PRODUCT_PAGE,
    data: onlyArg,
  };
};

export const actionResetViewProductPage = () => {
  return {
    type: RESET_ACTION_VIEW_PRODUCT_PAGE,
  };
};

export const actionResetAllExpand = () => {
  return {
    type: RESET_EXPAND,
  };
};
