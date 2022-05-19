class Airline < ApplicationRecord
  has_many :reviews
  has_one_attached :logo

  before_save :slugify

  def avg_score
    return 0 unless reviews.present?

    reviews.average(:score).round(2).to_f
  end

  def logo_url
    logo.attached? ? Rails.application.routes.url_helpers.rails_blob_path(logo, only_path: true) : ''
  end

  private

  def slugify
    self.slug = name.parameterize
  end
end
