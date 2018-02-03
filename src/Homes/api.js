const normalizeData = home => ({
  id: home.id,
  title: home.name,
  image: home.images[0].picture,
  price: home.price,
  kind: home.kind === 'entire_home' ? 'Entire house' : 'Private room',
  beds: home.bedsCount,
  reviews: home.reviewsCount,
  isSuperhost: home.isSuperhost,
  rating: home.rating,
  lat: home.lat,
  lng: home.lng,
});

export default function retrieveData() {
  console.log('sa');
  return fetch('https://airbnb-demo-api.now.sh/v1/homes')
    .then(res => res.json())
    .then(res => res.items.map(normalizeData));
}
