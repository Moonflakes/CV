let redis = require('redis')
let client = redis.createClient()

client.on('error', function (err) {
  console.log('Error ' + err)
})

let education = [
  {
    "yearFrom": "2011",
    "yearTo": "2013",
    "school": "Université de Savoie",
    "degree": "Master de psychologie spécialisé en neuropsychologie",
    "skills": [
      "Évaluation cognitive",
      "Étude comportementale",
      "Compréhension psychologique"
    ]
  },
  {
    "yearFrom": "2017",
    "yearTo": "2021",
    "school": "42",
    "degree": "Architecte en technologie numérique",
    "skills": [
      "Développement web fullstack",
      "Autonomie d'apprentissage",
      "Connaissances diverses de différents langages",
      "Versionnage",
      "Organisation du code",
      "Traitement et organisation des versions"
    ]
  }
]
let experiences = [
  {
    "dateFrom": "2020-06-01",
    "dateTo": "2020-12-01",
    "company": "UNiFAi",
    "role": "Développeuse frontend",
    "jobs": [
      "Création de wireframes",
      "Création de maquettes interactives (workflow)",
      "Sondage des cibles",
      "Développement frontend",
      "Test unitaires"
    ],
    "description" : ["Réalisation d'une application web fournissant un accès à des fonctionnalités algorithmiques aidant à l'uniformisation et l'organisation des bases de données (catégorisation hiérarchique, dédoublonnage) via une API, sous forme d'une plateforme explicite, intuitive et accessible."],
    "tools" : {
      "Developpement" : [
        "Vue.js", "Vuex", "Nuxt", "Buefy", "Bulma", "Docker", "Jest", "Axios", "CSS"
      ],
      "Design" : ["Figma"], 
      "Organisation de versions" : ["Gitlab", "Github"],
      "Organisation d'équipe (tâches, communication)" : ["Notion", "Slack", "Discord"]
    }
  },
  {
    "dateFrom": "2019-02-01",
    "dateTo": "2019-07-01",
    "company": "Quanted Square",
    "role": "Développeuse fullstack JS",
    "jobs": [
      "Développement web fullstack",
      "Scrapping",
      "Datavisualisation"
    ],
    "description": [
      "Aide à la création de plusieurs applications web pour les rendre accessibles et intuitives (ex : réalisation d'un modul de recherche hiérarchique pour faciliter l'accès au code des interventions et maladie dans le cadre des procédure de la sécurité sociale en milieu médical).",
      "Codage d'un script de scrapping pour donnée des informations sur les différentes maladies sur wikipédia",
      "Réalisation d'un site permettant de visualiser des données sur les dépenses de l'assemblée nationale : https://budget-assemblee.netlify.app.",
    ],
    "tools" : {
      "Developpement" : [
        "Vue.js", "Nuxt", "Vuetify", "Axios", "CSS", "Express", "Firebase", "MongoDB", "Node.js"
      ],
      "Analyse" : ["Google Analytics"], 
      "Organisation de versions" : ["Github"],
      "Organisation d'équipe (tâches, communication)" : ["Trello", "Slack", "Discord"]
    }
  },
  {
    "dateFrom": "2015-10-01",
    "dateTo": "2017-10-01",
    "company": "CHU de Dijon",
    "role": "Neuropsychologue",
    "jobs": [
      "Récolter des données",
      "Évaluation cognitive",
      "Entretien clinique"
    ],
    "description": [
      "Aide à la recherche pour la création d'une batterie de tests neuropsychologiques permettant d'évaluer précocement les troubles cognitifs post AVC dans le cadre notamment d'une aphasie (troubles de l'expression/compréhension du langage).",
    ],
    "tools" : {
      "Tests neuropsychologiques" : [
        "WAIS", "WCST", "Tests praxiques", "Tests attentionnels", "BREF", "BADS", "Tour de Hanoï", "BNT", "Test de Stroop"
      ]
    }
  },
]

client.set('education', JSON.stringify(education), redis.print)
client.set('experience', JSON.stringify(experiences), redis.print)

// var kv = [
//   'key1', 'value1',
//   'key2', 2,
//   'key3', 'value3'
// ];
// client.mset(kv, function(err) {
//   if (err) throw err;
// })

// client.set('string key', 'string val', redis.print)
// client.hset('hash key', 'hashtest 1', 'some value', redis.print)
// client.hset(['hash key', 'hashtest 2', 'some other value'], redis.print)

// client.hkeys('hash key', function (err, replies) {
//   console.log(replies.length + ' replies:')

//   replies.forEach(function (reply, i) {
//     console.log('    ' + i + ': ' + reply)
//   })

//   client.quit()
// })