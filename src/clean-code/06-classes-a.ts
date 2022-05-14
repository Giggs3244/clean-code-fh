(() => {
  type Gender = "M" | "F";

  /* Forma antigua de definir una clase en typescript */
  class oldFormDefineClassPerson {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor(name: string, gender: Gender, birthdate: Date) {
      this.name = name;
      this.birthdate = birthdate;
      this.gender = gender;
    }
  }

  /* Forma corta de definir una clase en typescript */
  class Person {
    constructor(
      protected name: string,
      public gender: Gender,
      private birthdate: Date
    ) {}
  }
})();
