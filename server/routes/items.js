var fs = require('fs');
var path = require('path');

var express = require('express');
var router = express.Router();
var _ = require('lodash');
var logger = require('../lib/logger');
var log = logger();

var itemsFilePath = path.join(__dirname, '../init_data.json');
var items = JSON.parse(fs.readFileSync(itemsFilePath, 'utf8')).data;
var curId = _.size(items);

//console.log(items);

/* GET items listing. */
router.get('/', function(req, res) {
    console.log(items)
    res.json(_.toArray(items));
});

/* Create a new item */
router.post('/', function(req, res) {
    var item = req.body;
    curId += 1;
    item.id = curId;
    items[item.id] = item;
    
    fs.writeFile(itemsFilePath, JSON.stringify({ data: items }, null, 2), (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return res.status(500).json({ error: "Failed to save item" });
        }
        log.info('Created item', item);
        res.json(item);
    });
});

/* Get a specific item by id */
router.get('/:id', function(req, res, next) {
    var item = items[req.params.id];
    if (!item) {
        return next();
    }
    res.json(items[req.params.id]);
});

/* Delete a item by id */
router.delete('/:id', function(req, res) {
    var item = items[req.params.id];
    delete items[req.params.id];
    res.status(204);
    log.info('Deleted item', item);
    res.json(item);
});

/* Update a item by id */
router.put('/:id', function(req, res, next) {
    var item = req.body;
    if (item.id != req.params.id) {
        return next(new Error('ID paramter does not match body'));
    }
    items[item.id] = item;
    log.info('Updating item', item);
    res.json(item);
});


module.exports = router;
