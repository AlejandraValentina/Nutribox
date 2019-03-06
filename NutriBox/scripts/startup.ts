import * as Application from './application';

declare var require: (modules: string[], ready: Function, errback: Function) => void;

// Pruebe a cargar código específico de la plataforma desde la carpeta /merges.
// Más información en http://taco.visualstudio.com/es-es/docs/configure-app/#Content.
require(["./platformOverrides"],
    () => Application.initialize(),
    () => Application.initialize());