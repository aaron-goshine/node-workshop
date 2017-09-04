// routes/api/pr.js
'use strict';

const express = require('express');
const router = express.Router();
const PR = require('../../models/pr');

module.exports = () => {
  router .get('/', (req, res, next) => {
    // Get all PRs
    PR.find((err, prs) => {
      if (err) {
        return res.status(500).json({error: err});
      }
      res.json(prs);
    });
  });

  router.get('/api/pr/:pr_id', (req, res, next) => {
    // Get single by Id
    let pr_id = req.params.pr_id;
    PR.findById(pr_id, (err, pr) => {
      if (err) {
        return res.status(500).json({error: err});
      }
      res.json(pr);
    });
  });

  router.post('/', (req, res, next) => {
    // Create new PR
    let pr = new PR(req.body.pr);
    PR.save((err) => {
      if (err) {
        return res.status(500).json({error: err});
      }
      res.status(201).json({message: 'PR created!'});
    });
  });

  router.put('/:pr_id', (req, res, next) => {
    // Create new PR
    let pr_id = req.params.pr_id;
    PR.findById(pr_id, (err, pr) => {
      if (err) {
        return res.status(500).json({error: err});
      }
      let updatedPr = Object.assign(pr, req.body);
      let query = {id_: req.params.pr_id};

      pr.update(query, updatedPr, (err) => {
        if (err) {
          return res.status(500).json({error: err});
        }
        res.status(201).json(updatedPr);
      });
    });
  });

  router.delete('/api/pr/:pr_id', (req, res, next) => {
    res.render('index', {message: 'Hello World'});
  });
  return router;
};
