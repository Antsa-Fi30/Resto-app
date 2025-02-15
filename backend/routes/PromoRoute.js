const express = require("express");
const router = express.Router();
const PromotionController = require("../controllers/PromotionController");

router.get("/promotions", PromotionController.getPromotion);
router.get("/promotion/:id", PromotionController.getPromotion);
router.post("/addpromotion", PromotionController.addPromotion);
router.delete("/deletepromotion/:id", PromotionController.deletePromotion);

module.exports = router;
