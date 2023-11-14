var APP_DATA = {
  "scenes": [
    {
      "id": "0-trilha",
      "name": "Trilha",
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
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.22900940483424215,
        "pitch": -0.22025324616474862,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -3.0525126220182646,
          "pitch": -0.18866271860143158,
          "rotation": 5.497787143782138,
          "target": "1-subida"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3136186087394659,
          "pitch": 0.16948122238983565,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Trilha da Serra Negra</font></font>",
          "text": "<div><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Na trilha, você já tem uma visão parcial da Serra Negra. </font><font style=\"vertical-align: inherit;\">Continue caminhando por mais alguns minutos e você chegará ao topo.</font></font></div><div>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</div>"
        }
      ]
    },
    {
      "id": "1-subida",
      "name": "Subida",
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
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.35391378286982444,
        "pitch": -0.26247933023816294,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 2.709782645890872,
          "pitch": -0.028986427863991082,
          "rotation": 0.7853981633974483,
          "target": "0-trilha"
        },
        {
          "yaw": 2.1998991664239274,
          "pitch": -0.06580087031708359,
          "rotation": 5.497787143782138,
          "target": "2-subida2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2236356980075875,
          "pitch": 0.20905645395131245,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Caminho Alternativo</font></font>",
          "text": "<div><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Se preferir, há um caminho alternativo que permite chegar a essa parte da Serra Negra de carro. </font><font style=\"vertical-align: inherit;\">Assim, você pode desfrutar da vista sem a caminhada até o topo</font></font></div>"
        }
      ]
    },
    {
      "id": "2-subida2",
      "name": "Subida2",
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
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 1.0496355778475355,
        "pitch": -0.1572755005495594,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -0.3045573390009455,
          "pitch": 0.13759288316338747,
          "rotation": 5.497787143782138,
          "target": "2-subida2"
        },
        {
          "yaw": -2.7835814817784765,
          "pitch": -0.15435062181077797,
          "rotation": 0,
          "target": "3-chegada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-chegada",
      "name": "Chegada",
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
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -0.7120110586664676,
        "pitch": -0.22327041392042268,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 1.2035497077192048,
          "pitch": -0.01626310384445695,
          "rotation": 5.497787143782138,
          "target": "4-viso-do-topo"
        },
        {
          "yaw": 2.648467721730987,
          "pitch": 0.04367253176513053,
          "rotation": 0.7853981633974483,
          "target": "3-chegada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7810908177606795,
          "pitch": -0.18460645236448592,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Chegada ao Topo da Serra Negra</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Ao chegar ao topo da Serra Negra, você é recebido por uma vista panorâmica espetacular da região montanhosa e dos rios. É um momento de pura admiração e realização.</font></font>"
        }
      ]
    },
    {
      "id": "4-viso-do-topo",
      "name": "Visão do Topo",
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
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -2.2546215383040398,
        "pitch": 0.0331414287097882,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -0.6257069819596559,
          "pitch": 0.08099517274056289,
          "rotation": 0,
          "target": "5-viso-cidade"
        },
        {
          "yaw": 1.1886193491627903,
          "pitch": -0.055097764458697185,
          "rotation": 0.7853981633974483,
          "target": "3-chegada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-viso-cidade",
      "name": "Visão Cidade",
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
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 1.258842103025442,
        "pitch": 0.11839304839951659,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -1.8952155916200368,
          "pitch": 0.12078399879703028,
          "rotation": 0,
          "target": "4-viso-do-topo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9039861898471813,
          "pitch": 0.06446257213171513,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Cidade Ibituruna</font></font>",
          "text": "<div><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">A cidade está situada entre as montanhas, com suas casas e ruas. </font></font></font><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Uma visão incrível que mostra a beleza desta cidade. </font></font></font><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Ibituruna é uma cidade situada no estado de Minas Gerais. </font></font></font><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Conhecida por sua beleza natural e rica cultura, a cidade é um destino popular para quem busca uma experiência mineira.</font></font></font></font></div>"
        }
      ]
    }
  ],
  "name": "TourSerra",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
