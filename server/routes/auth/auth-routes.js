const express = require('express');
const { registerUser, loginUser, logoutUser, authMiddleware } = require('../../controllers/auth-controller');

const router = express.Router();

// Auth routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

// ✅ Check Auth Route
router.get('/check-auth', authMiddleware, (req, res) => {
  res.json({
    success: true,
    user: req.user, // decoded from JWT
  });
});

module.exports = router;
