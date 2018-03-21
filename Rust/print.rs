fn main() {
  println!("{} days", 31); // 31 days
  println!("{0}, this is {1}, {1}, this is {0}", "Alice", "Bob"); // Alice, this is Bob, Bob, this is Alice
  println!("{subject} {verb} {object}",
          object = "the lazy dog",
          subject = "the quick brown fox",
          verb = "jumps over"); // the quick brown fox jumps over lazy dog
  println!("{} of {:b} people know binary, the other half doesn't", 1, 2); // 1 of 2 people know binary, the other half doesn't
  println!("{number:>width$}", number=1, width=6); //      1 <= 공백을 넣을 수 있다!
  println!("{number:>0width$}", number=1, width=6); // 000001
  println!("My name is {0}, {1} {0}", "Bond", "James"); // My name is Bond, James Bond <= 넘 신기..
}