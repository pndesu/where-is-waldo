Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'https://where-is-waldo-phi.vercel.app', 'http://localhost:5173'

    resource "*",
      headers: :any,
      expose: ["Access-Control-Allow-Origin"],
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
