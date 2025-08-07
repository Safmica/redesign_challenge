package models

import (
	"time"

	"gorm.io/gorm"
)

type Berita struct {
	gorm.Model
	Judul      string    `json:"judul" gorm:"not null"`
	Cover      string    `json:"cover" gorm:"not null"`
	IsPriority bool      `json:"is_priority"`
	PostedAt   time.Time `json:"posted_at"`
}
