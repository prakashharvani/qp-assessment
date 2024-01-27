const { Router } = require("express");
const GroceryItem = require("../models/groceryItem");

const router = Router();

// User endpoints
router.get("/view", async (req, res) => {
  try {
    console.log('-------------------------items')
    const items = await GroceryItem.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/book", async (req, res) => {
  const { items } = req.body;
  try {
    // You may implement logic to handle inventory booking here
    // For simplicity, let's assume the inventory is available for all requested items
    res.json({ message: "Items booked successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
