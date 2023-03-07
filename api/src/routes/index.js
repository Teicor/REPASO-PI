const { Router } = require("express");
const axios = require ('axios');
const { Episode, Character } = require ('../db');
// const Character = require("../models/Character");

const router = Router();

// Configurar los routers

router.get('/characters', async (req, res) =>{
  const characterInfo = await axios.get('https://rickandmortyapi.com/api/character')
  const infoApi = await characterInfo.data.results.map((el) => {
    return {
      id: el.id,
      name: el.name,
      species: el.species,
      image: el.image,
      origin: el.origin.name,
      created: el.created, //VER BIEN 
    }
  })
  async function infoDb(){
    const dbInfo = null;
    return await Character.findAll()
    .then((data) => { 
      res.status(200).send(data)
    })
    .catch(err => {
      console.log("Error: ", err);
    })
  }
  infoDb(); 
    
   //tambien puede ser res.json(infoApi)
})

router.get ('/episodes', async (req, res) => {
  const episodeInfo = await axios.get('https://rickandmortyapi.com/api/episode')
  const episode = await episodeInfo.data.results.map((el) => {
    return {
      id: el.id,
      name: el.name,
    }
  })
  await Episode.bulkCreate(episode);
  res.status(200).send(episode);
})

router.post('/characters', async (req, res, next) => {
    const {
        id,
        name,
        species,
        image,
        origin,
        created,
        episode,
    } = req.body;
    try {
        const characterCreated = await Character.create(
            {
                id,
                name,
                species,
                image,
                origin,
                created,
            })
        for(let i=0; i<episode.length; i++){
            const episodio = await Episode.findOne({
                where: {
                    name: episode[i]
                }
            })
            await characterCreated.addEpisode(episodio)
        }
        res.send('Personaje creado!<3')
        }
    catch (error){
        next(error)
    }
})

module.exports = router;