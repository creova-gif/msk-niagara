const e=`
*[_type == "timelineEvent"] | order(dateValue asc) {
  _id,
  title,
  description,
  dateValue,
  time,
  location,
  locationUrl,
  registration,
  registrationUrl,
  isFeatured
}`;export{e as t};
