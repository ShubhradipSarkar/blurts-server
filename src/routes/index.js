/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../app-constants.js'
import express from 'express'

import adminRoutes from './admin.js'
import authRoutes from './auth.js'
import dockerFlowRoutes from './dockerflow.js'
import hibpApiRoutes from './api/v1/hibp.js'
import previewRoutes from './preview.js'
import userApiRoutes from './api/v1/user.js'
import userRoutes from './user.js'
import breachesRoutes from './breaches.js'
import breachDetailsRoutes from './breach-details.js'

import { dialog } from '../controllers/dialog.js'
import { landingPage } from '../controllers/landing.js'
import { notFoundPage } from '../controllers/notFound.js'
import { notFound } from '../middleware/error.js'
import { doubleCsrfProtection } from '../utils/csrf.js'

const router = express.Router()

router.get('/', landingPage)
router.get('*/dialog/:name', dialog)

router.use('/', doubleCsrfProtection, dockerFlowRoutes)
router.use('/admin', doubleCsrfProtection, adminRoutes)
router.use('/api/v1/hibp/', hibpApiRoutes)
router.use('/api/v1/user/', doubleCsrfProtection, userApiRoutes)
router.use('/oauth', doubleCsrfProtection, authRoutes)
router.use('/user', doubleCsrfProtection, userRoutes)
router.use('/breaches', doubleCsrfProtection, breachesRoutes)
router.use('/breach-details', doubleCsrfProtection, breachDetailsRoutes)

// Do not make the non-auth previews available on prod
if (AppConstants.NODE_ENV !== 'production') {
  router.use('/preview', previewRoutes)
}

router.use(notFound)
router.use(notFoundPage)

export default router
