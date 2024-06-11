# HARISENIN-BE
this is a simple app for an assignment in harisenin

## installation
1. Clone the repo 
`git clone https://github.com/AufaIzza/harisenin-assignment-be.git`
2. Run `npm install`
3. Create a `.env` file using `.env.example` as an example
4. Run `npm run db:clean` 
5. Run `npm run dev`

## Api endpoints
### AUTH
- POST `/api/auth/register` Register a new user
- POST `/api/auth/login` Get JWT token

### QUERIES
- GET `/api/kelas` Get a list of KELAS with MODE_PEMBELAJARAN
- GET `/api/mata_pelajaran?idkelas=1&idmodepembelajaran=1` Get a list of MATA_PELAJARAN with the corresponding `idkelas` and `idmodepembelajaran`
- GET `/api/bab?idmatapelajaran=1` Get a list of BAB with the corresponding `idmatapelajaran`, and gives the progress of user if logged in through bearer header.
- GET `/api/subbab?idbab=1` Get a list of SUBBAB with the corresponding `idbab`, and gives the progress of user if logged in through bearer header.
- GET `/api/material?idsubbab=1` Get a list of MATERIAL with the corresponding `idsubbab`, and gives the status of user if logged in through bearer header.
