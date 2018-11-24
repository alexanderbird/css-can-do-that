const marked = require('marked');
const renderer = new marked.Renderer();

// Adapted from https://stackoverflow.com/a/23834738/3012550
const htmlEncode = text => text.replace(/[\u00A0-\u9999<>\&]/gim, char => '&#' + char.charCodeAt(0) + ';');

renderer.code = text => `
<pre>
${htmlEncode(text)}
</pre>
`

renderer.heading = (text, level) => `<h${level}>${text}</h${level}>`

module.exports = renderer;
