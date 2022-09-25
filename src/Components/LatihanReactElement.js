import React from "react";

// React Element
const heading = React.createElement("h1", null, "Biodata Perusahaan");
const listItem1 = React.createElement("li", null, "Nama: Dicoding Indonesia");
const listItem2 = React.createElement("li", null, "Bidang: Education");
const listItem3 = React.createElement("li", null, "Tagline: Decode Ideas, Discover Potential.");
const unorderedList = React.createElement("ul", null, [listItem1, listItem2, listItem3]);
const wrapper = React.createElement("div", {className:"content-wrapper"}, [heading, unorderedList]);

export default wrapper;