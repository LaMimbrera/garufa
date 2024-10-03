let menuC = [
    { name: "Recomendación", label : "vino_Recomendado" },
    { name: "Zacatecanos", label: "vinos_Zacatecanos" },
    { name: "Mexicanos", label: "vinos_mexicanos" },
    { name: "Argentinos", label: "vinos_argentinos" },
    { name: "Chilenos", label: "vinos_chilenos" },
    { name: "Españoles", label: "vinos_españoles" },
    { name: "Franceses", label: "vinos_franceses" },
    { name: "Italianos", label: "vinos_italianos" },
    { name: "Blancos", label: "vinos_blancos" },
    { name: "Rosados", label: "vinos_rosados" },
    { name: "Espumosos", label: "vinos_espumosos" },
    { name: "Copeo", label: "vinos_copa" },
  ];
  let zac = [
    { name: "Lopez Rosso", label: "LR" },
    { name: "Tierra Adentro", label: "TA" },
    { name: "Viento Negro", label: "VN" },
  ];
  
  function crear() {
    document.getElementById("body").innerHTML = `<link rel="stylesheet" href="./styles/mainCategoria.css">
    <header><img src="./img/logoGarufa.png"></header>
    <main id="main"></main>`;
    document.getElementById("body").innerHTML += `<div class="side" id="A"></div>`;
    for (let i = 0; i < menuC.length; i++) {
      document.getElementById("main").innerHTML +=
        `<div `+(i==0 ? 'id="recomendado"':"")+`onclick = "categoria(` + i + `)">` + menuC[i].name + `</div>`;
    }
    document.getElementById("body").innerHTML += `<div class="side" id="B"></div>`;
  }
  function botellas(a, b) {
    document.getElementById("body").innerHTML =
      `<link rel="stylesheet" href="./styles/mainBotellas.css">
      <a id= "volver" onclick="`+(a == 1 ? "categoria(1)" : "crear()")+`"><img src="img/volver.png"></a>
    <style> main{grid-template-columns: repeat(`+(a == 1 ? botella[a][b].length : botella[a].length)+`,`+(botella[a].length > 3 ? "35" : 100 / botella[a].length)+`%)}</style>
    <header><p><img src="./img/logoGarufa.png"><stronge><img src="./img/flags/0`+(a > 8 ? 8 : a)+`.png"><br>`+(a == 1 ? zac[b].name : menuC[a].name)+`</stronge></p></header>
    <main id ="main">`;
    for (let i = 0;i < (a == 1 ? botella[a][b].length : botella[a].length);i++){
      if ((a == 1 ? botella[a][b][i].flag : botella[a][i].flag) == true) {
        document.getElementById("main").innerHTML+=
        `<div class = "card"><p onclick="info(`+a+`,`+b+`,`+i+`)"><img src='./img/`+menuC[a].label +
  (a==1?"/"+zac[b].label+`/0`+(i+1):"/0"+(i+1))+
          `.png'></p>
        <div class = "info">
          <h2 class = "h` +
          i +
          ` active" onclick="this.classList.add('remove');this.classList.remove('active');document.querySelector('.lista` +
          i +
          `').classList.remove('remove')">` +
          (a == 1 ? botella[a][b][i].nombre : botella[a][i].nombre) +
          `</h2>
        <div class = "lista` +
          i +
          ` remove" onclick = "this.classList.add('remove');this.classList.remove('active');document.querySelector('.h` +
          i +
          `').classList.add('active')">
          <a class = "precio"><img class="icon" src="./img/botella.png"><p> <stronge>` +
          (a == 1 ? botella[a][b][i].precioA : botella[a][i].precioA) +
          `<stronge><br></p></a>
          ` +
          ((a == 1 ? botella[a][b][i].precioB : botella[a][i].precioB) != "no"
            ? `<a class = "precio"><img class="icon" src="./img/copa.png"><p>  <stronge>` +
              (a == 1 ? botella[a][b][i].precioB : botella[a][i].precioB) +
              `<stronge></p></a>`
            : "") +
          `
        </div>
        </div>`;
      }
    }
  }
  function categoria(a) {
    if (parseInt(a) == 1) {
      document.getElementById("body").innerHTML =
        `<a id= "volver" onclick="crear()"><img src="./img/volver.png"></a><link rel="stylesheet" href="./styles/mainZac.css"><header><p><img src="./img/logoGarufa.png"><stronge>` +
        menuC[a].name +
        `</stronge></p></header><main id ="main">`;
      for (let i = 0; i < zac.length; i++) {
        document.getElementById("main").innerHTML +=
          `<div class = "card"><p onclick = "botellas(` +
          a +
          `,` +
          i +
          `)"><img src='./img/vinos_Zacatecanos/0` +
          (i + 1) +
          `.png'></p>`;
      }
    } else {
      botellas(a, 2);
    }
  }
  function info(a, b, c) {
    document.getElementById("body").innerHTML =
      `
      <link rel="stylesheet" href="./styles/mainVino.css">
      <a id= "volver" onclick=` +
      (a == 1 ? "botellas(" + a + "," + b + ")" : "botellas(" + a + ",2)") +
      `><img src="./img/volver.png"></a>
      <header>  
        <p><img src="./img/logoGarufa.png"><strong>` +
      (a == 1 ? botella[a][b][c].nombre : botella[a][c].nombre) +
      `</strong></p>
      </header>
      <main>
      <div class="card">
          <ul>
              <li><p><strong>Uva: </strong>` +
      (a == 1 ? botella[a][b][c].uva : botella[a][c].uva) +
      `</p></li>
              <li><p><strong>Aroma: </strong>` +
      (a == 1 ? botella[a][b][c].aroma : botella[a][c].aroma) +
      `</p></li>
              <li><p><strong>Maridaje: </strong>` +
      (a == 1 ? botella[a][b][c].maridaje : botella[a][c].maridaje) +
      `</p></li>
              <li><p><strong>Gusto: </strong>` +
      (a == 1 ? botella[a][b][c].gusto : botella[a][c].gusto) +
      `</p></li>
              <li><p><strong>Origen: </strong>` +
      (a == 1 ? botella[a][b][c].origen : botella[a][c].origen) +
      `</p></li>
          </ul>
          <p><img src="./img` +
      (a == 1
        ? "/vinos_Zacatecanos/" + zac[b].label + "/"
        : "/" + menuC[a].label + "/") +
      `0` +
      (c + 1) +
      `.png"></p>
      </div>
  </main>
    `;
  }
  var botella = [
    [
      {
        nombre: "Emilio Moro",
        precioA: "$2,175.00",
        precioB: "no",
        flag: true,
        uva: "Tempranillo.",
        aroma:"Aromas del tempranillo pulido con la crianza y toques de madera.",
        maridaje:
          "Carnes rojas, lechazo asado tradicional.",
        gusto:
          "Denso en su paso por boca, predominan las notas balsámicas, especiadas y de vainilla.",
        origen: "Ribera del Duero, España.",
      },
      {
        nombre: "XOLO",
        precioA: "$2,190.00",
        precioB: "no",
        flag: true,
        uva: "Nebbiolo, Cabernet Suavignon.",
        aroma:"Destacan los frutos negros maduros como zarzamora, higo, cereza negra, blueberry, los toques especiados de la pimienta verde, clavo de olor se combinan con los toques balsámicos de la hierbabuena y menta aportando los toques frescos.",
        maridaje:"Carnes rojas grasas de sabores intensos como porter house o un rib eye con hueso, estofados como un ossobucco o cordero. Quesos semi-maduros y maduros combinan a la perfecciona así como charcutería fina.",
        gusto:"Potente y con estructura sus taninos se perciben inmediatamente en el paladar y son balanceados con la acidez que presenta el vino, su cuerpo es robusto y estructurado, el retrogusto es largo y complejo reflejando los aromas que se perciben en la copa.",
        origen: "Valle de Guadalupe, Baja California, México.",
      },
   ],
    [//Zacatecanos
      [
        //Lopez Rosso
        {
          nombre: "Merlot",
          precioA: "$1,320.00",
          precioB: "no",
          flag: true,
          uva: "Merlot.",
          aroma:
            "Mezcla aromática a roble, cacao, hoja de tabaco, ciruelas, moras, grosella, frutos rojos, menta y pimienta.",
          maridaje:
            "Disfrutar con platillos italianos como pasta al pomodoro y pizzas ligeras, así como en salsas suaves, hamburguesas y tablas de quesos maduros.",
          gusto: "Dulzor 3/5, Acidez 3/5, Cuerpo 4/5, Alcohol 4/5, Taninos 3/5. ",
          origen: "Valle de las Arcinas, Zacatecas, México.",
        },
        {
          nombre: "Cabernet Franc",
          precioA: "$1,450.00",
          precioB: "no",
          flag: true,
          uva: "Cabernet Franc.",
          aroma:
            "Mezcla aromática a romero, cuero, anis, cafe, mora azul, zarzamora, frutos rojos y levadura.",
          maridaje:
            "Disfrutar con platillos especiados como pasta al pesto o sirloin al romero. Asimismo marida con botanas como anchoas, angulas, alubias y pimientos.",
          gusto: "Dulzor 3/5, Acidez 4/5, Cuerpo 3/5, Alcohol 3/5, Taninos 4/5. ",
          origen: "Valle de las Arcinas, Zacatecas, México.",
        },
        {
          nombre: "Viognier",
          precioA: "$790.00",
          precioB: "no",
          flag: true,
          uva: "Viognier.",
          aroma:
            "Mezcla aromática a gardenia, nectar, manzana verde, toronja, pera y piña.",
          maridaje:
            "Disfrutar con platillos que armonicen con su acidez como platillos mexicanos de mar con cítricos, tiraditos y ceviches. Apto para degustarse solo.",
          gusto: "Dulzor 3/5, Acidez 4/5, Cuerpo 4/5, Alcohol 3/5.",
          origen: "Valle de las Arcinas, Zacatecas, México.",
        },
      ],
      [
        //Tierra Adentro
        {
          nombre: "Blend Trivarietal",
          precioA: "$1,020.00",
          precioB: "$260.00",
          flag: true,
          uva: "Syrah(50%), Merlot(40%) y Tempranillo(10%).",
          aroma:
            "Intensidad aromática bien marcada de frutos maduros, cacao, vainilla y toques ahumados.",
          maridaje:
            "Su sólida estructura le permite acompañar las carnes rojas, el cabrito, el cordero, las pastas, los quesos y evidentemente a la comida mexicana.",
          gusto:
            "Se pueden percibir los taninos maduros y bien ensamblados, acidez amalgamada con un final largo y claro. Se identifica su percepción olfativa, reflejando la combinación de los frutos frescos y la solidez de su vivaz estructura, vino capaz de aun evolucionar muy bien durante los próximos 3 a 7 años.",
          origen: "Campo Real, Zacatecas, México.",
        },
        {
          nombre: "Blend Trivarietal 1/2",
          precioA: "$520.00",
          precioB: "no",
          flag: true,
          uva: "Syrah(50%), Merlot(40%) y Tempranillo(10%).",
          aroma:
            "Intensidad aromática bien marcada de frutos maduros, cacao, vainilla y toques ahumados.",
          maridaje:
            "Su sólida estructura le permite acompañar las carnes rojas, el cabrito, el cordero, las pastas, los quesos y evidentemente a la comida mexicana.",
          gusto:
            "Se pueden percibir los taninos maduros y bien ensamblados, acidez amalgamada con un final largo y claro. Se identifica su percepción olfativa, reflejando la combinación de los frutos frescos y la solidez de su vivaz estructura, vino capaz de aun evolucionar muy bien durante los próximos 3 a 7 años.",
          origen: "Campo Real, Zacatecas, México.",
        },
        {
          nombre: "Mezcla Bordelesa",
          precioA: "$1,090.00",
          precioB: "$275.00",
          flag: true,
          uva: "Cabernet Sauvignon(65%), Malbec(25%) y Merlot(10%).",
          aroma: "Aromas que van del café a la vainilla, regaliz y canela.",
          maridaje:
            "Le permite acompañar carnes rojas, cabrito, cordero, pastas, quesos y chiles en nogada.",
          gusto:
            "Buen cuerpo, acidez balanceada, taninos maduros y aterciopelados. Final largo, tostado, canela y chocolate amargo.",
          origen: "Campo Real, Zacatecas, México.",
        },
        {
          nombre: "Mezcla Bordelesa 1/2",
          precioA: "$575.00",
          precioB: "no",
          flag: true,
          uva: "Cabernet Sauvignon(65%), Malbec(25%) y Merlot(10%).",
          aroma: "Aromas que van del café a la vainilla, regaliz y canela.",
          maridaje:
            "Le permite acompañar carnes rojas, cabrito, cordero, pastas, quesos y chiles en nogada.",
          gusto:
            "Buen cuerpo, acidez balanceada, taninos maduros y aterciopelados. Final largo, tostado, canela y chocolate amargo.",
          origen: "Campo Real, Zacatecas, México.",
        },
        {
          nombre: "Merlot",
          precioA: "$1,360.00",
          precioB: "$350.00",
          flag: true,
          uva: "Merlot.",
          aroma:
            "Con un aroma franco e intenso, se perciben en él los frutos rojos maduros, coco, vainilla y pimientos verdes.",
          maridaje:
            "Su sólida estructura le permite acompañar las carnes rojas, cabrito y cordero, pollo a la ciruela, pastas en base de hongos.",
          gusto:
            "Ataque suave, acidez balanceada, presencia de frutos rojos maduros, vainilla, notas balsámicas como el mentol.",
          origen: "Campo Real, Zacatecas, México.",
        },
        {
          nombre: "Syrah",
          precioA: "$1,360.00",
          precioB: "no",
          flag: true,
          uva: "Syrah.",
          aroma: "Especias, moras negras, violetas, tabaco, cacao, café tostado.",
          maridaje:
            "Risotto de hongos, cortes añejados, lomo de cerdo y pork belly.",
          gusto:
            "Frutos negros, compotas, regaliz, buena acidez, estructurado, taninos pulidos y elegantes, permanencia media.",
          origen: "Campo Real, Zacatecas, México.",
        },
        {
          nombre: "Malbec",
          precioA: "$1,360.00",
          precioB: "$350.00",
          flag: true,
          uva: "Malbec.",
          aroma:
            "Con aromas a frutos negros,  flores como violetas, de gran intensidad, se perciben la ciruela y la cereza con notas de madera.",
          maridaje: "Lechón, cortes grasos y quesos suaves.",
          gusto:
            "Tanino pulido, acidez balanceada, notas a frutos negros, flores, café y vainilla. Final largo con notas ligeramente ahumadas.",
          origen: "Campo Real, Zacatecas, México.",
        },
        {
          nombre: "Malbec 1/2",
          precioA: "$730.00",
          precioB: "no",
          flag: true,
          uva: "Malbec.",
          aroma:
            "Con aromas a frutos negros,  flores como violetas, de gran intensidad, se perciben la ciruela y la cereza con notas de madera.",
          maridaje: "Lechón, cortes grasos y quesos suaves.",
          gusto:
            "Tanino pulido, acidez balanceada, notas a frutos negros, flores, café y vainilla. Final largo con notas ligeramente ahumadas.",
          origen: "Campo Real, Zacatecas, México.",
        },
        {
          nombre: "Gran Reserva",
          precioA: "$3,200.00",
          precioB: "no",
          flag: true,
          uva: "Malbec, Cabernet Suavignon.",
          aroma:
            "Aroma franco e intenso, se perciben los frutos rojos, grosellas, moras y se aprecian los frutos secos tales como almendras y nueces. Se percibe un fino bouquet con notas de roble, cacao, vainilla, café tostado, caramelo y tabaco.",
          maridaje:
            "Su sólida estructura le permite acompañar las carnes rojas, el cabrito y el cordero, las pastas, los quesos y decididamente a la comida mexicana.",
          gusto:
            "Se consolida la apreciación olfativa y resalta en el paladar, una sensación cálida, acidez suave, con taninos sedosos y aterciopelados. Bien definidos, con una textura noble, tersa y evolucionada se perciben los frutos secos, roble, café tostado, tabaco, cacao, y caramelo que se mezclan de manera sencilla y vigorosa. Es un vino equilibrado, con un retro gusto largo y agradable. Su un potencial de guarda es de un mínimo de 7 años.",
          origen: "Campo Real, Zacatecas, México.",
        },
        {
          nombre: "Merlot Rosado",
          precioA: "$600.00",
          precioB: "no",
          flag: true,
          uva: "Merlot.",
          aroma:
            "Aromas de carácter frutal con notas a durazno, miel y flores blancas. Equilibrado, armonioso, que aporta frescura llena de fruta con persistencia y volumen fácil de beber y con un amplio espectro de maridaje. Estamos comprometidos con el consumo responsable de alcohol: está prohibida su venta a menores de edad.",
          maridaje:
            "Ensalada o entradas de betabel, pescados, mariscos y platillos confitados o caramelizados, platillos mexicanos como chalupas en salsa verde y postres.",
          gusto:
            "Equilibrado, armonioso, que aporta frescura, llena de fruta la boca con persistencia y volumen, fácil de beber y con un amplio espectro de maridaje.",
          origen: "Campo Real, Zacatecas, México.",
        },
      ],
      [
        //Viento Negro
        {
          nombre: "Oak Reserve",
          precioA: "$1000.00",
          precioB: "no",
          flag: true,
          uva: "Cabernet Sauvinong, Petit Verdot y Cabernet Franc.",
          aroma:
            "Una mezcla de frutos rojos y negros; cerezas y ciruelas, y ligeros toques de roble tostado, serán base aromática de este ensamble.",
          maridaje:
            "Carnes potentes en sabor y estructura, postres a base de chocolate, quesos maduros y moles.",
          gusto:
            "Textura amable y delicada. Acidez media, una gran nota de mentoles y frescura te harán querer probar más.",
          origen: "Valle de las Arcinas, Zacatecas, México.",
        },
        {
          nombre: "Viento Negro",
          precioA: "$945.00",
          precioB: "no",
          flag: true,
          uva: "Cabernet Sauvinong, Cabernet Franc y Merlot.",
          aroma:
            "Una mezcla de frutos rojos y negros; cerezas y ciruelas, y ligeros toques de roble tostado, serán base aromática de este ensamble. ",
          maridaje:
            "Pastas con salsa de tomate, quesos semi-maduros, carnes magras y adobados.",
          gusto:
            "Textura amable y delicada. Acidez media, una gran nota de mentoles y frescura te harán querer probar más.",
          origen: "Valle de las Arcinas, Zacatecas, México.",
        },
      ],
    ],
    [//Mexicanos 
      {
        nombre: "Domecq XA",
        precioA: "$405.00",
        precioB: "$105.00",
        flag: true,
        uva: "Cabernet Sauvignon y Greanache.",
        aroma:
          "Aroma a frutos rojos como moras, cerezas y ciruelas, mezclados con vainilla y chocolate amargo.",
        maridaje:
          "Ideal para tomar solo o acompañar con carne asada, quesos suaves, tacos y pizza.",
        gusto:
          "Fresco y vivaz, reafirmando los frutos rojos en la boca, con final medio, agradable al paladar. ",
        origen: "Valle de Guadalupe, Baja California, México.",
      },
      {
        nombre: "Domecq XA 1/2",
        precioA: "$228.00",
        precioB: "no",
        flag: true,
        uva: "Cabernet Sauvignon y Greanache.",
        aroma:
          "Aroma a frutos rojos como moras, cerezas y ciruelas, mezclados con vainilla y chocolate amargo.",
        maridaje:
          "Ideal para tomar solo o acompañar con carne asada, quesos suaves, tacos y pizza.",
        gusto:
          "Fresco y vivaz, reafirmando los frutos rojos en la boca, con final medio, agradable al paladar. ",
        origen: "Valle de Guadalupe, Baja California, México.",
      },
      {
        nombre: "La Cetto Cabernet",
        precioA: "$417.00",
        precioB: "no",
        flag: true,
        uva: "Cabernet Sauvignon.",
        aroma:
          "Aromas florales, frutos rojos maduros y fondo de notas especiadas.",
        maridaje:
          "Excelente para acompañar carnes rojas al carbón, a la parrilla o al horno con cocción prolongada, algunos quesos maduros y/o ahumados.",
        gusto:
          "Sus taninos son maduros y le otorgan suavidad que contrasta con su complejidad.",
        origen: "Valle de Guadalupe, Baja California, México.",
      },
      {
        nombre: "La Cetto Nebiolo",
        precioA: "$735.00",
        precioB: "no",
        flag: true,
        uva: "Nebiolo.",
        aroma:
          "Aromas complejos a frutos rojos y negros maduros donde destaca el higo y la cereza negra, se perciben aromas a trufa, especias y notas ahumadas.",
        maridaje:
          "Gastronomía mexicana e italiana, cortes grasos, pastas con salsas especiadas.",
        gusto: " Intenso, complejo, frutal y especiado.",
        origen: "Valle de Guadalupe, Baja California, México.",
      },
      {
        nombre: "Casa Madero Merlot",
        precioA: "$1,100.00",
        precioB: "no",
        flag: true,
        uva: "Merlot.",
        aroma:
          "Fresco y complejo con aromas de frutos rojos, bayas negras y flores. Destacan los aromas de rosas rojas, violetas, ciruelas, fresas, nueces y cacao.",
        maridaje:
          "Enchiladas queretanas, sopa de tortilla, rajas con queso, torta de roast beef, pizza y tacos de cecina.",
        gusto:
          "Ataque placentero y sedoso, confirmando los aromas frutales, cacao, madera y rosas. Final agradable, terso y completo.",
        origen: "Valle de Parras, Coahuila, México.",
      },
      {
        nombre: "Casa Madero Shiraz",
        precioA: "$1,100.00",
        precioB: "no",
        flag: true,
        uva: "Shiraz.",
        aroma:
          "Aromas intensos de frutas rojas maduras. Jamaica, violetas, chocolate, maderas finas, nueces tostadas y especias como clavo y vainilla.",
        maridaje:
          "Enmoladas rellenas de pato, asado de bodas, conejo en adobo y tampiqueña.",
        gusto:
          "De cuerpo medio y jugoso. Confirma sus aromas frutales, especialmente higos, ciruela, granada, con un toque fresco de eucalipto, así como de bosque y especias con un final persistente.",
        origen: "Valle de Parras, Coahuila, México.",
      },
      {
        nombre: "Casa Madero Cabernet",
        precioA: "$1,100.00",
        precioB: "no",
        flag: true,
        uva: "Cabernet Sauvinong.",
        aroma:
          "Muy aromático a frutos negros y flores rojas. Destacando las grosellas negras, ciruela negra, arándanos, menta, especias de romero, canela, nuez moscada, vainilla, rosas y geranios.",
        maridaje:
          "Tacos de chicharrón a las brasas, bife de chorizo, barbacoa de res y tapas de jamón serrano.",
        gusto:
          "De cuerpo medio, sedoso y elegante. Dominando los aromas de higos, ciruelas, eucalipto, menta, chocolate, maderas finas, café tostado, especias y cuero.",
        origen: "Valle de Parras, Coahuila, México.",
      },
      {
        nombre: "Casa Madero 3V",
        precioA: "$1,025.00",
        precioB: "no",
        flag: true,
        uva: "Cabernet Sauvinong, Merlot y Tempranillo.",
        aroma:
          "Elegante, a frutos rojos y negros, rosas rojas, lavanda y violeta, acompañados de notas especiadas y bosque. Con un fondo de madera tostada, nueces y cacao.",
        maridaje:
          "Carpaccio de res, tostadas de atún, carnitas de cerdo, bacalao, arrachera, tacos de fideo seco con chorizo, paella y quesos maduros.",
        gusto:
          "Con buen cuerpo, balanceado con taninos dulces y redondos, con buena jugosidad. Final largo y placentero. Destacando los aromas de eucalipto y flor de jamaica. Al final se confirma su paso en barrica con los recuerdos de almendra, nuez moscada, chocolate y tostado.",
        origen: "Valle de Parras, Coahuila, México.",
      },
      {
        nombre: "Balero",
        precioA: "$1,251.00",
        precioB: "no",
        flag: true,
        uva: "Cabernet Sauvignon, Merlot y Syrah.",
        aroma:
          "En nariz intensidad media con notas a fruta rojas y negras maduras, caramelo y vainilla de la barrica.",
        maridaje:
          "Es ideal para acompañar carnes rojas, quesos curados y embutidos.",
        gusto:
          "En boca es un vino tinto seco de cuerpo medio con ricas sensaciones de compota de frutos rojos y negros, balanceado y final medio, muy amigable.",
        origen: "Valle de Guadalupe, Baja California, México.",
      },
      {
        nombre: "Santo Tomás Único",
        precioA: "$4,300.00",
        precioB: "no",
        flag: true,
        uva: "Cabernet Sauvignon y Merlot.",
        aroma:
          "En nariz es goloso y frutal como ciruela, zarzamora, cereza, acompañado de vainilla, chocolate, cedro y pimienta.",
        maridaje: "Lechón en mole negro, briquet tatemado, pasta trufada.",
        gusto:
          "En boca es maduro y con carácter frutal, destacado por su estructura cremosa, acompañado de una buena acidez, permitiéndonos tener un vino de guarda.",
        origen: "Valle de Santo Tomás, Baja California, México.",
      },
      {
        nombre: "Entrelineas",
        precioA: "$885.00",
        precioB: "no",
        flag: true,
        uva: "Malbec, Nebbiolo, Syrah.",
        aroma:
          "Sumamente aromático, impregna la habitación donde se encuentra al momento de abrir; con notas de frambuesa, mora y cereza frescas, se percibe un poco de nota tostada después de dejarlo un tiempo en la copa.",
        maridaje:
          " Enchiladas potosinas, pollo asado con guarnición de verduras al vapor, enjitomatadas.",
        gusto:
          "Sumamente aromático, impregna la habitación donde se encuentra al momento de abrir; con notas de frambuesa, mora y cereza frescas, se percibe un poco de nota tostada después de dejarlo un tiempo en la copa.",
        origen: "Valle de Monte Grande, Aguascalientes, México.",
      },
      {
        nombre: "XOLO",
        precioA: "$2,190.00",
        precioB: "no",
        flag: true,
        uva: "Nebbiolo, Cabernet Suavignon.",
        aroma:"Destacan los frutos negros maduros como zarzamora, higo, cereza negra, blueberry, los toques especiados de la pimienta verde, clavo de olor se combinan con los toques balsámicos de la hierbabuena y menta aportando los toques frescos.",
        maridaje:"Carnes rojas grasas de sabores intensos como porter house o un rib eye con hueso, estofados como un ossobucco o cordero. Quesos semi-maduros y maduros combinan a la perfecciona así como charcutería fina.",
        gusto:"Potente y con estructura sus taninos se perciben inmediatamente en el paladar y son balanceados con la acidez que presenta el vino, su cuerpo es robusto y estructurado, el retrogusto es largo y complejo reflejando los aromas que se perciben en la copa.",
        origen: "Valle de Guadalupe, Baja California, México.",
      },
    ],
    [
      //Argentinos
      {
        nombre: "Norton",
        precioA: "$978.00",
        precioB: "$250.00",
        flag: true,
        uva: "Malbec.",
        aroma:
          "Aroma a frutos rojos escarchados tales como ciruelas y grosellas, con toque de regaliz y pimienta negra. Se hace notar también un recuerdo de violetas y tierra mojada.",
        maridaje:
          "Armoniza muy bien con platillos de carnes rojas ligeramente condimentadas, a la parrilla o guisadas, cerdo asado, pavo, pollo, nopales a las brasas, comida mexicana como y quesos semicurados.",
        gusto:
          "Buen balance. Delicadas notas especiadas. Taninos de textura muy fina y de carácter dulce ya maduros. Buena concentración, acidez fresca y densidad general media, con amplio y armonioso final.",
        origen: "Mendoza, Argentina.",
      },
      {
        nombre: "Trapiche",
        precioA: "$738.00",
        precioB: "no",
        flag: true,
        uva: "	Pinot Noir.",
        aroma: "Presenta frutos rojos como fresas, frambuesas y cerezas.",
        maridaje: "Pasta, pizza, quesos suaves, carnes ligeras.",
        gusto: "En boca es frutal, fresco, facil de beber.",
        origen: "Mendoza, Argentina.",
      },
      {
        nombre: "Catena",
        precioA: "$1,618.00",
        precioB: "no",
        flag: true,
        uva: "Malbec.",
        aroma: "Aromas de flores, violetas, frutas rojas y vainilla.",
        maridaje:
          "Excelente vino para una provoletta  a la brasa, vacio a la parrilla o empanadas argentinas.",
        gusto: "Acidez equilibrada, mineral y taninos elegantes.",
        origen: "Mendoza, Argentina.",
      },
      {
        nombre: "Navarro Correas Colección Privada Malbec",
        precioA: "$1,250.00",
        precioB: "no",
        flag: true,
        uva: "Malbec.",
        aroma: "Sabores a ciruelas maduras y aromas a violetas.",
        maridaje:
          "Acompaña bien carnes rojas de vaca o cerdo asadas con acompañamientos de intensidad media. Aves con acompañamientos o salsas cremosas, pastas con carnes y risottos. Quesos semi duros.",
        gusto:
          "Cuerpo medio y taninos redondos. Final muy frutado y fresco con buena persistencia.",
        origen: "Luján de Cuyo, Mendoza, Argentina.",
      },
      {
        nombre: "Navarro Correas Colección Privada Blend",
        precioA: "$1,200.00",
        precioB: "no",
        flag: true,
        uva: "Cabernet Sauvignon, Malbec, Merlot.",
        aroma: "Con notas a moras, membrillo y especias.",
        maridaje:
          "Acompaña bien cordero, carnes de cerdo con salsas intensas y quesos maduros.",
        gusto:
          "De cuerpo medio y taninos sedosos. Frutado y de larga persistencia en boca.",
        origen: "Mendoza, Argentina.",
      },
      {
        nombre: "Terrazas",
        precioA: "$1,308.00",
        precioB: "no",
        flag: true,
        uva: "Malbec.",
        aroma:
          "Aromas de violetas, cerezas negras y ciruelas, pimienta negra y cacao.",
        maridaje:
          "Lomo, ratatouille mediterráneo, tarta de chocolate semiamargo y helado de mascarpone con frutos rojos.",
        gusto:
          "Entrada dulce y jugosa revela fineza, taninos delicados y un elegante final de frutos negros.",
        origen: "Valle de Uco, Mendoza, Argentina.",
      },
    ],
    [
      //Chilenos
      {
        nombre: "Concha y Toro",
        precioA: "$366.00",
        precioB: "$95.00",
        flag: true,
        uva: "Cabernet Sauvignon.",
        aroma:
          "Desarrolla un carácter frutal con notas de ciruelas rojas y frambuesas.",
        maridaje: "Carnes rojas, pastas, pizzas, quesos suaves.",
        gusto: "Taninos armónicos, de cuerpo medio y agradable final en boca.",
        origen: "Valle Central, Chile.",
      },
      {
        nombre: "Undurraga",
        precioA: "$555.00",
        precioB: "no",
        flag: true,
        uva: "Cabernet Sauvignon.",
        aroma:
          "Delata aromas delicados con tonos afrutados y levemente especiados, complejo, con matices florales, vainilla y sotobosque.",
        maridaje: "Se recomienda acompañar con carnes rojas.",
        gusto: "Expresivo en nariz con aroma a grosella negra.",
        origen: "Valle Central, Chile.",
      },
      {
        nombre: "Santa Digna",
        precioA: "$681.00",
        precioB: "$175.00",
        flag: true,
        uva: "Cabernet Sauvignon.",
        aroma:
          "Aromas frutales de zarzamora y grosellas, con aromas tostados de café y chocolate, además de sensaciones de pimiento verde, cuero y anís.",
        maridaje:
          "Ideal para acompañar cortes de carne a la parrilla, embutidos, antojitos mexicanos, puntas de res con salsa de pimienta, puré de papa, sándwich de pierna, carne de cerdo en adobo.",
        gusto:
          "En boca es sedoso en taninos, elegante y buen final de boca, vino que confirma sabores de frutas y especias.",
        origen: "Valle Central, Chile.",
      },
      {
        nombre: "Casillero del Diablo",
        precioA: "$589.00",
        precioB: "no",
        flag: true,
        uva: "Cabernet Sauvignon.",
        aroma:
          "En nariz expresa marcadas y cautivantes notas a cerezas, grosellas y ciruelas negras, junto con a sutiles toques a vainilla aportados por la guarda en barrica.",
        maridaje:
          "Carnes rojas, platos condimentados y quesos maduros como el Gruyere o azul.",
        gusto:
          "Mostrando una firme estructura, este vino posee una gran concentración de fruta, donde destaca la ciruela y mora, dando paso a taninos elegantes y jugosos permitiendo entregar un largo final.",
        origen: "Valle Central, Chile.",
      },
      {
        nombre: "Casillero del Diablo 1/2",
        precioA: "$382.00",
        precioB: "no",
        flag: true,
        uva: "Cabernet Sauvignon.",
        aroma:
          "En nariz expresa marcadas y cautivantes notas a cerezas, grosellas y ciruelas negras, junto con a sutiles toques a vainilla aportados por la guarda en barrica.",
        maridaje:
          "Carnes rojas, platos condimentados y quesos maduros como el Gruyere o azul.",
        gusto:
          "Mostrando una firme estructura, este vino posee una gran concentración de fruta, donde destaca la ciruela y mora, dando paso a taninos elegantes y jugosos permitiendo entregar un largo final.",
        origen: "Valle Central, Chile.",
      },
      {
        nombre: "Cousiño Macul",
        precioA: "$678.00",
        precioB: "no",
        flag: true,
        uva: "Merlot.",
        aroma:
          "Suave y delicada que nos recuerdan aromas a berries, resaltando moras y frambuesas maduras con algo de ciruelas negras y finalizar con delicadas especias y romero.",
        maridaje:
          "Se recomienda acompañar con ensaladas estilo césar, aves, pizzas, carnes rojas livianas, pastas e incluso pescados.",
        gusto:
          "Textura suave, amable y sedoso, de acidez media, con notas de frambuesas y cerezas maduras.",
        origen: "Valle del Maipo, Chile.",
      },
    ],
    [
      //Españoles
      {
        nombre: "Cune",
        precioA: "$975.00",
        precioB: "no",
        flag: true,
        uva: "Tempranillo(85%), Garnacha y Mazuelo(15%).",
        aroma:
          "Aromas frescos a frutos rojos destacando el regaliz en perfecto ensamblaje con los aromas golosos a vainilla, toffe y ligeros tostados procedentes de la barrica americana donde pasa su crianza.",
        maridaje:
          "En boca tiene un paso perfecto, es redondo equilibrado con un toque fresco al final que le da una largura proporcionando una retronasal con notas suaves a pastelería que nos invita a seguir bebiendo.",
        gusto:
          "En nariz aromas de bayas rojas, muestra elegancia en la boca, con algunas notas de especias y una acidez equilibrada.",
        origen: "El maridaje adecuado es con la dieta mediterranea.",
      },
      {
        nombre: "Gran Sangre de Toro",
        precioA: "$900.00",
        precioB: "$230.00",
        flag: true,
        uva: "Garnacha, Mazuelo y Syrah.",
        aroma:
          "Notas de frutos maduros, con elegantes tonos de madera y especias.",
        maridaje:
          "Ideal para platillos agridulces, pimientos rellenos y comida oriental.",
        gusto: "De carácter cálido en boca, serio y profundo.",
        origen: "Aragón, España.",
      },
      {
        nombre: "Sangre de Toro 1/2",
        precioA: "$363.00",
        precioB: "no",
        flag: true,
        uva: "Garnacha, Mazuelo y Syrah.",
        aroma:
          "Notas de frutos maduros, con elegantes tonos de madera y especias.",
        maridaje:
          "Ideal para platillos agridulces, pimientos rellenos y comida oriental.",
        gusto: "De carácter cálido en boca, serio y profundo.",
        origen: "Aragón, España.",
      },
      {
        nombre: "Atrium",
        precioA: "$1,080.00",
        precioB: "$275.00",
        flag: true,
        uva: "Merlot.",
        aroma:
          "Aroma frutal (confitura de moras) con un matiz elegante y singular que recuerda a la corteza de naranja.",
        maridaje:
          "Perfecto con ternera, el cerdo o el pato salvaje. También puede acompañar pescados a la plancha o al horno.",
        gusto: "Es redondo, pleno, con un tanino muy fino y perfumado.",
        origen: "Vilafranca del Penedès, Barcelona, España.",
      },
      {
        nombre: "La Planta",
        precioA: "$1,170.00",
        precioB: "$295.00",
        flag: true,
        uva: "Tempranillo.",
        aroma:
          "Aromas de frutos rojos con sensaciones de tostados, chocolate, canela, notas de maderas nobles y lácteos.",
        maridaje:
          "Carnes rojas a la parrilla, legumbres, arroces, perfecto para acompañar un buen cocido.",
        gusto: ".",
        origen: "Ribera del Duero, España.",
      },
      {
        nombre: "Marqués de Cáceres Crianza",
        precioA: "$1,010.00",
        precioB: "no",
        flag: true,
        uva: "Tempranillo blend.",
        aroma:
          "Expresivo de pequeños frutos rojos (frambuesa, arándanos, cerezas..) ensalzados por notas especiadas y un fondo avainillado.",
        maridaje:
          "Perfecto para acompañar la cocina mediterránea, fritura, verduras a la parrilla, legumbres, paella, arroces, pasta, pescado en salsa de tomate, jamones y chorizos, patés, carnes asadas, estofadas o a la parrilla, quesos suaves o semicurados.",
        gusto:
          "Su estructura subraya sus sabores densos y sus taninos consistentes.",
        origen: "Región Rioja, España.",
      },
      {
        nombre: "Matarromera Crianza",
        precioA: "$2,460.00",
        precioB: "no",
        flag: true,
        uva: "Tempranillo.",
        aroma:
          "Aromas de frutos rojos y negros como zarzamora, frambuesa y ciruela, con aromas lácteos, además de sensaciones de vainilla, cuero y cacao.",
        maridaje:
          "Idóneo para acompañar un atún sellado, unas costillas de cordero o cortes de buen marmoleo, aves a las brasas, algunos estofados, comida ligeramente condimentada, pastas cremosas y carnes rojas.",
        gusto:
          "Potente, carnoso, de taninos agradables, con cuerpo y acidez bien ensamblados.",
        origen: "Ribera del Duero, España.",
      },
      {
        nombre: "Mas La Plana",
        precioA: "$4,000.00",
        precioB: "no",
        flag: true,
        uva: "Cabernet Sauvignon.",
        aroma:
          "Aromas intensos, notas de arándanos confitados y cerezas, tiene aroma de trufa, ligeras especias y hierbas de olor.",
        maridaje:
          "Carne de caza, quesos maduros, quesos de oveja, cordero con salsa de morillas, embutidos, lechón, papa al horno y roast beef.",
        gusto:
          "Elegante con gusto prolongado y taninos suaves y presentes, excelente acidez, redondo y con perfecta expresión en boca.",
        origen: "Vilafranca del Penedès, Barcelona, España.",
      },
      {
        nombre: "Emilio Moro",
        precioA: "$2,175.00",
        precioB: "no",
        flag: true,
        uva: "Tempranillo.",
        aroma:"Aromas del tempranillo pulido con la crianza y toques de madera.",
        maridaje:
          "Carnes rojas, lechazo asado tradicional.",
        gusto:
          "Denso en su paso por boca, predominan las notas balsámicas, especiadas y de vainilla.",
        origen: "Ribera del Duero, España.",
      },
    ],
    [
      //Franceses
      {
        nombre: "Moet & Chandon",
        precioA: "$3,100.00",
        precioB: "no",
        flag: true,
        uva: "Chardonnay, Pinot Meunier, Pinot Noir.",
        aroma:
          "Intensidad vibrante de manzana verde, cítricos y matices minerales y florales. Aromas delicadamente vinosos, con toques de tilo y flor de vid.",
        maridaje:
          "Este champán se erige como compañero ideal para aperitivos, ostras, mariscos o quesos de pasta blanda. Su versatilidad en maridajes lo convierte en un invitado bienvenido en cualquier ocasión.",
        gusto:
          "Generoso, con una combinación única de suntuosidad frutal, burbujas finas y vivacidad cítrica. Se distingue por un sabor dominado por notas de bollería y frutas, con gran amplitud en boca y un final amable e intenso.",
        origen: "Épernay, Francia.",
      },
    ],
    [
      //Italianos
      {
        nombre: "Lambrusco Vibrante",
        precioA: "$567.00",
        precioB: "$145.00",
        flag: true,
        uva: "Lambrusco Grasparossa, Malbo gentile.",
        aroma: "Afrutado, con reminiscencias de semilla de durazno.",
        maridaje:
          "Ideal con platos picantes o condimentados, excelente con platos a base de carne de cerdo, y exquisita repostería.",
        gusto:
          "Sabor suave y placentero donde la nota dulce es bien balanceada con la acidez y la ligera efervescencia natural.",
        origen: "Emilia Romagna, Italia.",
      },
    ],
    [
      //Blancos
      {
        nombre: "Viognier",
        precioA: "$790.00",
        precioB: "no",
        flag: true,
        uva: "Viognier.",
        aroma:
          "Mezcla aromática a gardenia, néctar, manzana verde, toronja, pera y piña.",
        maridaje:
          "Disfrutar con platillos que armonicen con su acidez como platillos mexicanos de mar con cítricos, tiraditos y ceviches. Apto para degustarse solo.",
        gusto: "Dulzor 3/5, Acidez 4/5, Cuerpo 4/5, Alcohol 3/5.",
        origen: "Valle de las Arsinas, Zacatecas, México.",
      },
      {
        nombre: "XA Blanc de Blancs",
        precioA: "$396.00",
        precioB: "$105.00",
        flag: true,
        uva: "Chardonnay, Suavignon Blanc, Chenin.",
        aroma:
          "Expresivas notas frutales como pera y manzana amarilla y flores blancas.",
        maridaje:
          "Perfecto para tomar solo como aperitivo, pero también acompañando pescados y mariscos (ceviches, aguachiles y cócteles), incluso un poco picantes. No dejes de probar un taco al pastor con este XA Blanc de Blancs. La comida asiática va de maravilla, al igual que unos quesos suaves, carnes blancas, pastas, paella y postres a base de cítricos.",
        gusto:
          "Entrada agradable, con untuosidad y frescura, acidez equilibrada y buena persistencia en boca. Las notas dulces lo hacen del agrado de mucha gente y le otorgan versatilidad.",
        origen: "Valle de Guadalupe, Baja California, México.",
      },
      {
        nombre: "Monte Xanic",
        precioA: "$970.00",
        precioB: "$245.00",
        flag: true,
        uva: "Chardonnay.",
        aroma:
          "En nariz es franco y de intensidad media. Los aromas frutales de ciruela amarilla, manzana, plátano, mandarina, flores de azahar y acacia se acompañan de una nota de hinojo y vainilla, lo que le confiere gran complejidad.",
        maridaje:
          "Risotto, pollo a la brasa, pastas cremosas, aves con salsa de hongos, mariscos a la brasa o salsa de vino y pescados grasos al horno sobre base de patatas y champiñones.",
        gusto:
          "El ataque en boca es suave. Se presenta como un vino seco, de acidez fresca, vinosidad ligera, constituyendo así un cuerpo firme y de buena estructura. Por la vía retronasal se perciben los aromas detectados por la nariz, sobre todo las flores, las frutas frescas como plátano y piña, y el anís. El equilibrio es armonioso y la persistencia muy larga.",
        origen: "Valle de Guadalupe, Baja California, México.",
      },
      {
        nombre: "Casa Madero Blanco",
        precioA: "$840.00",
        precioB: "no",
        flag: true,
        uva: "Chardonay.",
        aroma:
          "Carácter frutal que evoca guayaba, mango, carambolo, durazno, manzana, piña y pera. Flores blancas, manzanilla y recuerdos de miel.",
        maridaje:
          "Se recomienda con platillos de cocina oriental (china, vietnamita, japonesa, etc.) con tendencia agridulce o ligeramente picante, cocteles de Mariscos y postres a base de frutos rojos y tropicales.",
        gusto:
          "Intenso recuerdo frutal y floral. Refrescante y con buena permanencia.",
        origen: "Valle de Parras, Coahuila, México.",
      },
    ],
    [
      //Rosados
      {
        nombre: "La Cetto Zinfandel",
        precioA: "$414.00",
        precioB: "$105.00",
        flag: true,
        uva: "Zinfandel.",
        aroma: "Aromas frutales cómo durazno, frambuesa, fresa y manzana.",
        maridaje:
          "Ensalada o entradas de betabel, pescados, mariscos y platillos confitados o caramelizados, platillos mexicanos como chalupas en salsa verde y postres.",
        gusto: "Sabor agradable, ligeramente dulce y frutal.",
        origen: "Valle de Guadalupe, Baja California, México.",
      },
      {
        nombre: "Merlot Rosado",
        precioA: "$600.00",
        precioB: "no",
        flag: true,
        uva: "Merlot.",
        aroma:
          "Aroma franco e intenso, se perciben los frutos rojos, grosellas, moras y se aprecian los frutos secos tales como almendras y nueces. Se percibe un fino bouquet con notas de roble, cacao, vainilla, café tostado, caramelo y tabaco.",
        maridaje:
          "Ensalada o entradas de betabel, pescados, mariscos y platillos confitados o caramelizados, platillos mexicanos como chalupas en salsa verde y postres.",
        gusto:
          "Equilibrado, armonioso, que aporta frescura, llena de fruta la boca con persistencia y volumen, fácil de beber y con un amplio espectro de maridaje.",
        origen: "Campo Real, Zacatecas, México.",
      },
    ],
    [
      //Espumosos
      {
        nombre: "Moet & Chandon",
        precioA: "$3,100.00",
        precioB: "no",
        flag: true,
        uva: "Chardonnay, Pinot Meunier, Pinot Noir.",
        aroma:
          "Intensidad vibrante de manzana verde, cítricos y matices minerales y florales. Aromas delicadamente vinosos, con toques de tilo y flor de vid.",
        maridaje:
          "Este champán se erige como compañero ideal para aperitivos, ostras, mariscos o quesos de pasta blanda. Su versatilidad en maridajes lo convierte en un invitado bienvenido en cualquier ocasión.",
        gusto:
          "Generoso, con una combinación única de suntuosidad frutal, burbujas finas y vivacidad cítrica. Se distingue por un sabor dominado por notas de bollería y frutas, con gran amplitud en boca y un final amable e intenso.",
        origen: "Épernay, Francia.",
      },
      {
        nombre: "Lambrusco Vibrante",
        precioA: "$567.00",
        precioB: "$145.00",
        flag: true,
        uva: "Lambrusco Grasparossa, Malbo gentile.",
        aroma: "Afrutado, con reminiscencias de semilla de durazno.",
        maridaje:
          "Ideal con platos picantes o condimentados, excelente con platos a base de carne de cerdo, y exquisita repostería.",
        gusto:
          "Sabor suave y placentero donde la nota dulce es bien balanceada con la acidez y la ligera efervescencia natural.",
        origen: "Emilia Romagna, Italia.",
      },
    ],
    [
        {
            nombre: "Blend Trivarietal",
            precioA: "$1,020.00",
            precioB: "$260.00",
            flag: true,
            uva: "Syrah(50%), Merlot(40%) y Tempranillo(10%).",
            aroma:
              "Intensidad aromática bien marcada de frutos maduros, cacao, vainilla y toques ahumados.",
            maridaje:
              "Su sólida estructura le permite acompañar las carnes rojas, el cabrito, el cordero, las pastas, los quesos y evidentemente a la comida mexicana.",
            gusto:
              "Se pueden percibir los taninos maduros y bien ensamblados, acidez amalgamada con un final largo y claro. Se identifica su percepción olfativa, reflejando la combinación de los frutos frescos y la solidez de su vivaz estructura, vino capaz de aun evolucionar muy bien durante los próximos 3 a 7 años.",
            origen: "Campo Real, Zacatecas, México.",
          },
          {
            nombre: "Mezcla Bordelesa",
            precioA: "$1,090.00",
            precioB: "$275.00",
            flag: true,
            uva: "Cabernet Sauvignon(65%), Malbec(25%) y Merlot(10%).",
            aroma: "Aromas que van del café a la vainilla, regaliz y canela.",
            maridaje:
              "Le permite acompañar carnes rojas, cabrito, cordero, pastas, quesos y chiles en nogada.",
            gusto:
              "Buen cuerpo, acidez balanceada, taninos maduros y aterciopelados. Final largo, tostado, canela y chocolate amargo.",
            origen: "Campo Real, Zacatecas, México.",
          },
          {
            nombre: "Merlot",
            precioA: "$1,360.00",
            precioB: "$350.00",
            flag: true,
            uva: "Merlot.",
            aroma:
              "Con un aroma franco e intenso, se perciben en él los frutos rojos maduros, coco, vainilla y pimientos verdes.",
            maridaje:
              "Su sólida estructura le permite acompañar las carnes rojas, cabrito y cordero, pollo a la ciruela, pastas en base de hongos.",
            gusto:
              "Ataque suave, acidez balanceada, presencia de frutos rojos maduros, vainilla, notas balsámicas como el mentol.",
            origen: "Campo Real, Zacatecas, México.",
          },
          {
            nombre: "Malbec",
            precioA: "$1,360.00",
            precioB: "$350.00",
            flag: true,
            uva: "Malbec.",
            aroma:
              "Con aromas a frutos negros,  flores como violetas, de gran intensidad, se perciben la ciruela y la cereza con notas de madera.",
            maridaje: "Lechón, cortes grasos y quesos suaves.",
            gusto:
              "Tanino pulido, acidez balanceada, notas a frutos negros, flores, café y vainilla. Final largo con notas ligeramente ahumadas.",
            origen: "Campo Real, Zacatecas, México.",
          },
          {
            nombre: "Domecq XA",
            precioA: "$405.00",
            precioB: "$105.00",
            flag: true,
            uva: "Cabernet Sauvignon y Greanache.",
            aroma:
              "Aroma a frutos rojos como moras, cerezas y ciruelas, mezclados con vainilla y chocolate amargo.",
            maridaje:
              "Ideal para tomar solo o acompañar con carne asada, quesos suaves, tacos y pizza.",
            gusto:
              "Fresco y vivaz, reafirmando los frutos rojos en la boca, con final medio, agradable al paladar. ",
            origen: "Valle de Guadalupe, Baja California, México.",
          },
          {
            nombre: "Norton",
            precioA: "$978.00",
            precioB: "$250.00",
            flag: true,
            uva: "Malbec.",
            aroma:
              "Aroma a frutos rojos escarchados tales como ciruelas y grosellas, con toque de regaliz y pimienta negra. Se hace notar también un recuerdo de violetas y tierra mojada.",
            maridaje:
              "Armoniza muy bien con platillos de carnes rojas ligeramente condimentadas, a la parrilla o guisadas, cerdo asado, pavo, pollo, nopales a las brasas, comida mexicana como y quesos semicurados.",
            gusto:
              "Buen balance. Delicadas notas especiadas. Taninos de textura muy fina y de carácter dulce ya maduros. Buena concentración, acidez fresca y densidad general media, con amplio y armonioso final.",
            origen: "Mendoza, Argentina.",
          },
          {
            nombre: "Concha y Toro",
            precioA: "$366.00",
            precioB: "$95.00",
            flag: true,
            uva: "Cabernet Sauvignon.",
            aroma:
              "Desarrolla un carácter frutal con notas de ciruelas rojas y frambuesas.",
            maridaje: "Carnes rojas, pastas, pizzas, quesos suaves.",
            gusto: "Taninos armónicos, de cuerpo medio y agradable final en boca.",
            origen: "Valle Central, Chile.",
          },
          {
            nombre: "Santa Digna",
            precioA: "$681.00",
            precioB: "$175.00",
            flag: true,
            uva: "Cabernet Sauvignon.",
            aroma:
              "Aromas frutales de zarzamora y grosellas, con aromas tostados de café y chocolate, además de sensaciones de pimiento verde, cuero y anís.",
            maridaje:
              "Ideal para acompañar cortes de carne a la parrilla, embutidos, antojitos mexicanos, puntas de res con salsa de pimienta, puré de papa, sándwich de pierna, carne de cerdo en adobo.",
            gusto:
              "En boca es sedoso en taninos, elegante y buen final de boca, vino que confirma sabores de frutas y especias.",
            origen: "Valle Central, Chile.",
          },
        {
          nombre: "Gran Sangre de Toro",
          precioA: "$900.00",
          precioB: "$230.00",
          flag: true,
          uva: "Garnacha, Mazuelo y Syrah.",
          aroma:
            "Notas de frutos maduros, con elegantes tonos de madera y especias.",
          maridaje:
            "Ideal para platillos agridulces, pimientos rellenos y comida oriental.",
          gusto: "De carácter cálido en boca, serio y profundo.",
          origen: "Aragón, España.",
        },
        {
            nombre: "Atrium",
            precioA: "$1,080.00",
            precioB: "$275.00",
            flag: true,
            uva: "Merlot.",
            aroma:
              "Aroma frutal (confitura de moras) con un matiz elegante y singular que recuerda a la corteza de naranja.",
            maridaje:
              "Perfecto con ternera, el cerdo o el pato salvaje. También puede acompañar pescados a la plancha o al horno.",
            gusto: "Es redondo, pleno, con un tanino muy fino y perfumado.",
            origen: "Vilafranca del Penedès, Barcelona, España.",
          },
          {
            nombre: "La Planta",
            precioA: "$1,170.00",
            precioB: "$295.00",
            flag: true,
            uva: "Tempranillo.",
            aroma:
              "Aromas de frutos rojos con sensaciones de tostados, chocolate, canela, notas de maderas nobles y lácteos.",
            maridaje:
              "Carnes rojas a la parrilla, legumbres, arroces, perfecto para acompañar un buen cocido.",
            gusto: ".",
            origen: "Ribera del Duero, España.",
          },
          {
            nombre: "Lambrusco Vibrante",
            precioA: "$567.00",
            precioB: "$145.00",
            flag: true,
            uva: "Lambrusco Grasparossa, Malbo gentile.",
            aroma: "Afrutado, con reminiscencias de semilla de durazno.",
            maridaje:
              "Ideal con platos picantes o condimentados, excelente con platos a base de carne de cerdo, y exquisita repostería.",
            gusto:
              "Sabor suave y placentero donde la nota dulce es bien balanceada con la acidez y la ligera efervescencia natural.",
            origen: "Emilia Romagna, Italia.",
          },
          {
        nombre: "XA Blanc de Blancs",
          precioA: "$396.00",
          precioB: "$105.00",
          flag: true,
          uva: "Chardonnay, Suavignon Blanc, Chenin.",
          aroma:
            "Expresivas notas frutales como pera y manzana amarilla y flores blancas.",
          maridaje:
            "Perfecto para tomar solo como aperitivo, pero también acompañando pescados y mariscos (ceviches, aguachiles y cócteles), incluso un poco picantes. No dejes de probar un taco al pastor con este XA Blanc de Blancs. La comida asiática va de maravilla, al igual que unos quesos suaves, carnes blancas, pastas, paella y postres a base de cítricos.",
          gusto:
            "Entrada agradable, con untuosidad y frescura, acidez equilibrada y buena persistencia en boca. Las notas dulces lo hacen del agrado de mucha gente y le otorgan versatilidad.",
          origen: "Valle de Guadalupe, Baja California, México.",
        },
        {
            nombre: "Monte Xanic",
            precioA: "$970.00",
            precioB: "$245.00",
            flag: true,
            uva: "Chardonnay.",
            aroma:
              "En nariz es franco y de intensidad media. Los aromas frutales de ciruela amarilla, manzana, plátano, mandarina, flores de azahar y acacia se acompañan de una nota de hinojo y vainilla, lo que le confiere gran complejidad.",
            maridaje:
              "Risotto, pollo a la brasa, pastas cremosas, aves con salsa de hongos, mariscos a la brasa o salsa de vino y pescados grasos al horno sobre base de patatas y champiñones.",
            gusto:
              "El ataque en boca es suave. Se presenta como un vino seco, de acidez fresca, vinosidad ligera, constituyendo así un cuerpo firme y de buena estructura. Por la vía retronasal se perciben los aromas detectados por la nariz, sobre todo las flores, las frutas frescas como plátano y piña, y el anís. El equilibrio es armonioso y la persistencia muy larga.",
            origen: "Valle de Guadalupe, Baja California, México.",
          },
          {
            nombre: "La Cetto Zinfandel",
            precioA: "$414.00",
            precioB: "$105.00",
            flag: true,
            uva: "Zinfandel.",
            aroma: "Aromas frutales cómo durazno, frambuesa, fresa y manzana.",
            maridaje:
              "Ensalada o entradas de betabel, pescados, mariscos y platillos confitados o caramelizados, platillos mexicanos como chalupas en salsa verde y postres.",
            gusto: "Sabor agradable, ligeramente dulce y frutal.",
            origen: "Valle de Guadalupe, Baja California, México.",
          },
    ],
  ];
  
