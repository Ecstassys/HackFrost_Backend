const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Create a new notification
router.post('/', notificationController.createNotification);

// Get notifications for a user
router.get('/:userId', notificationController.getNotifications);

// Mark notification as read
router.put('/:id/read', notificationController.markNotificationAsRead);

module.exports = router;
