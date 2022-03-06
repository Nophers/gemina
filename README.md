# Enigma
Grab the IP of a user running your script, log it into your mail.
Educational purposes only.

* Generating `CRYPT_KEYS` = 
```ts
node -p "[ 32, 16 ].map(n => crypto.randomBytes(n).toString('base64'))"
```

* Map data model =
```
npx prisma migrate dev --name init
```
