1.<b>Implemented Feature</b><br>
The project presents a grid of products(music CDs) that has the following feature:
<ul>
  <li>Header with a navigation menu - shows the logo. The menu has several categories for different types of music CDs.</li>
  <li>Category description - the category name with a short description.</li>
  <li>Sorting dropdown - allows the products to be sorted based on a certain listing order.</li>
  <li>Product counter - shows the number of currently shown product and the max number of products. Also has a visual representation of the amount of shown products.</li>
  <li>Filter - additional menu that contains multiple fields that allow the products to be filtered based on the options selected.</li>
  <li>Product grid - shows the products in a grid.</li>
  <li>Load more button - a button bellow the grid that loads the next batch of items.</li>
  <li>Footer - section at the bottom of the page with info about the company.</li>
</ul>
<br>
2. <b>Used Technologies</b><br>
  The data is fetched from the theaudiodb API. The script for the fetching can be found under /data/get-data.js.<br>
  For the front-end I used JavaScript, React.js, CSS and HTML. The React scripts are bundled with Webpack.<br>
<br>
3. <b>Solution Achievement</b><br>
During development I used the following techniques:
<ul>
  <li>Mobile-first development - since a lot of the online shopping is done on the go on mobile devices, it was importnat to focus on the mobile view of the page. It also has the simpler design compared to the desktop version so this method allowed me to build from the bottom up.</li>
  <li>BEM CSS (Block-Element-Modifier) - developing with React requires to think in components, so BEM fits into this ideology. It also makes sure that the global CSS namespace won't be polluted with conflicting decalarations since each element and their subelements have an explicit naming convention that is used when applying CSS.</li>
  <li>CSS Modules - the styling of each React components is scoped to that exact component by importing their corresponding CSS files inside the component script. This allows for better structuring of the code and further prevents declaration conflicts.</li>
  <li>Bringing state down - I tried to keep state as low in the React component tree to prevent unnecessary rerenders of components. For example I used refs when implementing the clear all filter button to keep the checked checkboxes state inside their components. The filter data is placed inside the filter to prevent the whole grid from rerendering whit each checkbox click.</li>
</ul>
<br>
4. <b>Challenges and Future Improvements</b><br>
What follows are a few subtasks that I either haven't been able to finish or finished but not before breaking a sweat:
<ul>
  <li>Description ellipsis - the current implementation of the ellipsis in the product description needs futher work. I wanted to show the same amount of rows in the description and add an ellipsis in the end to show ther is more text. A future plan idea is to use useLayoutEffect to try truncating the text until I reach the desirev effect. However, that may worsen the performance.</li>
  <li>Keeping state in the checkbox component - I started with the idea of somehow keeping the state of the checkboxes inside of the component and collecting them on submit with FormData. However, due to the clear buttons I added on each filter section, I had to move state up twice until it ended in the filter.</li>
  <li>The design - I'd like to think that I have an eye for aesthetics. However, I don't have a UI designer training. Therefore, I know when something is ugly but I don't always know how to fix it.</li>
</ul>
What I would have added, if I had more time:
<ul>
  <li>Loader - right know when new data is loaded, there is a flicker. I would add a loader that hides the data until it's fully loaded.</li>
  <li>More custom filtering options - for example the price slider could have two handler - one for the min and one for the max price. I'd also like to add a search box in the checkbox section for quicker finidng of the desired option.</li>
</ul>

