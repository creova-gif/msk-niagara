const e=`
*[_type == "researchProject"] | order(featured desc, title.en asc) {
  _id,
  title,
  tldr,
  "hub": hub->{_id, name, "slug": slug.current, color},
  status,
  icon,
  color,
  description,
  participants,
  timeline,
  contact,
  contactEmail,
  externalLink,
  location,
  keyFocus,
  featured
}`;export{e as r};
