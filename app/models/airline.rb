class Airline < ApplicationRecord
  has_many :reviews

  before_save :slugify

  def avg_score
    return 0 unless reviews.present?

    reviews.average(:score).round(2).to_f
  end

  private

  def slugify
    self.slug = name.parameterize
  end
end
