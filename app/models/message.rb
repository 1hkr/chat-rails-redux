class Message < ApplicationRecord
  belongs_to :user
  belongs_to :channel
  validates :content, presence: true

  def as_json(options = {})

    author = user.author.nil? ? user.email.match(/[^@]+/)[0] : user.author

    {
      id: id,
      author: author,
      content: content,
      created_at: created_at,
      channel: channel.name
    }
  end

end
