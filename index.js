function newTask(title, desc) {
  const task = {
    title,
    desc,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Get the poo out"); // task 0
const task2 = newTask("Do Laundry", "Sigh"); // task 1
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
