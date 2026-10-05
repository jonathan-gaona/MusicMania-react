import React, { useState } from 'react';

const resenasData = [
  {
    id: 'caso1',
    title: 'Naturaleza Muerta',
    description: 'Naturaleza Muerta (2011) es el álbum debut y obra de culto del grupo chileno Ley 20mil (Macrodee y Linterna Veiderr junto a DJ Jotakao). Producido casi en su totalidad por Macrodee bajo Demencia Estudio, el disco consta de 20 tracks con un sonido boom bap oscuro y pesado, abordando temáticas sobre la bohemia, el consumo de cannabis, las vivencias de calle y la realidad urbana santiaguina.',
    critica: 'Una piedra angular del hip hop subterráneo chileno. Destaca por su producción atmosférica y sombría que retrata la crudeza nocturna de Santiago con líricas crudas pero altamente poéticas.',
    image: 'img/Ley20mil.jpg',
    maxHeight: '290px'
  },
  {
    id: 'caso2',
    title: 'Rap con R de Revolución',
    description: 'Rap con R de Revolución (2014) es el álbum debut como solista del rapero chileno Portavoz (Andrés Kooper, integrante de Salvaje Decibel). Producido por el propio Portavoz junto a Beatmaker B-Souldier, el disco es un referente del rap político latinoamericano, combinando beats clásicos de boom bap y ritmos andinos con letras de abierta crítica al capitalismo, la lucha de clases, el antifascismo y la reivindicación de los pueblos originarios.',
    critica: 'Un Manifiesto indispensable del rap social. La habilidad lírica de Portavoz rescata la tradición de protesta combinando sampleos folclóricos y beats contundentes de manera orgánica y contundente.',
    image: 'img/RdeRevolucion.jpg',
    maxHeight: '290px'
  },
  {
    id: 'caso3',
    title: 'El Círculo',
    description: 'El Círculo (2016) es el esperado y único álbum de estudio en solitario del legendario rapero español Kase.O (Javier Ibarra, miembro de Violadores del Verso). Grabado entre Zaragoza, Barcelona y Colombia con producción de Gonzalo Lasheras y el propio Kase.O, el disco es una obra maestra introspectiva e íntima donde aborda la depresión, el amor, la espiritualidad y su relación con la música, fusionando el boom bap clásico con elementos de jazz, funk y soul.',
    critica: 'Una obra cumbre de madurez artística. Kase.O logra desnudarse emocionalmente sin perder la técnica aplastante que lo caracteriza, creando un paisaje sonoro rico, versátil y atemporal.',
    image: 'img/Elcirculo.jpg',
    maxHeight: '280px'
  },
  {
    id: 'caso4',
    title: "Teatro d'ira",
    description: "Teatro d'ira: Vol. I (2021) es el segundo álbum de estudio de la banda de rock italiana Måneskin. Grabado completamente en vivo en el estudio para capturar una energía cruda y análoga, el disco fusiona el hard rock, el funk rock y el punk, abordando temáticas como la rabia transformadora, la catarsis, la libertad de expresión y el inconformismo. Incluye Zitti e buoni, canción con la que ganaron Eurovisión 2021.",
    critica: 'Una descarga analógica electrizante que inyecta aire fresco al rock contemporáneo. Destaca por la potencia vocal de Damiano David y una instrumentación en directo que desborda rebeldía e identidad.',
    image: 'img/maneskin.jpg',
    maxHeight: '280px'
  },
  {
    id: 'caso5',
    title: 'Off The Wall',
    description: 'Off the Wall (1979) es el quinto álbum de estudio del cantante estadounidense Michael Jackson y su primer gran éxito comercial bajo el sello Epic Records. Producido por Quincy Jones, el disco marcó la transición de Michael desde su etapa juvenil con The Jackson 5 hacia una sofisticada fusión de disco, funk, pop y baladas R&B.',
    critica: 'El álbum que redefinió el pop moderno. La sublime producción de Quincy Jones combinada con la interpretación vocal exuberante de Jackson creó el molde perfecto para la música bailable de las décadas posteriores.',
    image: 'img/michaelJackson.webp',
    maxHeight: '280px'
  },
  {
    id: 'caso6',
    title: 'The Razors Edge',
    description: 'The Razors Edge (1990) es el decimosegundo álbum de estudio de la banda australiana de hard rock AC/DC. Producido por Bruce Fairbairn, significó un masivo retorno a las listas de éxitos mundiales gracias al estruendoso sonido de riffs inolvidables en sencillos legendarios como "Thunderstruck" y "Moneytalks".',
    critica: 'Una inyección de adrenalina pura en plena década de los 90. Muestra a Angus Young en su máxima expresión técnica, entregando himnos de estadio cargados de energía, precisión y distorsión clásica.',
    image: 'img/acdc.jpg',
    maxHeight: '280px'
  },
  {
    id: 'caso7',
    title: 'YHLQMDLG',
    description: 'YHLQMDLG (acrónimo de "Yo Hago Lo Que Me Da La Gana", 2020) es el segundo álbum de estudio en solitario del puertorriqueño Bad Bunny. Un homenaje a las perreadas de marquesina de los años 2000, el trabajo consolida la estética del reguetón contemporáneo, mezclando trap, synthwave y dancehall.',
    critica: 'Un fenómeno cultural sin precedentes que revitalizó la música urbana latina. Su versatilidad de estilos y nostalgia bien ejecutada transformaron las reglas de la industria global del pop.',
    image: 'img/badbunny.webp',
    maxHeight: '280px'
  },
  {
    id: 'caso8',
    title: 'The Dark Side Of The Moon',
    description: 'The Dark Side of the Moon (1973) es el octavo álbum de estudio de la banda británica de rock progresivo Pink Floyd. Un álbum conceptual monumental que explora temas existenciales como el paso del tiempo, la codicia, el conflicto mental y la muerte, apoyado en innovaciones vanguardistas de grabación y sintesis sonora.',
    critica: 'Una de las mayores hazañas técnicas y artísticas en la historia de la grabación musical. Su fluidez narrativa y producción impecable continúan fijando el estándar del rock progresivo universal.',
    image: 'img/pinkfloyd.png',
    maxHeight: '280px'
  }
];

export const Resenas = () => {
  const [openId, setOpenId] = useState(null);

  const toggleCritica = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main>
      <section className="text-center py-5">
        <h1 className="display-5 fw-bold text-uppercase">Reseñas</h1>
        <p className="lead text-muted">Historia de la música y su crítica.</p>
      </section>

      <section className="bg-dark text-white rounded">
        <div className="container">
          <div className="d-flex flex-column gap-4">
            {resenasData.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="bg-dark text-white p-4 rounded shadow-sm">
                  <div className="row align-items-center g-4">
                    <div className="col-lg-8 d-flex flex-column justify-content-between">
                      <div>
                        <h3 className="fw-bold text-uppercase mb-3">{item.title}</h3>
                        <p className="text-secondary mb-3">{item.description}</p>
                      </div>
                      <div>
                        <button
                          className="btn btn-primary mt-auto"
                          type="button"
                          onClick={() => toggleCritica(item.id)}
                          aria-expanded={isOpen}
                        >
                          {isOpen ? 'Ocultar reseña Crítica' : 'Ver reseña Crítica'}
                        </button>
                        {isOpen && (
                          <div className="mt-3">
                            <div className="p-3 bg-dark text-light rounded small">
                              <strong>Crítica Profesional:</strong> {item.critica}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <img
                        src={item.image}
                        className="card-img-top img-fluid rounded"
                        style={{ maxHeight: item.maxHeight, objectFit: 'cover' }}
                        alt={item.title}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};