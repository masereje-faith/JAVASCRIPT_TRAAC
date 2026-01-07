# 📘 JavaScript Take‑Home Assignment  
## Arrow Functions, Destructuring & Array Methods

---

## 🎯 Objective

This assignment will test and strengthen your understanding of:

- Arrow functions (`=>`)
- Function return values
- Object destructuring
- Array methods:
  - `map()`
  - `filter()`
  - `find()`
- Writing **clean, readable JavaScript** (React‑ready)

By the end of this assignment, you should feel comfortable reading and writing **modern JavaScript**, just like what is used in React Native.

---

## 📂 Instructions

1. Create a file named:

```
week6_arrow_destructuring_array_methods.js
```

2. Write **all solutions inside this file**
3. Every task **must be written as an arrow function**
4. Use `console.log()` to show results
5. Do **NOT** use `for` loops unless explicitly told
6. Comment your code where necessary

---

# 🧪 Part 1 — Arrow Functions Check (Understanding Test)

### Task 1️⃣ — Convert to Arrow Functions

Convert the following functions into **arrow functions**:

```js
function greet(name) {
  return "Hello " + name;
}
```

```js
function add(a, b) {
  return a + b;
}
```

```js
function isAdult(age) {
  return age >= 18;
}
```

---

### Task 2️⃣ — Arrow Functions with Logic

Write arrow functions for the following:

1. `isEven(number)` → returns `true` if the number is even  
2. `passOrFail(score)` → returns `"Pass"` if score ≥ 50, otherwise `"Fail"`

---

# 🧩 Part 2 — Destructuring Objects

You are given the following object:

```js
const user = {
  name: "Anna",
  age: 22,
  isStudent: true
};
```

---

### Task 3️⃣ — Basic Destructuring

1. Destructure `name` and `age` from the object  
2. Print them using `console.log`

---

### Task 4️⃣ — Destructuring in Arrow Functions

Write an arrow function that:
- Accepts a **user object**
- Uses **destructuring in the function parameters**
- Returns a string like:

```
"Anna is 22 years old"
```

---

# 🔁 Part 3 — Array Methods (Core React Skill)

You are given the following array:

```js
const users = [
  { name: "Mark", age: 17, isStudent: true },
  { name: "Anna", age: 22, isStudent: false },
  { name: "John", age: 19, isStudent: true },
  { name: "Sarah", age: 16, isStudent: false },
  { name: "Paul", age: 25, isStudent: true }
];
```

---

### Task 5️⃣ — map()

Using `map()`:
- Create a new array that contains **only the names** of all users

---

### Task 6️⃣ — filter()

Using `filter()`:
- Create a new array containing **only users aged 18 and above**

---

### Task 7️⃣ — find()

Using `find()`:
- Find the user whose name is `"John"`

---

### Task 8️⃣ — Combine Methods

Using **both `filter()` and `map()`**:
- Create an array of names of users who are **adult students**

---

# 🧠 Part 4 — Real‑World Thinking

### Task 9️⃣ — Eligibility Checker

Write an arrow function:

```
checkEligibility(user)
```

Rules:
- A user is eligible if:
  - Age is **18 or above**
  - AND `isStudent` is `true`

Return:
- `"Eligible"` or `"Not eligible"`

Test the function with **each user** in the array.

---

## ⭐ Bonus Task (Optional but Encouraged)

### Task 🔟 — React‑Style Thinking

Write an arrow function:

```
UserLabel({ name, age })
```

That returns:

```
"Mark (20)"
```

👉 This mimics how React components receive props.

---

## ✅ Submission Checklist

Before submitting, confirm that:

✔ All functions are arrow functions  
✔ You used destructuring correctly  
✔ You used `map`, `filter`, and `find` properly  
✔ No unnecessary loops were used  
✔ Code runs without errors  
✔ Output is clear and readable  

---

## 🚀 Final Note

These skills are **directly used in React Native** for:
- Rendering lists
- Passing props
- Filtering data
- Building components

If this assignment feels challenging — that’s GOOD.  
You are officially transitioning into **React‑level JavaScript** 💪🔥