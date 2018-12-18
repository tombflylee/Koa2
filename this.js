const luke = {
  id : 2,
  sayId: function () {
    console.log(this);// this指向luke
    setTimeout(function () {
      console.log(this.id)// this指向window
    }, 1000)
  },
  sayThatId: function () {
    let that = this;
    setTimeout(function () {
      console.log(that.id)// 变量的作用域在定义时确定
    }, 1000)
  },
  sayArrowId: function () {
    setTimeout(() => {// this会向上层作用域链中寻找
      console.log(this.id)
    }, 1000)
  },
  sayTwoArrowId: () => {
    setTimeout(() => {
      console.log(this.id)
    }, 1000)
  }
}

luke.sayId();
luke.sayThatId();
luke.sayArrowId();
luke.sayTwoArrowId();