const { instituteLogin } = require('../controllers/authController')

const router = require('express').Router()

// router.route('institute-registration')
router.route('/institute-login').post(instituteLogin)
// router.route('/institute-verifyEmail/:id')
// router.route('member-register')
// router.route('member-login')
// router.route('student-register')
// router.route('student-login')

module.exports = router