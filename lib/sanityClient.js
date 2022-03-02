import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'wwdf3fk6',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skwh6ZJFsH0iMDGTjb5xGhv8Toe2qs2xi1Z65oHxELhf0GM1wzIU5AS1X81sjf2KmtkYuBqJeb2Sz9CcMzdoJ9CfYl5rD8d2nlip7sPVW3bGWEp6UMslqfpiGTGSm7pe5lP1JyOajUB6jmonHABrLqO6nHKUyHQbk0XMFua7otccZaqn3Ffq',
  useCdn: false,
})
