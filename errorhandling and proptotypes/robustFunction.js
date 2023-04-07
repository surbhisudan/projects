function getPerson(person) {
    try {
      if (!person || typeof person !== 'object' || !person.name || !person.age) {
        throw new Error('Invalid parameter type');
      }
      return `Name: ${person.name}, Age: ${person.age}`;
    } catch (err) {
      return err.message;
    }
  }
console.log(getPerson({name:"surbhi",age:20}));
console.log(getPerson({name:"surbhi"}))  