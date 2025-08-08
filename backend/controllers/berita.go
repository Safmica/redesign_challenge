package controllers

import (
	"redesign/cache"
	"redesign/database"
	"redesign/models"
	"redesign/utils"
	"strconv"
	"time"

	"github.com/gofiber/fiber/v2"
)

func GetBerita(c *fiber.Ctx) error {
	isPriority := c.Query("is_priority")
	limit := c.Query("limit")
	cacheKey := "berita_all"

	if isPriority == "true" {
		cacheKey = "berita_priority"
	}

	if cached, found := cache.GetBeritaCache(cacheKey); found {
		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"berita": cached,
			"cache":  true,
		})
	}

	var berita []models.Berita
	query := database.DB.Model(&models.Berita{}).Where("posted_at <= ?", time.Now()).Order("posted_at DESC")
	if isPriority == "true" {
		query = query.Where("is_priority = ?", true)
	}
	if limit != "" {
		if limitInt, err := strconv.Atoi(limit); err == nil {
			query = query.Limit(limitInt)
		}
	}
	if err := query.Find(&berita).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Berita not found",
		})
	}

	cache.SetBeritaCache(cacheKey, berita)

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"berita": berita,
		"cache":  false,
	})
}

func CreateBerita(c *fiber.Ctx) error {
	var berita models.Berita
	judul := c.FormValue("judul")
	cover, err := utils.SaveFile(c, "cover", true)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err,
		})
	}

	isPriorityStr := c.FormValue("is_priority")
	if judul == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Judul is required",
		})
	}

	isPriority, err := strconv.ParseBool(isPriorityStr)
	if err != nil {
		isPriority = false
	}

	if postedAtStr := c.FormValue("posted_at"); postedAtStr != "" {
		t, err := time.Parse(time.RFC3339, postedAtStr)
		if err != nil {
			return c.Status(400).JSON(fiber.Map{
				"error": "Invalid posted_at format. Use ISO 8601 (RFC3339)",
			})
		}
		berita.PostedAt = t
	}

	berita.Judul = judul
	berita.Cover = cover
	berita.IsPriority = isPriority

	if err := database.DB.Create(&berita).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to save berita",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "Berita created successfully",
		"berita":  berita,
	})
}

func UpdateBerita(c *fiber.Ctx) error {
	id := c.Params("id")
	if id == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "ID berita is required",
		})
	}
	var berita models.Berita

	if err := database.DB.Where("id =?", id).First(&berita).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Berita not found",
		})
	}

	if judul := c.FormValue("judul"); judul != "" {
		berita.Judul = judul
	}

	if isPriorityStr := c.FormValue("is_priority"); isPriorityStr != "" {
		isPriority, err := strconv.ParseBool(isPriorityStr)
		if err != nil {
			isPriority = false
		}
		berita.IsPriority = isPriority
	}

	if _, err := c.FormFile("cover"); err == nil {
		cover, err := utils.SaveFile(c, "cover", true)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": err,
			})
		}
		berita.Cover = cover
	}

	if postedAtStr := c.FormValue("posted_at"); postedAtStr != "" {
		t, err := time.Parse(time.RFC3339, postedAtStr)
		if err != nil {
			return c.Status(400).JSON(fiber.Map{
				"error": "Invalid posted_at format. Use ISO 8601 (RFC3339)",
			})
		}
		berita.PostedAt = t
	}

	if err := database.DB.Save(&berita).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to update berita",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "Berita updated successfully",
		"berita":  berita,
	})
}

func DeleteBerita(c *fiber.Ctx) error {
	id := c.Params("id")
	if id == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "ID berita is required",
		})
	}
	var berita models.Berita

	if err := database.DB.Where("id =?", id).First(&berita).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Berita not found",
		})
	}

	if err := database.DB.Delete(&berita).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to delete berita",
		})
	}

	return c.SendStatus(fiber.StatusNoContent)
}
