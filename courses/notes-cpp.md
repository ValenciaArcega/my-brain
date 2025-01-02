# C++ lang

To print our first message we must to import the file for input/output stream and declare the main function

```cpp
#include <iostream>

int main () {
	/**
	 * Since iostream its imported we can use
	 * std (standard lib) and their tools like
	 * cout (character output) to print smh to the
	 * console.
	 */
	std::cout << "This is rocket from C++" << std::endl;
	std::cout << "Today's 1st January" << '\n';

	return 0;
}
```

To improve performance insted of use `std::endl` we can just user `\n`.

## Variables & Basic data types

- `int` - Integer numbers (Note. If we assign a variable int a value like 12.5 will truncated the decimal part)
- `double` - Decimal numbers
- `char` - One single character
- `bool` - State toggle
- `string` - Objects that represents a sequence of characters. As an object we must to access from the std lib.

```cpp
std::string userName = "Maysan";
```

### Constants

Make _read only_ variables and secure data.

```cpp
// A good convention is to write in Uppercase
const double PI_VALUE = 3.14159;
```

Complete example

```cpp
const double PI_VALUE = 3.14159;
double radius = 10;
double circumference = 2 * PI_VALUE * radius;

std::cout << "The circumference is:: " << circumference;
```

## Namespaces

Entities can have same names as long as they are in different namespaces.

`::` **Scope resolution operator** to access entities from other namespaces.

> ⚠️ Avoid as possible ~~`using namespace std`~~ ;

```cpp
using std::cout;
using std::string;

namespace first {
	const string a = "Maysan";
}

namespace second {
	const string a = "Al";
}

int main () {
	using namespace first;
	const string a = "Valencia";

	cout << a;
	return 0;
}
```
