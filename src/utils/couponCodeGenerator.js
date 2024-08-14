function generateCouponCode(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let couponCode = "";
  for (let i = 0; i < length; i++) {
    couponCode += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return couponCode;
}

function generateCoupons(numberOfCoupons, codeLength) {
  const coupons = new Set();
  while (coupons.size < numberOfCoupons) {
    coupons.add(generateCouponCode(codeLength));
  }
  return Array.from(coupons);
}

const coupons = generateCoupons(100, 10);
