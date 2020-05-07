const configs = {
  development: {
    server: {
      host: 'localhost',
      port: 8080
    }
  },
  test: {
    server: {
      host: 'localhost',
      port: 8080
    }
  },
  production: {
    server: {
      host: 'localhost',
      port: 8080
    }
  },
}

// type configKeys = 'development' | 'test' | 'production'
type configKeys = keyof typeof configs

const NODE_ENV = process.env.NODE_ENV as configKeys || 'development'

export default configs[NODE_ENV]