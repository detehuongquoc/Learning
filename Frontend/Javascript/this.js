// trỏ về đối tượng mà nó thuộc về
this.name = "dieu";
const SamsungNote10 = {
  //thuộc tính - property
  name: "Samsung Galaxy note 10",
  color: "black",
  weight: "167g",
  //phương thức - method
  takePhoto() {
    console.log(`take photo with ${this.name}`);
  },

  camera: {
    name: "camera of SamsungNote 10",
    takeVideo() {
      console.log(`take video with ${this.name}`);
    },
  },
  test() {
    return this;
  },
  test1() {
    test();
  },
};

const fun = SamsungNote10.takePhoto;
console.log(fun, "test");
//doi voi global thì this sẽ trỏ tới window, nhưng trong strict mode thì sẽ không được
//arrow funtion sẽ không có context, không có this nên sẽ nhảy ra và lấy thằng cha
