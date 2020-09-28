var express = require('express')
var router = express.Router()
var jsonReader = require('./jsonReader')

/* GET home page. */
router.get('/', function(req, res, next) {
  var routesData = []
  router.stack.forEach(r => {
    routesData.push(r.route.path)
  })
  res.render('index', { title: 'Api List', routes: routesData })
})

router.get('/getEntities', function(req, res, next) {
  res.send(new jsonReader().getFile('getEntities.json'))
})

router.get('/recentItems', function(req, res, next) {
  res.send(new jsonReader().getFile('getRecentItems10.json'))
})

router.get('/getApplicationPreferences', function(req, res, next) {
  res.send(new jsonReader().getFile('getApplicationPreferences.json'))
})

router.get('/getAuthorizableEntities', function(req, res, next) {
  res.send(new jsonReader().getFile('getAuthorizableEntities.json'))
})

router.get('/getEntityRelationshipIcons', function(req, res, next) {
  res.send(new jsonReader().getFile('getEntityRelationshipIcons.json'))
})

router.get('/getFlexApplicationPreferences', function(req, res, next) {
  res.send(new jsonReader().getFile('getFlexApplicationPreferences.json'))
})

router.get('/getForms', function(req, res, next) {
  res.send(new jsonReader().getFile('getForms.json'))
})

router.get('/getIconsInFolder', function(req, res, next) {
  res.send(new jsonReader().getFile('getIconsInFolder.json'))
})

router.get('/getWorkflows', function(req, res, next) {
  res.send(new jsonReader().getFile('getWorkflows.json'))
})

router.get('/getEntity/:entity', function(req, res, next) {
  var entity = req.params.entity

  var path = 'getEntity_' + entity + '.json'
  console.log('searching for ' + path)
  res.send(new jsonReader().getFile(path))
})

router.get('/form/:formid', function(req, res, next) {
  var entity = req.params.formid

  var path = 'getForm_' + entity + '.json'
  console.log('searching for ' + path)
  res.send(new jsonReader().getFile(path))
})

router.get('/getMyWorkPolicies', function(req, res, next) {
  res.send(new jsonReader().getFile('getMyWorkPolicies.json'))
})
router.get('/getMyWorkCalendars', function(req, res, next) {
  res.send(new jsonReader().getFile('getMyWorkCalendars.json'))
})
router.get('/getEntityRelationshipIcons', function(req, res, next) {
  res.send(new jsonReader().getFile('getEntityRelationshipIcons.json'))
})

router.get('/getFormsApplicationPreferences', function(req, res, next) {
  res.send(new jsonReader().getFile('getFormsApplicationPreferences.json'))
})

router.get('/getDialogRoles', function(req, res, next) {
  res.send(new jsonReader().getFile('getDialogRoles.json'))
})

router.get('/getProducts', function(req, res, next) {
  res.send(new jsonReader().getFile('getProducts.json'))
})
router.get('/getOrchestrators', function(req, res, next) {
  res.send(new jsonReader().getFile('getOrchestrators.json'))
})

router.get('/getAvailableOrchestratorIlios', function(req, res, next) {
  // res.send(new jsonReader().getFile('getProducts.json'));
  res.send({
    resp: 'no data for getAvailableOrchestratorIlios'
  })
})
router.get('/getAvailableOrchestratorOlios', function(req, res, next) {
  res.send({
    resp: 'no data for getAvailableOrchestratorOlios'
  })
  // res.send(new jsonReader().getFile('getProducts.json'));
})

module.exports = router
