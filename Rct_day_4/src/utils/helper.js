export const handleSearch = (restaurantsData, text, handleClick) => {
  const filterData = restaurantsData?.filter((restaurant) => {
    return restaurant?.data?.name?.toLowerCase().includes(text?.toLowerCase());
  });
  handleClick(filterData);
};
