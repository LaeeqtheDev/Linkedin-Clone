````markdown
# Feed Component Responsive CSS

This CSS styles the feed component you built with responsive input and options areas, avoiding scrollbars and adapting nicely on different screen sizes.

## Features

- `.feed` container with flexible width up to 700px and padding
- `.feed__inputContainer` with white background, rounded corners, and shadow
- `.feed__input` uses flex with wrapping to handle smaller screens
- Input field grows to fill available space with a minimum width
- `.feed__inputOptions` switch layout from row to column on small screens
- Media queries for tablet and mobile breakpoints to adjust spacing and layout

## How to use

Add these classes to your feed container and inner elements, matching the structure:

```jsx
<div className="feed">
  <div className="feed__inputContainer">
    <div className="feed__input">
      <input type="text" placeholder="Write a post..." />
    </div>
    <div className="feed__inputOptions">
      {/* buttons or options */}
    </div>
  </div>

  {/* posts mapped here */}
</div>
````

## Responsive breakpoints

* Up to 768px (tablet): smaller horizontal padding, options aligned center
* Up to 480px (mobile): input stacked vertically, input options stacked column-wise, reduced padding

## Author

Syed Laeeq Ahmed

```
```
