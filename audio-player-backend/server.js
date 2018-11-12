const express = require ('express')
const app = express()
const cors = require('cors') 

app.use(cors())

function Song(source, title, author, description, image, id) {
    this.source = source;
    this.title = title;
    this.author = author;
    this.description = description;
    this.image = image
    this.id = id;
  }
  
  const songs = [
    new Song('/noggano-armiya-teplyy.mp3', 'Army', 'Noggano' ,'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Tempo: 140bpm', '/images/noggano.jpg' ,0),
    new Song('/megapolice.mp3', 'MegaPolice', 'AK-47', 'An energetic, vibrant track featuring positive electric guitar licks and modern drums creates useful sports theme. Tempo: 130bpm', '/images/Мегаполис.jpg', 1),
    new Song('/centr-basta-guf-gorod-dorog.mp3', 'The City of Roads', 'Basta & Center','At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Tempo: 120bpm', '/images/basta.jpg', 2),
    new Song('/Noggano_-_Russian_Paradise.mp3', 'Russian Paradise','Basta & AK-47' ,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",'/images/AK47.jpg', 3 ),
    new Song('/ran-vasya-ran-musora.mp3','Run, Vasya, run!' ,'Nintendo',"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",'/images/nintendo.jpg', 4),
    new Song( '/basta_-_papa-what-s-up.mp3','Papa, Whats-up!', 'Basta', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','/images/papa.jpeg', 5),
    new Song( '/Basta_-_Sansara.mp3','Sansara','Basta','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','/images/sansara.png', 6)
  ]

app.get('/song', (req,res) => {
    res.json(songs)
})

app.listen(8080, () => {
    console.log('Running on 8080')
    console.log('Press CTRL + C to stop server');
})