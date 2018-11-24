---
id: changing-pages
---
<h1>Changing Pages</h1>
<h2>1. Hide all the inactive pages</h2>
<p>
  The <code>:target</code> pseudo-class matches the element whose <code>id</code> is the same as the current url hash
  <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/CSS/:target'>(MDN docs)</a>. So:
<pre>
.page:not(:target) {
display: none;
}</pre>
hides all the <code>.page</code> elements except the active one.
</p>

<h2>2. Activate a page</h2>
<p>
  Change the url hash with an anchor tag <code>&lt;a href='#page-1'&gt;Go to Page 1&lt;/a&gt;</code>
  so that <code>#page-1</code> is matched by the <code>:target</code> selector and is no longer hidden.
</p>

<h1>Showing a Home Page</h1>
<p>When you first visit a site, there is no url hash -- no target page, so we'll need more complicated rules for showing/hiding the home page</p>
<h2>1. Order your html elements properly</h2>
<p>In your html, make the home page the last of all the pages -- you'll see why in the next step</p>
<pre>
&lt;body&gt;
&lt;div class='page' id='page-1'   &gt;Page 1&lt;/div&gt;
&lt;div class='page' id='page-2'   &gt;Page 2&lt;/div&gt;
&lt;div              id='home-page'&gt;Home  &lt;/div&gt;
&lt;/body&gt;</pre>

<h2>2. Hide the home page when any other page is active</h2>
<p>
  In your CSS, hide the home page if it is preceeded by any active pages using the general sibling selector <code>~</code>
  <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator'>(MDN docs)</a>
</p>
<pre>
.page:target ~ #home-page {
display: none;
}
</pre>
<p>So the home page is visible until one of the other pages is activated</p>
