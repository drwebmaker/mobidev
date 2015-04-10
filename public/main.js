var propertiesObject = {
  country: 'uk',
  pretty: '1',
  action: 'search_listings',
  encoding:'json',
  listing_type:'buy',
  page: '1',
  place_name:'leeds'
};

function getData(params) {
  return $.getJSON('/api', params);
};

getData(propertiesObject).then( function(response) {
  for(var i = 0; i <= response.response.listings.length; i++) {
    console.log(response.response.listings[i].thumb_url);
  }
  console.log(response.response.listings);
});