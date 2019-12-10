export const fetchImg = (query = '', pageNumder = 1) => {
  return fetch(
    `https://pixabay.com/api/?key=14303994-a532731a1c231e158fb1fa934&q=${query}&page=${pageNumder}`,
    { mode: 'cors' },
  )
    .then(res => res.json())
    .then(data => data.hits);
};
// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${pageNumder}&per_page=12&key=14303994-a532731a1c231e158fb1fa934
// `https://pixabay.com/api/?key=14303994-a532731a1c231e158fb1fa934&q=${query}`
