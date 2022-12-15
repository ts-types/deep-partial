# deep-partial

This package base on TypeScript's built-in `Partial<T>` type. But allow allowing deep
partials to be created.

The current behavior of TypeScript's `Partial<T>` type means that nested objects
will not have the optional status applied to their fields. For example:

```typescript
type Employee = {
  name: string;
  age: number;
  address: {
    number: number;
    street: string;
  };
};

const myHouseNumber: Partial<Employee> = { address: { number: 52 } };

// The above is invalid, and results in error: Property 'street' is missing in
// type '{ number: number; }' but required in type '{ number: number; street: string; }'.
```

Using `DeepPartial<T>` instead makes this assignment possible:

```typescript
const myHouseNumber: DeepPartial<Employee> = { address: { number: 52 } };
```

## Installation

Just a quick `npm install --save-dev @fs-types/deep-partial`, or the Yarn
equivalent.
