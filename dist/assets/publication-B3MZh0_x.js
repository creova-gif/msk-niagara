const t=`
*[_type == "publication"] | order(year desc) {
  _id,
  title,
  type,
  authors,
  date,
  year,
  "hub": hub->{_id, name, "slug": slug.current},
  abstract,
  link,
  doi,
  color
}`;export{t as p};
