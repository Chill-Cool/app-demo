const mongoose = require('mongoose');
const item = mongoose.model('products');

exports.list_all = (req, res) => {
  item.find({}, (err, items) => {
    if (err) res.send(err);
    res.json(items);
  });
};

exports.create_one = (req, res) => {
  const newItem = new item(req.body);
  newItem.save((err, item) => {
    if (err) res.send(err);
    res.json(item);
  });
};

exports.read_one = (req, res) => {
  item.findById(req.params.itemID, (err, item) => {
    if (err) res.send(err);
    res.json(item);
  });
};

exports.update_one = (req, res) => {
  item.findOneAndUpdate(
    { _id: req.params.itemID },
    req.body,
    { new: true },
    (err, item) => {
      if (err) res.send(err);
      res.json(item);
    }
  );
};

exports.delete_one = (req, res) => {
  item.deleteOne({ _id: req.params.itemID }, err => {
    if (err) res.send(err);
    res.json({
      message: 'Item successfully deleted',
     _id: req.params.itemID
    });
  });
};