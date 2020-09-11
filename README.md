### EVD-components/react-lib
React components for faster development. 
Simple themes with unique colors and styles.

## Installation
npm install @evd-components/react-lib <br />
or <br />
yarn add @evd-components/react-lib <br />

## Usage of functions

```jsx
  import { removeAccents, dataFormat, isExist } from '@evd-components/react-lib';

  const accent = 'My name is Ági';
  const upper  = 'hi';
  const name   = 'john doe';
  const price  = 1200;

  dataFormat('priceFormat', price); //returns 1 200 Ft
  dataFormat('uppercaseFirst', upper); //returns 'Hi'
  dataFormat('name', name); //returns 'John Doe'

  //isExist function checks if variable has a valid content such as non empty array, non empty object etc...
  isExist(accent); //returns true
  isExist(price); //returns true
  isExist(null); //returns false
  isExist(undefined); //returns false
  isExist(' '); //returns false

  removeAccents(str); //output 'My name is Agi'

```

## Usage of components
Some example how to use the components:.

### Input

```jsx
import { Input } from '@evd-components/react-lib';


<Input 
  value="value string"
  placeholder="placeholder string"
  onChange={() => alert('input changed')}
  activeColor="#333"
/>
```

### Dropdown
```jsx
import { Dropdown } from '@evd-components/react-lib';


<Dropdown
  data={dataArray} /** @param {Array} */
  placeholder="placeholder string"
  keyExtractor={(item): string => item.id}
  labelExtractor={(item): string => item.name}
  onChange={(): void => alert('input changed')}
  activeColor="#333"
/>
```

### SearchableDropdown
```jsx
import { SearchableDropdown } from '@evd-components/react-lib';


<SearchableDropdown
  data={cities} /** @param {Array} */
  placeholder="Cities"
  labelExtractor={(item): string => item.city}
  keyExtractor={(item): string => item.id}
  onChange={(selected): void => console.log('SearchableDrodown value changed')}
  activeColor="#333"
/>
```

### Button
```jsx
import { Button } from '@evd-components/react-lib';

<Button
  title="Order"
  className="primary"
  onClick={(): void => console.log('Button clicked!')}
  type="square"
  position="center"
  style={{ backgroundColor: "#fff", color: "#333", border: "1px solid #fff" }}
/>
```

### Message
```jsx
import { Message } from '@evd-components/react-lib';


<Message
  message="Ooops, something went wrong!"
  duration={3000}
  type="success"
/>
```
