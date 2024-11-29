const Notification = require('../Models/Notification.model');
const User = require('../Models/User.model');

// Create a new notification
exports.createNotification = async (req, res) => {
  try {
    const { message, recipient, type } = req.body;
    const newNotification = new Notification({
      message,
      recipient,
      type,
    });
    await newNotification.save();
    res.status(201).json({ message: 'Notification sent successfully', notification: newNotification });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending notification' });
  }
};

// Get all notifications for a user
exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ recipient: req.params.userId });
    res.status(200).json(notifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching notifications' });
  }
};

// Mark notification as read
exports.markNotificationAsRead = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { status: 'read' },
      { new: true }
    );
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.status(200).json({ message: 'Notification marked as read', notification });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error marking notification as read' });
  }
};
