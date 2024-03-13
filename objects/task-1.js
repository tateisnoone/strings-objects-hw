// Create object `person` with only one property `salary`. During reading this property, need to return string with text. If more than 20 days are left until the end of the month, the string `good salary` is returned, and if not - the ` bad salary`.

// Example:

// ```javascript
// person.salary;
// ```

let person = {
  _salary: 1000,
  get salary() {
    let currentDate = new Date();
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    let leftDays = lastDayOfMonth.getDate() - currentDate.getDate();
    if (leftDays > 20) {
      return "good salary";
    } else return "bad salary";
  },
};
console.log(person.salary);
