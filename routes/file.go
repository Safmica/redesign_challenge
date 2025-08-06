package routes

import (
	"redesign/controllers"
	"redesign/middlewares"

	"github.com/gofiber/fiber/v2"
)

func fileRoutes(api fiber.Router) {
	file := api.Group("/file")
	file.Get("/", controllers.GetFile)
	file.Post("/", middlewares.Auth, controllers.CreateFile)
}