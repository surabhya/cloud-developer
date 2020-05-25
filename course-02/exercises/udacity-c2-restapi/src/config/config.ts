export const config = {
  "dev": {
    "username": process.env.UDACITY_POSTGRESS_USERNAME,
    "password": process.env.UDACITY_POSTGRESS_PASSWORD,
    "database": process.env.UDACITY_POSTGRESS_DATABASE,
    "host": process.env.UDACITY_POSTGRESS_HOST,
    "dialect": process.env.UDACITY_POSTGRESS_DIALECT,
    "aws_region": process.env.UDACITY_POSTGRESS_AWS_REGION,
    "aws_profile": process.env.UDACITY_POSTGRESS_AWS_PROFILE,
    "aws_media_bucket": process.env.UDACITY_POSTGRESS_AWS_MEDIA_BUCKET
  },
  "jwt":{
    "secret": process.env.UDACITY_JWT_SECRET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
