import ShortUniqueId from "short-unique-id";

const uid = new ShortUniqueId();

class Expense {
  constructor(userId, category, description, amount) {
    this.id = uid.rnd(10);
    this.userId = userId;
    this.category = category;
    this.description = description;
    this.amount = amount;
  }
}

export default Expense;
