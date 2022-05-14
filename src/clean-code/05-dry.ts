type Size = "" | "S" | "M" | "L";

const validationForType: Record<string, Function> = {
  number: (value: number) => value > 0,
  string: (value: string) => { console.log('value', value); return value !== "" },
};

const checkType = (value: string | number) => {
  const typeValue = typeof value;
  console.log(
    "🚀 ~ file: 05-dry.ts ~ line 10 ~ checkType ~ typeValue",
    typeValue
  );

  const result = validationForType[typeValue](value)
  console.log("🚀 ~ file: 05-dry.ts ~ line 16 ~ checkType ~ result", result)
  return result;
};

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  checkIsValidProduct() {
    return Object.values(this).every((field) => {
      console.log(
        "🚀 ~ file: 05-dry.ts ~ line 19 ~ Product ~ returnObject.keys ~ field",
        field
      );

      const result = checkType(field);
      console.log("🚀 ~ file: 05-dry.ts ~ line 33 ~ Product ~ returnObject.keys ~ result", result)
      
      return result;
    });
  }

  toString() {

    if (!this.checkIsValidProduct()) {
        return "The product is not valid."
    }

    return `${this.name}`;
  }
}

(() => {
  const bluePrints = new Product("Blue large Pants");
  console.log(
    "🚀 ~ file: 05-dry.ts ~ line 9 ~ bluePrints",
    bluePrints.toString()
  );
})();
