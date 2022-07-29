export const getDataProducts = (state) => state.data.products;
export const getDataCategories = (state) => state.data.categories;
export const getDataSliderItems = (state) => state.data.sliderItems;

export const getSingleCategory = (state) => state.data.singleCategory;
export const getColorValue = (state) => state.data.colorFilter;
export const getSizeValue = (state) => state.data.sizeFilter;
export const getSortValue = (state) => state.data.sort;

export const getSearchValue = (state) => state.data.searchValue.toLowerCase().trim();

export const getToggleModalDesc = (state) => state.product.modal;

export const getSearchProducts = (state) => {
  let searchValue = getSearchValue(state);
  let categoryProducts = getCategoryProducts(state);

  return categoryProducts.filter((product) => {
    let normilizedTitle = product.title.toLowerCase();
    return normilizedTitle.includes(searchValue);
  });
};

export const getCategoryProducts = (state) => {
  let products = getDataProducts(state);
  let singleCategory = getSingleCategory(state);

  if (!singleCategory) {
    return products;
  }

  return products.filter((item) => item.category.toLowerCase() === singleCategory);
};

export const getSortProducts = (state) => {
  let categoryProducts = getCategoryProducts(state);
  let sortValue = getSortValue(state);

  if (sortValue === "ascending") {
    return [...categoryProducts].sort((a, b) => a.price - b.price);
  }

  if (sortValue === "descending") {
    return [...categoryProducts].sort((a, b) => b.price - a.price);
  }

  return categoryProducts.filter((product) => product.newest);
};

export const getFilteredItems = (state) => {
  let sortProducts = getSortProducts(state);
  let color = getColorValue(state);
  let size = getSizeValue(state);

  if (color === "color" && size === "size") {
    return sortProducts;
  }

  if (color !== "color" && size !== "size") {
    return sortProducts.filter(
      (product) => product.color.find((item) => item === color) && product.size.find((item) => item === size)
    );
  }

  if (color !== "color") {
    return sortProducts.filter((product) => product.color.find((item) => item === color));
  }

  if (size !== "size") {
    return sortProducts.filter((product) => product.size.find((item) => item === size));
  }
};
