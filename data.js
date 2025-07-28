var APP_DATA = {
  "scenes": [
    {
      "id": "0-defaul",
      "name": "DEFAUL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.16135185682393427,
          "pitch": 0.25997803103515693,
          "rotation": 0,
          "target": "1-volcan"
        },
        {
          "yaw": 1.0192621121160155,
          "pitch": 0.29020420291625726,
          "rotation": 0,
          "target": "2-flores"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.2510888570927676,
          "pitch": 0.20475229750574897,
          "title": "Desierto",
          "text": "Lugar más popular, con un oasis en el centro, cuevas y una cascada que cae desde lo más alto"
        },
        {
          "yaw": 1.4838535646017847,
          "pitch": -0.1255023161824873,
          "title": "Islas Flotantes",
          "text": "Diseñado especialmente para voladores, es un lugar poco concurrido ideal para recuperarse de una pelea o descansar."
        },
        {
          "yaw": 0.713040882533349,
          "pitch": 0.29815299586751465,
          "title": "Cueva de Flores",
          "text": "Bioma con mucha vegetación y comida para criaturas hervíboras, arcos hechos de piedra natural y un estanque en el centro"
        },
        {
          "yaw": -0.20662514815918342,
          "pitch": 0.21132307584679566,
          "title": "Volcan",
          "text": "Cuando ocurren las erupciones, caen meteoritos del cielo, tiene una cueva llena de lava y lagos exteriores del mismo."
        },
        {
          "yaw": -1.438091776363617,
          "pitch": 0.9633994861413999,
          "title": "Centrales",
          "text": "Está en medio del mapa, con lugares altos ideales para voladores, un lago para acuáticos, esto lo hace ideal para cualquier tipo."
        },
        {
          "yaw": -2.894561925585327,
          "pitch": 0.06881534903684283,
          "title": "Montañas",
          "text": "El lugar con más altura de toda Sonaria, no hay mucha vegetación y el lago está congelado"
        }
      ]
    },
    {
      "id": "1-volcan",
      "name": "VOLCAN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6658390760111565,
          "pitch": 0.1759993705046199,
          "rotation": 0,
          "target": "0-defaul"
        },
        {
          "yaw": -2.6658390760111565,
          "pitch": 0.1759993705046199,
          "rotation": 0,
          "target": "0-defaul"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6402259900661988,
          "pitch": -0.013750529249758614,
          "title": "Volcán",
          "text": "Hace erupción siempre en verano, se puede ver desde el juego como se llena conforme pasa el tiempo"
        }
      ]
    },
    {
      "id": "2-flores",
      "name": "FLORES",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.743184629048649,
          "pitch": 0.05921590957284373,
          "rotation": 0,
          "target": "0-defaul"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
