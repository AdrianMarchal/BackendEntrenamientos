const express = require("express")
const router = express.Router()
const workoutController = require("../../controllers/workoutController")
const cache = require('apicache')

router.get("/" , cache.middleware("1 minute") ,workoutController.getAllWorkouts);

router.get("/:workoutId" , workoutController.getOneWorkouts);

router.post("/" , workoutController.createNewWorkouts);

router.patch("/:workoutId" , workoutController.updateOneWorkouts);

router.delete("/:workoutId" , workoutController.deleteOneWorkouts);


module.exports = router