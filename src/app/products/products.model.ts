export class Products {
  public productId: number;
  public name: string;
  public displayName: string;
  public brand: string;
  public description: string;
  public imagePath: string;
  public productUses: string;
  public sizes: Array<string>;
  public mrp: number;
  public discountInRs: number;
  public discountInPercent: number;
  public finalPrice: number;
  public tags: Array<string>
  // Array<string>

  //Here a constructor shoud only be used to (instanciate with the new key word or generate) a new Product if needed in the code at any point of time.
  //But we do not need it because the end user should never be able to create a new product on our website.
  // constructor(name: string, desc: string, imagePath: string) {
  //   //Assigning the above properties to the newly created product can be done like shown below
  //   this.name = name;
  //   this.description = desc;
  //   this.imagePath = imagePath;
  // }
}