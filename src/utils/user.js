import ShortUniqueId from "short-unique-id";

const uid = new ShortUniqueId();

class User {
  constructor(firstName, lastName) {
    this.id = uid.rnd(10);
    this.firstName = firstName;
    this.lastName = lastName;
    this.totalAmount = 0;
  }
}

export default User;
