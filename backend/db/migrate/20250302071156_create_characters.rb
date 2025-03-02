class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.decimal :x
      t.decimal :y
      t.integer :width
      t.integer :height

      t.timestamps
    end
  end
end
