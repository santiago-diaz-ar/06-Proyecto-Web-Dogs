import {
  CLEAR_DETAIL,
  CLEAR_DOGS,
  GET_ALL_DOGS,
  GET_DETAIL,
  GET_DOG,
  GET_FILTER_TEMPER,
  GET_TEMPER,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
} from "./types/types";

const initialState = {
  dogs: [],
  detail: [],
  temperaments: [],
  allDogs: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_DOGS:
      payload.forEach((dog) => {
        if (!dog.temperaments[0]) {
          dog.temperaments[0] = "no hay temperamentos"; // si no hay temper les agrego el message adecuado
        }
      });
      return {
        ...state,
        dogs: payload,
        allDogs: payload,
      };

    case GET_TEMPER:
      const limpiarTemper = payload.filter((temper) => temper.name !== ""); //elimino tempers que tiene el name vacio
      return {
        ...state,
        temperaments: limpiarTemper,
      };

    case GET_FILTER_TEMPER:
      const allDogs = state.allDogs;
      let filterDogs = [];
      if (payload === "Todos") {
        filterDogs = allDogs;
      } else {
        for (let i = 0; i < allDogs.length; i++) {
          let encontro = allDogs[i].temperaments.find(
            (t) => t === payload || t.name === payload
          );

          if (encontro) {
            filterDogs.push(allDogs[i]);
          }
        }
      }
      return {
        ...state,
        dogs: filterDogs,
      };

    case GET_DOG:
      const dogsAll = state.allDogs;
      const buscadorFunct = (payload, dogsAll) => {
        //me permite buscar el name en minuscula o mayuscula, o si la busqueda no es exacta
        const regex = new RegExp(payload, "i"); // busco no exacta
        return dogsAll.filter((dog) => regex.test(dog.name));
      };
      const buscador = buscadorFunct(payload, dogsAll);
      //console.log(buscador);
      const unico = Math.random();
      const daños = [
        {
          id: unico,
          name: "No existe perro",
          height: ["Null"],
          weight: ["Null"],
          temperaments: ["Null"],
          life_span: "Null",
          image: "Null",
        },
      ];

      if (buscador.length) {
        return {
          ...state,
          dogs: buscador,
        };
      } else {
        return {
          ...state,
          dogs: daños,
        };
      }

    case ORDER_BY_NAME:
      const ordenarName =
        payload === "A-Z"
          ? state.allDogs.sort((a, b) => {
              if (a.name > b.name) {
                return 1; // para que b sea antes que a
              }
              if (b.name > a.name) {
                return -1; // para que a se situe antes de b
              }
              return 0; // no hay cambios
            })
          : state.allDogs.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: ordenarName,
      };

    case ORDER_BY_WEIGHT:
      const ordenarWeight =
        payload === "min_weight"
          ? state.allDogs.sort((a, b) => {
              //parseInt para convertir a un numero entero
              if (parseInt(a.weight[1]) > parseInt(b.weight[1])) {
                return 1;
              }
              if (parseInt(b.weight[1]) > parseInt(a.weight[1])) {
                return -1;
              }
              return 0;
            })
          : state.allDogs.sort((a, b) => {
              if (parseInt(a.weight[1]) > parseInt(b.weight[1])) {
                return -1;
              }
              if (parseInt(b.weight[1]) > parseInt(a.weight[1])) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: ordenarWeight,
      };

    case GET_DETAIL:
      let Details = payload;
      if (!Details[0].temperaments[0]) {
        //agrego string a arr sin elemts dentro
        Details[0].temperaments = "no hay temperamentos";
      }
      return {
        ...state,
        detail: Details,
      };

    case CLEAR_DETAIL:
      return {
        ...state,
        detail: [],
      };

    case CLEAR_DOGS:
      return {
        ...state,
        dogs: [],
        allDogs: [],
        temperaments: [],
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
