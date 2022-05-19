class RemoveImageUrlFromAirline < ActiveRecord::Migration[6.1]
  def change
    remove_column :airlines, :image_url
  end
end
