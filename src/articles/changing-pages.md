---
id: changing-pages
---
# Changing Pages

```
<div class='page' id='page-1'>
  Page 1 content
</div>
<div class='page' id='page-2'>
  Page 2 content
</div>
<div class='page' id='home'>
  Home page content
</div>
```

**Problem**: How do you store some state to indicate which page should be active? How do you link to one page in particular?

<div class='annotated-code'><div>
The `:target` pseudo-class matches the element whose `id` is the same as the current URL hash
<a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/CSS/:target'>(MDN docs)</a>.
(And you can change the URL hash with an anchor tag `<a href='#page-1'>Page 1</a>`

Hide all the `.page` elements except the active one.
</div>

```
.page:not(:target) {
  display: none;
}
```


</div>

**Problem**: How do you show a home page when there is no URL hash?

<div class='annotated-code'><div>
  Place the home page last among all the page elements. 

  In addition to hiding all pages that aren't `:target`ed, hide the home page if it is preceded by any page that is `:target`ed

  Use the general sibling selector `~` <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator'>(MDN docs)</a>


  Note that we also update the original `.page:not(:target)` to apply to pages except the home page -- we show the home page even when it's not targeted.
</div>

```
.page:not(#home-page):not(:target),
.page:target ~ #home-page {
  display: none;
}
```
</div>
