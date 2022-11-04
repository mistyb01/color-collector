static html/css set up

- [x] created react
- [x] overall css structure
- [x] individual palette css
- [x] add palette popup
- [ ] add tags popup

localStorage

- [x] save new palettes to a local storage value
- [x] display stored palettes

adding new palettes

- [x] show the palette being made on the form
- [x] a separate text field for each color
- [ ] option to add more color fields
- [ ] field for a list of tags
- [ ] color picker

more ux stuff

- [ ] display a color's hex on hover
- [x] able to delete a palette
- [ ] hovering over a palette shows an x to delete it
- [ ] able to edit a palette (optional?)

adding complexity

- [ ] display a color name, that is approximated from the rgb
- [ ] display a colors rgb, hsl, and hex codes when you click on a square
- [ ] feature to create palettes from an uploaded image
- [ ] generate complimentary colors for a given color

helpful links

- https://dev.to/producthackers/creating-a-color-palette-with-javascript-44ip
- https://blog.bitsrc.io/5-methods-to-persisting-state-between-page-reloads-in-react-8fc9abd3fa2f
- https://www.syncfusion.com/javascript-ui-controls/js-color-picker

things to review

- css units
- how to organize react files
- accessibility best practices

approach to building the colorlist with multiple fields
each field adds to the same comma-separated string (a state variable).
then that string is converted into an array when the form is submitted with split().
