const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");
const api = express();
api.use(cors({origin:true}));

const serviceAccount = require("./permissionKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ranking-2559a.firebaseio.com/"
});

const db = admin.firestore();
var dbR = admin.database();

//get ranking
api.get("/ranking", (req,res) =>{
    (async ()=>{
        let ref = dbR.ref("current");

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
    return res.status(200).send(snapshot.val());
}, function (errorObject) {
    return res.status(500).send("Error");
});
})();
});

api.get("/oldRanking", (req,res) =>{
    (async ()=>{
        let ref = dbR.ref("old");

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
    return res.status(200).send(snapshot.val());
}, function (errorObject) {
    return res.status(500).send("Error");
});
})();
});

//get transfers
api.get("/transfers/:game", (req,res) =>{
    (async ()=>{
        const player = db.collection(req.params.game).doc("Transfers");
        const doc = await player.get();
        if (!doc.exists) {
          return res.status(500).send("No transfers found for "+req.params.game);
        } else {
            let top20Transfers = [];
            let transfers = [];
            for(let i=0; i< doc.data().transfers.length; i++)
            transfers.push(doc.data().transfers[i])
            transfers.sort((a,b) => (a.date > b.date) ? -1 : ((b.date > a.date) ? 1 : -1));
            for(let i = 0; i<20 && i<transfers.length; i++)
            top20Transfers.push(transfers[i])  
            return res.status(200).send(top20Transfers);
        }
})();
});
//get free agents
api.get("/freeAgents/:game", (req,res) =>{
    (async ()=>{
        const player = db.collection(req.params.game).doc("Transfers");
        const doc = await player.get();
        if (!doc.exists) {
          return res.status(500).send("No free agents found for "+req.params.game);
        } else {
            let top20FreeAgents = [];
            let freeAgents = [];
            for(let i=0; i< doc.data().freeAgents.length; i++)
            freeAgents.push(doc.data().freeAgents[i])
            freeAgents.sort((a,b) => (a.date > b.date) ? -1 : ((b.date > a.date) ? 1 : -1));
            for(let i = 0; i<20 && i<freeAgents.length; i++)
            top20FreeAgents.push(freeAgents[i]) 
            return res.status(200).send(top20FreeAgents);
        }
})();
});

//get scrims
api.get("/scrims/:game", (req,res) =>{
    (async ()=>{
        const player = db.collection(req.params.game).doc("ALLscrims");
        const doc = await player.get();
        if (!doc.exists) {
          return res.status(500).send("No scrims found for "+req.params.game);
        } else {
            let scrims = [];
            for(let i=0; i< doc.data().pubgm.length; i++)
            scrims.push(doc.data().pubgm[i])
            scrims.sort((a,b) => (a.time < b.time) ? -1 : ((b.time < a.time) ? 1 : 0));
            return res.status(200).send(scrims);
        }
})();
});
//get events
api.get("/events/:game", (req,res) =>{
    (async ()=>{
        const player = db.collection(req.params.game).doc("ALLevents");
        const doc = await player.get();
        if (!doc.exists) {
          return res.status(500).send("No events found for "+req.params.game);
        } else {
            let events = [];
            for(let i=0; i< doc.data().pubgm.length; i++)
            events.push(doc.data().pubgm[i])
            events.sort((a,b) => (a.start < b.start) ? -1 : ((b.start < a.start) ? 1 : 0));
            return res.status(200).send(events);
        }
})();
});
//get orgs
api.get("/orgs/:game", (req,res) =>{
    (async ()=>{
        const player = db.collection("ALLorgs").doc(req.params.game);
        const doc = await player.get();
        if (!doc.exists) {
          return res.status(500).send("No org found for "+req.params.game);
        } else {
            let orgs = [];
            for(let i=0; i< doc.data().pubgm.length; i++)
            orgs.push(doc.data().pubgm[i])
            orgs.sort((a,b) => (a.name < b.name) ? -1 : ((b.name < a.name) ? 1 : 0));
            return res.status(200).send(orgs);
        }
})();
});
//get org
api.get("/org/:game/:code", (req,res) =>{
    (async ()=>{
        const player = db.collection(`${req.params.game}+orgs`).doc(req.params.code);
        const doc = await player.get();
        if (!doc.exists) {
          return res.status(500).send("No data found for "+req.params.code);
        } else {
            return res.status(200).send(doc.data());
        }
})();
});

//get Team details
api.get("/pubgm/:team", (req,res) =>{
    (async ()=>{
        // let t = '4kt#234'
        // let deco = encodeURIComponent(t);
        // console.log(deco)
        // let eco = decodeURIComponent(deco);
        // console.log(eco)
        const team = db.collection("PUBGMteams").doc(req.params.team);
        const doc = await team.get();
        if (!doc.exists) {
          return res.status(500).send("Teams not found in "+req.params.team);
        } else {
            return res.status(200).send(doc.data());
        }
})();
});

//get Teams by country
api.get("/teams/pubgm/:country", (req,res) =>{

    if(req.params.country === "Countries"){
        let teams = [];
    (async ()=>{
        const allTeams = db.collection("ALLteams");
        const snapshot = await allTeams.get();
        if(!snapshot.empty){
        snapshot.forEach(doc => {
            teams.push({country: doc.id,
            flag: doc.data().flag})
        });
        return res.status(200).send(teams);
    }
        else
        return res.status(500).send("No teams");
})();
    }
    else{
    (async ()=>{
        const countryTeams = db.collection("ALLteams").doc(req.params.country);
        const doc = await countryTeams.get();
        if (!doc.exists) {
          return res.status(500).send('Teams not found in '+req.params.country);
        } else {
            return res.status(200).send(doc.data().pubgm);
        }
})();
    }

});


//get all Teams and Country
api.get("/teams/pubgm", (req,res) =>{
    let teams = [];
    (async ()=>{
        const allTeams = db.collection("ALLteams");
        const snapshot = await allTeams.get();
        if(!snapshot.empty){
        snapshot.forEach(doc => {
            teams.push({country: doc.id,
                flag: doc.data().flag,
            teams: doc.data().pubgm
            });
          
        });
        return res.status(200).send(teams);
    }
        else
        return res.status(500).send("No teams");
})();
});



exports.api=functions.https.onRequest(api);
