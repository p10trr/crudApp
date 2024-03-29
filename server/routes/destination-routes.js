const express = require('express');
const router = express.Router();
const Travels = require('../dbHelpers');

// DESTINATIONS

router.get('/destinations',(req,res)=>{
    Travels.getAllDestinations()
    .then(destinations=>{
        res.status(200).json(destinations)
    })
    .catch(error=>res.status(500).json(error)) 
})

router.post('/users/:id/destinations',(req,res)=>{
    const {id} = req.params;
    const newDestination = req.body;
    newDestination["user_id"] = id;

    Travels.findUserById(id)
    .then(user=>{
        if(!user){
            res.status(404).json({message:"User doesnt exist"})
        } else {
            if(!newDestination.title || !newDestination.description){
                res.status(400).json({message: "All fields are mandatory"})
            } else {
                Travels.addDestination(newDestination)
                .then(destination=>{
                    res.status(200).json(destination)
                })
                .catch(error=>res.status(500).json(error))
            }
        }
    })
    .catch(error=>res.status(500).json(error))
})



router.delete('/destinations/:id',(req,res)=>{
    const {id} = req.params
    Travels.removeDestination(id)
    .then(count=>{
        if(count>0){
            res.status(200).json({message:"destination is deleted"})
        }else {
            res.status(404).json({message:"no destination with that id"})
        }
    })
    .catch(error=>res.status(500).json(error))
})

router.patch('/destinations/:id', (req,res)=>{
    const {id} = req.params
    Travels.updateDestination(id,req.body)
    .then(destination=>{
        res.status(200).json({message:"Destination updated"})
    })
    .catch(error=>res.status(500).json(error))
})

router.get('/destinationNumbers',(req,res)=>{
    Travels.groupDestinations()
    .then(destination=>{
        res.status(200).json(destination)
    })
    .catch(error=>res.status(500).json(error))
})

module.exports = router;