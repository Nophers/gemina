import voucher_codes from "voucher-code-generator";

// Generate 10 random codes after five seconds
console.log("Generating Code ...");
setTimeout(() => {
  for (let i = 0; i < 10; i++) {
    const code = voucher_codes.generate({
      pattern: "####-####-####-####-####-####",
    });

    // Make them uppercase, abcd => ABCD ...
    const format = code.toString().toUpperCase();
    console.log(format);
  }
  console.log("-----------------------------");
}, 5000);

