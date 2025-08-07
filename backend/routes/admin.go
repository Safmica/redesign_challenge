package routes

import (
	"redesign/controllers"
	"redesign/middlewares"

	"github.com/gofiber/fiber/v2"
)

func adminRoutes(api fiber.Router) {
	admin := api.Group("/admin")
	admin.Post("/signup", middlewares.Auth, controllers.SignUp)
	admin.Post("/login", controllers.Login)
	admin.Post("/sync-berita", middlewares.Auth, controllers.SyncBeritaCache)
	admin.Post("/logout", middlewares.Auth, controllers.Logout)
}
