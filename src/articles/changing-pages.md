---
id: changing-pages
---
# Changing Pages
## 1. Hide all the inactive pages
The `:target` pseudo-class matches the element whose `id` is the same as the current url hash
<a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/CSS/:target'>(MDN docs)</a>. So:

    .page:not(:target) {
      display: none;
    }


hides all the `.page` elements except the active one.

## 2. Activate a page
Change the url hash with an anchor tag `<a href='#page-1'>Go to Page 1</a>`
so that `#page-1` is matched by the `:target` selector and is no longer hidden.

# Showing a Home Page
When you first visit a site, there is no url hash -- no target page, so we'll need more complicated rules for showing/hiding the home page
## 1. Order your html elements properly
In your html, make the home page the last of all the pages -- you'll see why in the next step

    <body>
      <div class='page' id='page-1'   >Page 1</div>
      <div class='page' id='page-2'   >Page 2</div>
      <div              id='home-page'>Home  </div>
    </body>

## 2. Hide the home page when any other page is active
In your CSS, hide the home page if it is preceeded by any active pages using the general sibling selector `~`
<a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator'>(MDN docs)</a>

```
.page:target ~ #home-page {
  display: none;
}
```

So the home page is visible until one of the other pages is activated
