# Functions, Logic, and Refactoring

## 🧠 Approach to Flexible Functions with Parameters
When creating flexible functions, I focused on making each function reusable by relying on parameters instead of penciled in values. For example, in `formatFullName`, I used `firstName` and `lastName` as inputs so the function could handle any name combination.

I also added formatting logic (capitalizing the first letter) inside the function to ensure consistency regardless of how the input is provided.


## Challenges I Faced
One of the main challenges I faced was structuring conditional logic correctly so that all cases were handled without conflicts or unreachable code.

For example, in my `calculateTotalCost` function, I initially placed a `return` statement too early, which caused later conditions (like applying a discount) to never execute. This helped me realize how important the order of conditions and returns is.



## My Takeaways
- Functions become more powerful when they are flexible and reusable.
- Conditional logic must be carefully ordered to avoid logical/silent errors.
- Refactoring is essential for writing code that be scalable and more maintainable.
