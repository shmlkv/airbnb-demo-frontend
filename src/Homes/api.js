const kinds = {
  entire_home: 'Entire house',
  private_room: 'Private room',
};

const normalizeData = home => ({
  id: home.id,
  title: home.name,
  image: home.images[0].picture,
  price: home.price,
  kind: kinds[home.kind],
  beds: home.bedsCount,
  reviews: home.reviewsCount,
  isSuperhost: home.isSuperhost,
  rating: home.rating,
  lat: home.lat,
  lng: home.lng,
});

export default function retrieveData() {
  return fetch('https://airbnb-demo-api.now.sh/v1/homes')
    .then(res => res.json())
    .then(res => res.items.map(normalizeData));
}
