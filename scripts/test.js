//**************************************************
//***************** TEST.01 ************************
//**************************************************
// var list = document.querySelector(".output ul");
// list.innerHTML = "";
// var greetings = ["Happy Birthday!", "Merry Christmas my love", "A happy Christmas to all the family", "You're all I want for Christmas", "Get well soon"];

// for (var i = 0; i < greetings.length; i++) {
//   var input = greetings[i];
//   if (greetings[i]) {
//     if (greetings[i].toLowerCase().indexOf("christmas") !== -1) {
//       var result = input;
//       var listItem = document.createElement("li");
//       listItem.textContent = result;
//       list.appendChild(listItem);
//     }
//   }
// }

//**************************************************
//***************** TEST.02 ************************
//**************************************************
// let list = document.querySelector(".output ul");
// list.innerHTML = "";
// let stations = ["MAN675847583748sjt567654;Manchester Piccadilly", "GNF576746573fhdg4737dh4;Greenfield", "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street", "SYB4f65hf75f736463;Stalybridge", "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield"];

// for (var i = 0; i < stations.length; i++) {
//   let input = stations[i];
//   let result = input.slice(0,3) + ": " + input.split(";")[1];

//   let listItem = document.createElement("li");

//   listItem.textContent = result;
//   list.appendChild(listItem);
// }

//**************************************************
//***************** TEST.03 ************************
//**************************************************
// let list = document.querySelector(".output ul");
// let totalBox = document.querySelector(".output p");
// let total = 0;
// list.innerHTML = "";
// totalBox.textContent = "";
// // number 1
// let tempStr = "Underpants:6.99,Socks:5.99,T-shirt:14.99,Trousers:31.99,Shoes:23.99";
// let products = tempStr.split(",");

// for (let product of products) {
//   // number 2
//   let productArr = product.split(':');
//   // number 3
//   let productName = productArr[0];
//   let productPrice = Number(productArr[1]);
//   // number 4
//   total += productPrice;
//   // number 5
//   itemText = productName + "- $" + productPrice;
//   var listItem = document.createElement("li");
//   listItem.textContent = itemText;
//   list.appendChild(listItem);
// }

// totalBox.textContent = "Total: $" + total.toFixed(2);

//**************************************************
//***************** TEST.04 ************************
//**************************************************
// var list = document.querySelector('.output ul');
// var searchInput = document.querySelector('.output input');
// var searchBtn = document.querySelector('.output button');

// list.innerHTML = '';

// var myHistory = [];

// searchBtn.onclick = function() {
//   // 如果搜索框不为空，我们则将搜索词添加到开头
//   if (searchInput.value !== '') {
//     // number 1
//     myHistory.unshift(searchInput.value);
//     // 清空显示的搜索关键词列表，防止显示
//     // 每次输入搜索词都会重新生成显示的内容
//     list.innerHTML = '';

//     // 通过循环遍历，显示所有的搜索关键词
//     for (var i = 0; i < myHistory.length; i++) {
//       var itemText = myHistory[i];
//       var listItem = document.createElement('li');
//       listItem.textContent = itemText;
//       list.appendChild(listItem);
//     }

//     // 如果数组的长度大于 5，那么便移除旧的搜索关键词
//     if (myHistory.length >= 5) {
//       // number 2
//       let deleteItem = myHistory.pop();
//       alert(deleteItem + "已删除！");
//     }

//     // 清空并聚焦到搜索框，准备下一次的搜索
//     searchInput.value = '';
//     searchInput.focus();
//   }
// }