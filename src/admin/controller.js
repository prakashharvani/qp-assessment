const { Router } = require("express");
const GroceryItem = require("../models/groceryItem");

const router = Router();

router.post("/add", async (req, res) => {
  try {
    const newItem = await GroceryItem.create(req.body);
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/view", async (req, res) => {
  try {
    const items = await GroceryItem.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/remove/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await GroceryItem.destroy({ where: { id } });
    res.json({ message: "Item removed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updatedItem = await GroceryItem.update(req.body, { where: { id } });
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
