import React from 'react';

const element = React.createElement('h1', {id:"myTitle", className:"content-title"}, "Hello Sir!")

const heading = React.createElement("h1", null, "React");
const strong = React.createElement("strong", null, "best tool");
const paragraph = React.createElement("p", null, ["The ", strong, " for building UI"]);
const divContainer = React.createElement("div", {className : 'container'}, [heading, paragraph]);   

export default divContainer;