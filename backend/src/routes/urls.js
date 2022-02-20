const express = require('express')
const router = express.Router()
const nanoid = require('nanoid')
const urlSchema = require('../models/urlSchema')
const validator = require('../functions/validate')

