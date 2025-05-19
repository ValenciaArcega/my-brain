## React Data Table

Repository

https://github.com/jbetancur/react-data-table-component

Documentation

https://react-data-table-component.netlify.app/?path=/docs/getting-started-intro--docs

## Getting started by experience

Install the dependency

```bash
npm install react-data-table-component
```

Then import the component

```js
import DataTable from "react-data-table-component";
// data to poblate the grid
import { tecnologias } from "data.js";
```

`data.js`

```js
export const tecnologias = [
  {
    id: 1,
    name: "JavaScript",
    rate: 10,
  },
];
```

Define the columns that will be displayed on the grid

```js
const columns = [
  {
    name: "Tecnología",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Puntuación",
    selector: (row) => row.rate,
    sortable: true,
  },
];
```

### Set the component

```html
<DataTable className="{css.grid}" columns="{columns}" data="{tecnologias}"
```

Inside the components we can add different usefull props like

```xml
<DataTable
	className={css.grid}
	columns={columns}
	conditionalRowStyles={conditionalRowStyles}
	customStyles={customStyles}
	data={tecnologias}
	expandableRowsComponent={NestedComponent}	
	expandableIcon={IconEyes}
	expandableRows
	fixedHeader
	fixedHeaderScrollHeight="20rem"
	highlightOnHover
	pagination
	onRowClicked={grid_onRowClicked}
	paginationComponentOptions={{
		rowsPerPageText: 'Registros por página',
		rangeSeparatorText: 'de',
		selectAllRowsItem: true,
		selectAllRowsItemText: 'Mostrar todos los registros',
	}}
	pointerOnHover
	selectableRows
	selectableRowsSingle
/>
```
Some styles on the component 
```css
.grid {
	min-height: 39rem;
	max-width: 90%;
	/* border-radius: 8px 8px 0 0 !important; */
	border-radius: 8px !important;
	border: 2px solid rgba(232, 229, 229, 0.977);
	background: rebeccapurple !important;
	scrollbar-width: none;
}
```

## Nesting components or Detail row

The `NestedComponent` can render any html and with _destructuring_, data of the current row is easy available

```jsx
const NestedComponent = ({ data }) => (
  <h1>
    I am {data.name} and I got {data.rate}
  </h1>
);
```

## Events

The `grid_onRowClicked` is just like another normal event

```js
function grid_onRowClicked(e) {
  const { name } = e;
  console.log(name); // JavaScript
}
```

## Conditional styles

```js
const conditionalRowStyles = [
  {
    when: (row) => row.rate < 5,
    style: {
      backgroundColor: "#ffa7a5",
      color: "black",
      "&:hover": {
        cursor: "not-allowed",
      },
    },
  },
  {
    when: (row) => row.rate > 8,
    style: {
      backgroundColor: "green",
      color: "white",
    },
  },
];
```
