class AirlineSerializer
  include JSONAPI::Serializer
  attributes :name, :slug, :avg_score, :logo_url

  has_many :reviews
end
