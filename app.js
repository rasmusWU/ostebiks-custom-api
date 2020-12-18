template = document.getElementById("template");
productList = document.querySelector(".productList")
product = document.querySelector(".productListing");

fetch("https://osteapi-rasmuswu.herokuapp.com/api/v1/cheeses")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data.results);

        data.results.forEach(function (result) {
            var clone = template.content.cloneNode(true);

            var pName = clone.querySelector(".productListing__name");
            var brand = clone.querySelector(".productListing__brand");
            var strength = clone.querySelector(".productListing__strength");
            var weight = clone.querySelector(".productListing__weight");
            var price = clone.querySelector(".productListing__price");


            pName.innerText = result.name;
            brand.innerText = result.brand;
            strength.innerText = result.strength;
            weight.innerText = result.weight;
            price.innerText = result.price.$numberDecimal;

            productList.appendChild(clone);
            console.log(result)
        });
    });