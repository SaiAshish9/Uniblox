const res = [];
const img = [];
document
  .querySelectorAll("source")
  .forEach((x) =>
    img.push(
      x.srcset
        .trim()
        .split("1.8x,\n")[0]
        .split(" ")[0]
        .replace("dpr_1.0", "dpr_2.0")
    )
  );

const title = [];
document
  .querySelectorAll(".product-brand")
  .forEach((x) => title.push(x.innerText));

const desc = [];
document
  .querySelectorAll(".product-product")
  .forEach((x) => desc.push(x.innerText));

const sizes = [];
document
  .querySelectorAll(".product-sizes")
  .forEach((x) => sizes.push(x.innerText.split("Sizes: ")[1]));

const discountedPrice = [];
document
  .querySelectorAll(".product-discountedPrice")
  .forEach((x) => discountedPrice.push(x.innerText));

const strikePrice = [];
document
  .querySelectorAll(".product-strike")
  .forEach((x) => strikePrice.push(x.innerText));

const discountedPer = [];
document
  .querySelectorAll(".product-discountPercentage")
  .forEach((x) => discountedPer.push(x.innerText));

const count = [];
document
  .querySelectorAll(".product-ratingsCount")
  .forEach((x) =>
    count.push(x.innerText.trim().replace("|", "").replace("\n", ""))
  );

const rating = [];
document
  .querySelectorAll("div.product-ratingsContainer > span:nth-child(1)")
  .forEach((x) => rating.push(x.innerText));

for (let i = 0; i < img.length; i++) {
  res.push({
    img: img[i],
    title: title[i],
    desc: desc[i],
    size: sizes[i],
    price: discountedPrice[i],
    per: discountedPer[i],
    strikePrice: strikePrice[i],
    count: count[i],
    rating: rating[i],
  });
}
