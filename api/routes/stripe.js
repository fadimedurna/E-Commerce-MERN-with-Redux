require("dotenv").config();
const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY_MY);
console.log("stripe: ", stripe);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
  console.log("req.body: ", req.body);
});

module.exports = router;
