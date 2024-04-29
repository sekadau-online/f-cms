module.exports = {
  apps: [
    {
      name: 'f-cms',
      cwd: "./f-cms/current",
      error_file: "./f-cms/logs/web.err.log",
      out_file: "./f-cms/logs/web.out.log",
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      instances: 1, // Ubah ke dalam bentuk angka
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start --hostname 0.0.0.0', // Menambahkan alamat IP di sini
      env: {
        NODE_ENV: "development",
        PORT: 3128 // Menentukan port di sini
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3128 // Menentukan port di sini
      }
    }
  ],
  deploy: {
    production: {
      //user: "fauzan",
      host: "127.0.0.1",
      //key: "./id_rsa",
      ref: "origin/master",
      repo: "git@github.com:sekadau-online/f-cms.git",
      path: "/home/fauzan/f-cms", // Ubah path sesuai struktur proyek And                                                                                                                                                                                               a
      "pre-deploy": "git fetch --all",
      "post-deploy": "npm install && npm run build && pm2 reload ecosystem.config"                                                                                                                                                                                               g.js --env production"
    }
  }
}
