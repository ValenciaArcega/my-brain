# Date Picker

```bash
npm i react-datepicker
```

### ✅ Real example

```js
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
```

```js
const [dates, setDates] = useState({
  verificacion: null,
  tenencia: null,
  mantenimiento: null,
  seguro: null,
  licencia: null,
});

const changeDate = (name, value) => setDates({ ...dates, [name]: value });
```

```js
<DatePicker
  dateFormat="dd/MM/yyyy"
  showWeekNumbers
  className="formDates-input"
  placeholderText="Selecciona una fecha"
  selected={dates.tenencia}
  onChange={(d) => changeDate("tenencia", d)}
/>
```
